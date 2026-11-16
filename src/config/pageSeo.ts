/**
 * Central titles/descriptions for high-traffic routes.
 * After Search Console shows impressions, edit the matching path here and redeploy.
 */

export interface PageSeoEntry {
  title: string;
  description: string;
}

export const PAGE_SEO: Record<string, PageSeoEntry> = {
  '/': {
    title: 'Dead by Daylight Cheats | ESP & PC Software',
    description:
      'Dead by Daylight cheats for Windows PC: Survivor ESP, World ESP, skill check helper, and aim options. Steam, Epic, and Xbox Game Pass PC. Cloud DMA required for full functionality.',
  },
  '/products/dbd-cheats/': {
    title: 'Dead by Daylight Cheats & PC Utilities',
    description:
      'Main DBD cheat plus HWID Spoofer, UGC Tool, and Cloud DMA for Windows. Steam, Epic, and Xbox Game Pass PC.',
  },
  '/products/dbd-cheats/dbd/': {
    title: 'Dead by Daylight Cheats | ESP, Aim & Skill Checks',
    description:
      'Survivor ESP, World ESP, skill check helper, aim options, and configs. Cloud DMA is required for full functionality.',
  },
  '/products/dbd-cheats/utilities/': {
    title: 'DBD Utilities | HWID, UGC Tool & Cloud DMA',
    description:
      'Compare HWID Spoofer, UGC Tool, and Cloud DMA. Each listing is a separate purchase from the main cheat.',
  },
  '/blogs/': {
    title: 'Dead by Daylight Cheat Guides',
    description:
      'DBD cheat guides for ESP, Cloud DMA, HWID, setup, and compatibility. No undetected or ban-proof claims.',
  },
  '/blog/': {
    title: 'Dead by Daylight Cheat Guides',
    description:
      'DBD cheat guides for ESP, Cloud DMA, HWID, setup, and compatibility. No undetected or ban-proof claims.',
  },
  '/reviews/': {
    title: 'Reviews | Dead by Daylight Cheats',
    description:
      'How to read dbd-cheat.com listings. This site does not publish unverified ratings or ban-proof claims.',
  },
  '/forum/': {
    title: 'Dead by Daylight Cheat Forum',
    description:
      'Illustrative DBD threads on ESP, install, compatibility, HWID, Cloud DMA, and subscriptions.',
  },
  '/faq/': {
    title: 'FAQ | Dead by Daylight Cheats & Setup',
    description:
      'Answers on Survivor ESP, Cloud DMA, HWID Spoofer, UGC Tool, and Windows PC support at dbd-cheat.com.',
  },
  '/terms/': {
    title: 'Terms & Conditions | dbd-cheat.com',
    description: 'Purchase terms, license use, and risk notes for products linked from dbd-cheat.com.',
  },
  '/privacy/': {
    title: 'Privacy Policy | dbd-cheat.com',
    description: 'How dbd-cheat.com uses analytics, cookies, and contact data when you browse or request support.',
  },
  '/about/': {
    title: 'About dbd-cheat.com',
    description:
      'What dbd-cheat.com publishes: a Windows Dead by Daylight cheat, Cloud DMA, HWID Spoofer, and UGC Tool.',
  },
  '/support/': {
    title: 'Support | dbd-cheat.com',
    description: 'Help with the Dead by Daylight cheat, Cloud DMA, HWID Spoofer, UGC Tool, and checkout.',
  },
};

export function normalizeSeoPath(pathname: string): string {
  let path = pathname || '/';
  if (!path.startsWith('/')) path = `/${path}`;
  if (path !== '/' && !path.endsWith('/')) path = `${path}/`;
  return path;
}

export function getPageSeoEntry(pathname: string): PageSeoEntry | undefined {
  return PAGE_SEO[normalizeSeoPath(pathname)];
}
