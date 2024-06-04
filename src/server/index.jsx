import { Hono } from 'hono'
import {
    MethodNotAllowedError,
    NotFoundError,
    getAssetFromKV,
    serveSinglePageApp,
  } from "@cloudflare/kv-asset-handler"

import { renderToString } from 'react-dom/server'
import { serveStatic } from 'hono/cloudflare-workers'
import { SSRRender } from '../index-server'
import assetManifest from "__STATIC_CONTENT_MANIFEST";
import { cache } from "hono/cache";
import { sendEmail } from './workers/sendEmail'
//import Html from './html'


const app = new Hono()

app
  .get(
    "*",
    cache({
      cacheName: "cmgdragon-dev",
      cacheControl: "max-age=3600",
    })
  )

  .post('/sendemail', sendEmail)

  .get("/", async (c) => c.newResponse(await SSRRender()))
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
      );
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


  //----------------------

/*
app.get("/public/*", async (ctx) => {
    return await ctx.env.ASSETS.fetch(ctx.req.raw);
});

/*app.get('/', (c) => {
    const rendered = renderToString(<Html />)
    console.log(rendered)
    c.header('Content-Type', 'text/html')

    c.status(200)

    return c.html(`<!DOCTYPE html>${rendered}`)

})

app.get('/*', serveStatic({ root: './public' }))
*/

export default app