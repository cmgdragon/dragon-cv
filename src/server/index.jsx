import { Hono } from 'hono'
import { cors } from 'hono/cors'
import {
    MethodNotAllowedError,
    NotFoundError,
    getAssetFromKV,
    serveSinglePageApp,
  } from "@cloudflare/kv-asset-handler"

import { SSRRender } from '../index-server'
import assetManifest from "__STATIC_CONTENT_MANIFEST";
import { cache } from "hono/cache";
import { sendEmail } from './workers/sendEmail'

const app = new Hono()

app

  .use("*", cors({
    origin: ['https://cmgdragon-cv.the-dragon-domains.workers.dev', 'https://cmgdragon.dev'],
    allowHeaders: ['GET', 'POST', 'OPTIONS']
  }))

  .get(
    "*",
    cache({
      cacheName: "cmgdragon-dev",
      cacheControl: "max-age=3600",
    })
  )

  .post('/sendemail', sendEmail)

  .get("/", async (c) => {
    c.header('Content-Type', 'text/html')
    return c.newResponse(await SSRRender())
  })
  .notFound((c) =>
    c.json(
      {
        message: "Not Found",
        ok: false,
      },
      404
    )
  )
  .onError((err, c) =>
    c.json(
      {
        name: err.name,
        message: err.message,
      },
      500
    )
  )

  .get("/*", async (c) => {
    try {

      return await getAssetFromKV(
        {
          request: c.req.raw,
          waitUntil: async (p) => c.executionCtx.waitUntil(p),
        },
        {
          ASSET_NAMESPACE: c.env.__STATIC_CONTENT,
          ASSET_MANIFEST: assetManifest,
          defaultETag: "strong",
          mapRequestToAsset: serveSinglePageApp,
          cacheControl: {
            browserTTL: undefined,
            edgeTTL: 2 * 60 * 60 * 24,
            bypassCache: true,
          },
        }
      )
    } catch (e) {
      if (e instanceof NotFoundError) {
        throw new Error(e.message);
      } else if (e instanceof MethodNotAllowedError) {
        throw new Error(e.message);
      } else {
        throw new Error("An unexpected error occurred");
      }
    }
  })

export default app