import type { IconName } from '../components/icons/types';
import { normalizeInternalPath, productPath, ROUTES } from '../utils/path';

export type FaqTopic =
  | 'all'
  | 'plans'
  | 'esp'
  | 'scripts'
  | 'safety'
  | 'products'
  | 'blog'
  | 'setup';

export interface SiteFaqItem {
  id: string;
  topic: FaqTopic;
  icon: IconName;
  q: string;
  a: string;
  aHtml?: string;
  scopes?: string[];
}

function a(text: string): string {
  return text;
}

function link(text: string, href: string): string {
  return `<a href="${normalizeInternalPath(href)}">${text}</a>`;
}

const mainCheat = link('Dead by Daylight Cheats', productPath('dbd'));
const productsHub = link('product catalog', ROUTES.products);
const hwid = link('HWID Spoofer', productPath('hwid-spoofer'));
const ugc = link('UGC Tool', productPath('ugc'));
const cloud = link('Cloud DMA', productPath('cloud-dma'));
const faqPage = link('full FAQ', ROUTES.faq);
const blog = link('blogs', ROUTES.blog);

export const siteFaqs: SiteFaqItem[] = [
  {
    id: 'status',
    topic: 'setup',
    icon: 'faqStatus',
    q: 'Where do I check whether a build matches the game?',
    a: a('Read the merchant note for the product you bought after every Dead by Daylight update. If that note is older than the game patch, do not assume yesterday’s config still matches.'),
  },
  {
    id: 'after-buy',
    topic: 'setup',
    icon: 'faqAfterBuy',
    q: 'What happens after I buy?',
    a: a('Checkout is on the merchant page linked from the product. Follow only the delivery notes that come with that order. Full functionality of the main cheat still requires Cloud DMA.'),
  },
  {
    id: 'ban-risk',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Can I get banned using a Dead by Daylight cheat?',
    a: a('Yes. Third-party tools can conflict with the game rules and anti-cheat systems. Account action is possible. Nothing here is offered as ban-proof or risk-free.'),
  },
  {
    id: 'platforms',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Which platforms are supported?',
    a: a('Windows 10 and 11 only. Dead by Daylight on Steam, Epic Games, or Xbox Game Pass for PC. Console and mobile are not supported. macOS and Linux are not supported.'),
  },
  {
    id: 'license-move',
    topic: 'setup',
    icon: 'faqLicenseMove',
    q: 'Does Cloud DMA come with the main cheat?',
    a: `No. ${cloud} is a separate Hyper-V layer for a single PC, and the merchant requires it for full functionality. Related purchases may be needed. Prices are on the merchant page.`,
  },
  {
    id: 'products-page',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'Where are the products listed?',
    a: `${productsHub} lists ${mainCheat}, ${hwid}, ${ugc}, and ${cloud}.`,
  },
  {
    id: 'what-is-esp',
    topic: 'esp',
    icon: 'faqWhatIsEsp',
    q: 'What does Survivor ESP include?',
    a: `Box, fill, skeleton, nickname, health, level, prestige, character name, distance, and view line. See ${mainCheat}.`,
    scopes: ['dbd'],
  },
  {
    id: 'world-esp',
    topic: 'esp',
    icon: 'faqEspVsScripts',
    q: 'What does World ESP include?',
    a: a('Generators, meat hooks, pallets, windows, closets, chests, totems, traps, the hatch, and escape doors.'),
    scopes: ['dbd'],
  },
  {
    id: 'skill-check',
    topic: 'scripts',
    icon: 'faqWhichTierScripts',
    q: 'What is the skill check helper?',
    a: a('An aid for the skill-check minigame on the current game build. It can miss after a patch. It is part of the main cheat, which needs Cloud DMA for full functionality.'),
    scopes: ['dbd'],
  },
  {
    id: 'aimbot',
    topic: 'scripts',
    icon: 'faqWhichTierEsp',
    q: 'Which aim options are listed?',
    a: a('Aim Key, FOV, Smoothness, and Draw FOV. The same build also lists Battle Mode, a crosshair, out-of-screen arrows, and an FOV changer.'),
    scopes: ['dbd'],
  },
  {
    id: 'hwid',
    topic: 'products',
    icon: 'faqProductsPage',
    q: 'What is HWID Spoofer?',
    a: `${hwid} is hardware-ID spoofing and a cleaner. The merchant lists Dead by Daylight under Easy Anti-Cheat. It does not unban an account or replace the cheat.`,
    scopes: ['hwid-spoofer'],
  },
  {
    id: 'ugc',
    topic: 'products',
    icon: 'faqAfterBuy',
    q: 'What is UGC Tool?',
    a: `${ugc} sells ready-made game accounts and hands off credentials. It is not recovery of an account you already own, and it does not promise the login will last.`,
    scopes: ['ugc'],
  },
  {
    id: 'cloud-dma',
    topic: 'plans',
    icon: 'faqRankTiers',
    q: 'What is Cloud DMA?',
    a: `${cloud} is Hyper-V infrastructure for a single PC. It is required for full functionality of the main cheat. It is not the cheat menu by itself.`,
    scopes: ['cloud-dma', 'dbd'],
  },
  {
    id: 'no-guarantee',
    topic: 'safety',
    icon: 'faqBanRisk',
    q: 'Do you guarantee the software will avoid a penalty?',
    a: a('No. This site does not describe any product as undetected, ban-proof, or guaranteed to reverse a restriction.'),
    scopes: ['dbd', 'hwid-spoofer', 'ugc', 'cloud-dma'],
  },
  {
    id: 'stores',
    topic: 'setup',
    icon: 'faqPlatforms',
    q: 'Is Xbox console or PlayStation supported?',
    a: a('No. Xbox Game Pass for PC is a Windows storefront. Console and mobile clients are not part of this catalog.'),
  },
  {
    id: 'faq-more',
    topic: 'all',
    icon: 'faqMore',
    q: 'Where is the full FAQ?',
    a: `See the ${faqPage}, or read the ${blog} for ESP, Cloud DMA, HWID, and UGC notes.`,
  },
];

