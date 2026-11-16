/** Static path redirects (301). Keys are pathname without query/hash. */
export const PATH_REDIRECTS = new Map([
  ['/blog', '/blogs/'],
  ['/blog/', '/blogs/'],
  ['/blogs', '/blogs/'],
  ['/about', '/about/'],
  ['/contact', '/support/'],
  ['/contact/', '/support/'],
  ['/support', '/support/'],
  ['/privacy', '/privacy/'],
  ['/terms', '/terms/'],
  ['/faq', '/faq/'],
  ['/cheats', '/products/dbd-cheats/'],
  ['/cheats/', '/products/dbd-cheats/'],
  ['/cheats/lite', '/products/dbd-cheats/dbd/'],
  ['/cheats/lite/', '/products/dbd-cheats/dbd/'],
  ['/cheats/pro', '/products/dbd-cheats/dbd/'],
  ['/cheats/pro/', '/products/dbd-cheats/dbd/'],
  ['/cheats/elite', '/products/dbd-cheats/dbd/'],
  ['/cheats/elite/', '/products/dbd-cheats/dbd/'],
  ['/cheats/compare', '/blogs/dbd-cheats-comparison/'],
  ['/cheats/compare/', '/blogs/dbd-cheats-comparison/'],
  ['/products/dbd-cheats/elite', '/products/dbd-cheats/dbd/'],
  ['/products/dbd-cheats/elite/', '/products/dbd-cheats/dbd/'],
  ['/products/dbd-cheats/lite', '/products/dbd-cheats/dbd/'],
  ['/products/dbd-cheats/lite/', '/products/dbd-cheats/dbd/'],
  ['/products/dbd-cheats/pro', '/products/dbd-cheats/dbd/'],
  ['/products/dbd-cheats/pro/', '/products/dbd-cheats/dbd/'],
  ['/products/dbd-cheats/unlock-all', '/products/dbd-cheats/'],
  ['/products/dbd-cheats/unlock-all/', '/products/dbd-cheats/'],
]);

/** Paths that should not receive a forced trailing slash. */
export const TRAILING_SLASH_SKIP = /\.[a-z0-9]+$/i;

export function resolvePathRedirect(pathname) {
  const direct = PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname.startsWith('/blog/')) {
    const rest = pathname.slice('/blog/'.length);
    const target = `/blogs/${rest}`;
    if (!target.endsWith('/') && !TRAILING_SLASH_SKIP.test(target)) return `${target}/`;
    return target;
  }

  if (pathname !== '/' && !pathname.endsWith('/') && !TRAILING_SLASH_SKIP.test(pathname)) {
    return `${pathname}/`;
  }

  return null;
}
