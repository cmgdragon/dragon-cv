import React from 'react';
import { renderToReadableStream } from 'react-dom/server';
import Html from './server/html';

export async function SSRRender() {
  return await renderToReadableStream(<Html />);
}