export function getLandingFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) =>
    ['status', 'after-buy', 'ban-risk', 'platforms', 'license-move', 'products-page'].includes(f.id),
  );
}

export function getAllFaqs(): SiteFaqItem[] {
  return siteFaqs.filter((f) => f.topic !== 'all');
}

export const SITE_FAQ_SECTION_COPY = {
  eyebrow: 'All topics',
  title: 'Browse by category',
  subtitle: 'Filter ESP, products, setup, and safety answers for the Windows catalog.',
} as const;

export const SITE_FAQ_FILTER_TOPICS: FaqTopic[] = [
  'all',
  'plans',
  'esp',
  'scripts',
  'safety',
  'products',
  'blog',
  'setup',
];

export const CONTEXTUAL_FAQ_SECTION_COPY = {
  eyebrow: 'FAQ',
  title: 'Questions about this page',
  subtitle: 'Answers tied to what you are reading—visit the FAQ page for every topic.',
} as const;

export function faqFilterTopicsForItems(items: SiteFaqItem[]): FaqTopic[] {
  const present = new Set(items.map((item) => item.topic));
  const topics: FaqTopic[] = ['all'];
  for (const topic of SITE_FAQ_FILTER_TOPICS) {
    if (topic !== 'all' && present.has(topic)) topics.push(topic);
  }
  return topics;
}

