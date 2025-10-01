import type { APIRoute } from 'astro';

export const GET: APIRoute = () =>
  new Response('{}', {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  }); 
