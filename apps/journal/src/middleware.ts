import type { MiddlewareHandler } from 'astro';

// Redirect bare /keystatic routes to the journal sub-app so Keystatic Cloud can use the root domain.
export const onRequest: MiddlewareHandler = ({ request, redirect }, next) => {
  const url = new URL(request.url);
  if (url.pathname === '/keystatic' || url.pathname.startsWith('/keystatic/')) {
    url.pathname = `/journal${url.pathname}`;
    return redirect(url.toString(), 308);
  }

  return next();
};