export function getProductFaqs(slug: string, kind: 'tier' | 'utility'): SiteFaqItem[] {
  const general = siteFaqs.filter(
    (f) => !f.scopes && ['setup', 'safety', 'plans', 'esp', 'scripts', 'products'].includes(f.topic),
  );
  const scoped = siteFaqs.filter((f) => f.scopes?.includes(slug));
  const combined = kind === 'tier' ? [...scoped, ...general.slice(0, 6)] : [...scoped, ...general.slice(0, 5)];

  const seen = new Set<string>();
  return combined.filter((item) => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
}

const blogTopicFaqs: Record<string, SiteFaqItem[]> = {
  'Buying Guides': [
    {
      id: 'blog-buy-which',
      topic: 'blog',
      icon: 'faqBlogGuideStart',
      q: 'Which listing should I open first?',
      a: `Start with ${mainCheat} if you want the overlay. Add ${cloud} for full functionality. ${hwid} and ${ugc} are different jobs.`,
    },
  ],
  Features: [
    {
      id: 'blog-features-esp',
      topic: 'blog',
      icon: 'faqBlogSlugEsp',
      q: 'Which product has the overlay in this article?',
      a: `${mainCheat} lists Survivor ESP, World ESP, the skill check helper, aim options, and configs. Full functionality requires ${cloud}.`,
    },
  ],
  Tutorials: [
    {
      id: 'blog-setup-order',
      topic: 'blog',
      icon: 'faqBlogSetupLoader',
      q: 'Where do the delivery notes come from?',
      a: a('From the merchant order, not from a public comment. Stop if the game patch is newer than the build note.'),
    },
  ],
  'Safety & Compatibility': [
    {
      id: 'blog-sec-claims',
      topic: 'blog',
      icon: 'faqBlogSecVac',
      q: 'Does this article promise a clean account?',
      a: a('No. Articles describe listings and limits. They do not promise that a match, account, or hardware profile will avoid a penalty.'),
    },
  ],
};

const defaultBlogFaqs: SiteFaqItem[] = [
  {
    id: 'blog-default-1',
    topic: 'blog',
    icon: 'faqBlogDefault1',
    q: 'Are blog guides the merchant feature list?',
    a: `Articles explain the listings and link to the ${productsHub}. The current checkout text is the offer to trust.`,
  },
  {
    id: 'blog-default-2',
    topic: 'blog',
    icon: 'faqBlogDefault2',
    q: 'Need help applying this guide?',
    a: a('Contact support with your order email and the article slug. Do not post keys or passwords on the public forum.'),
  },
  {
    id: 'blog-default-3',
    topic: 'blog',
    icon: 'faqBlogDefault3',
    q: 'Will a config in this article work next patch?',
    a: a('Re-check the merchant note after every Dead by Daylight update. Reload a config only when that note says the build matches the game.'),
  },
];

export function getBlogFaqs(tag: string, slug: string): SiteFaqItem[] {
  const topicFaqs = blogTopicFaqs[tag] ?? [];
  const slugHints: SiteFaqItem[] = [];

  if (slug.includes('esp') || slug.includes('features') || slug.includes('cloud-dma')) {
    slugHints.push({
      id: 'blog-slug-esp',
      topic: 'esp',
      icon: 'faqBlogSlugEsp',
      q: 'Which product covers the overlay in this article?',
      a: `The main DBD cheat lists Survivor ESP, World ESP, the skill check helper, aim options, and configs. Full functionality requires Cloud DMA.`,
    });
  }
  if (slug.includes('hwid') || slug.includes('ugc') || slug.includes('safety') || slug.includes('anti-cheat')) {
    slugHints.push({
      id: 'blog-slug-hwid',
      topic: 'products',
      icon: 'faqBlogSlugHwid',
      q: 'Does this article replace the HWID or UGC listing?',
      a: `${hwid} is a hardware-ID utility. ${ugc} is a ready-made account handoff. Neither one undoes a game penalty.`,
    });
  }

  return [...slugHints, ...topicFaqs, ...defaultBlogFaqs].slice(0, 8);
}

export const compareRows = [
  { feature: 'Survivor ESP', icon: 'comparePlayerEsp' as const, included: true },
  { feature: 'World ESP', icon: 'compareFullMapHack' as const, included: true },
  { feature: 'Skill Check Helper', icon: 'compareAbilityRadius' as const, included: true },
  { feature: 'Aimbot (Aim Key, FOV, Smoothness, Draw FOV)', icon: 'compareTargetSelector' as const, included: true },
  { feature: 'Battle Mode, crosshair, arrows, FOV changer', icon: 'compareZoomHack' as const, included: true },
  { feature: 'Menu and config options', icon: 'compareCloudBackup' as const, included: true },
  { feature: 'Cloud DMA required for full functionality', icon: 'compareDevSupport' as const, included: true },
];
