/**
 * Single source of truth for merchant checkout destinations.
 * Referral ID: TAZEEN only. Do not alter, shorten, or re-encode these URLs.
 */
export const CHECKOUT_URLS = {
  dbd: 'https://zadeyo.com/go/TAZEEN?to=%2Fproducts%2Fdbd',
  hwidSpoofer: 'https://zadeyo.com/go/TAZEEN?to=%2Fproducts%2Fhwid-spoofer',
  ugc: 'https://zadeyo.com/go/TAZEEN?to=%2Fproducts%2Fugc',
  cloudDma: 'https://zadeyo.com/go/TAZEEN?to=%2Fproducts%2Fcloud-dma',
};

/** Checkout paths → external product URLs (used by Node serve + Astro middleware). */
export const CHECKOUT_PATH_REDIRECTS = new Map([
  ['/go/dbd', CHECKOUT_URLS.dbd],
  ['/go/dbd/', CHECKOUT_URLS.dbd],
  ['/go/hwid-spoofer', CHECKOUT_URLS.hwidSpoofer],
  ['/go/hwid-spoofer/', CHECKOUT_URLS.hwidSpoofer],
  ['/go/ugc', CHECKOUT_URLS.ugc],
  ['/go/ugc/', CHECKOUT_URLS.ugc],
  ['/go/cloud-dma', CHECKOUT_URLS.cloudDma],
  ['/go/cloud-dma/', CHECKOUT_URLS.cloudDma],
]);

export function resolveCheckoutPathRedirect(pathname) {
  const direct = CHECKOUT_PATH_REDIRECTS.get(pathname);
  if (direct) return direct;

  if (pathname !== '/' && !pathname.endsWith('/')) {
    return CHECKOUT_PATH_REDIRECTS.get(`${pathname}/`) ?? null;
  }

  return null;
}
