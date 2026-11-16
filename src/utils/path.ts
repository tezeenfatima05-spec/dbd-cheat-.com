import { PRODUCT_BASE } from '../config/site';

/** Normalize internal paths to match trailingSlash: 'always' and canonical URLs. */
export function withTrailingSlash(path: string): string {
  if (!path || path.startsWith('http') || path.startsWith('#') || path.startsWith('mailto:')) {
    return path;
  }
  const [pathname, hash = ''] = path.split('#');
  const normalized = pathname === '/' || pathname.endsWith('/') ? pathname : `${pathname}/`;
  return hash ? `${normalized}#${hash}` : normalized;
}

const dbdProduct = `${PRODUCT_BASE}dbd/`;

/** Former paths → current routes (301 targets match astro.config + scripts/redirects.mjs). */
export const LEGACY_PATH_MAP: Record<string, string> = {
  '/cheats': PRODUCT_BASE,
  '/cheats/': PRODUCT_BASE,
  '/cheats/lite': dbdProduct,
  '/cheats/lite/': dbdProduct,
  '/cheats/pro': dbdProduct,
  '/cheats/pro/': dbdProduct,
  '/cheats/elite': dbdProduct,
  '/cheats/elite/': dbdProduct,
  '/cheats/compare': '/blogs/dbd-cheats-comparison/',
  '/cheats/compare/': '/blogs/dbd-cheats-comparison/',
  '/contact': '/support/',
  '/contact/': '/support/',
  '/blog': '/blogs/',
  '/blog/': '/blogs/',
  '/products/dbd-cheats/elite': dbdProduct,
  '/products/dbd-cheats/elite/': dbdProduct,
  '/products/dbd-cheats/lite': dbdProduct,
  '/products/dbd-cheats/lite/': dbdProduct,
  '/products/dbd-cheats/pro': dbdProduct,
  '/products/dbd-cheats/pro/': dbdProduct,
  '/products/dbd-cheats/unlock-all': PRODUCT_BASE,
  '/products/dbd-cheats/unlock-all/': PRODUCT_BASE,
};

export function normalizeInternalPath(href: string): string {
  if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('/go/')) {
    return href;
  }

  const hashIndex = href.indexOf('#');
  const rawPath = hashIndex >= 0 ? href.slice(0, hashIndex) : href;
  const hash = hashIndex >= 0 ? href.slice(hashIndex) : '';

  let pathname = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;
  if (pathname.startsWith('/blog/')) {
    pathname = `/blogs/${pathname.slice('/blog/'.length)}`;
  }
  pathname = LEGACY_PATH_MAP[pathname] ?? pathname;

  return withTrailingSlash(pathname) + hash;
}

export const ROUTES = {
  home: '/',
  blog: '/blogs/',
  reviews: '/reviews/',
  forum: '/forum/',
  products: PRODUCT_BASE,
  productsDbd: dbdProduct,
  productsUtilities: `${PRODUCT_BASE}utilities/`,
  faq: '/faq/',
  terms: '/terms/',
  about: '/about/',
  support: '/support/',
  privacy: '/privacy/',
} as const;

export function blogPostPath(slug: string): string {
  return `/blogs/${slug}/`;
}

/** @deprecated Use productPath — cheat pages live under products. */
export function cheatPath(slug: string): string {
  return productPath(slug);
}

export function productPath(slug: string): string {
  return `${PRODUCT_BASE}${slug}/`;
}
