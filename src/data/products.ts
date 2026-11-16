import { t } from '../i18n';
import { checkoutForSlug, checkoutPath } from '../config/checkout';
import { PRODUCT_BASE } from '../config/site';
import type { IconName } from '../components/icons/types';

export interface ProductSlide {
  src: string;
  alt: string;
  caption: string;
  captionDesc: string;
}

export interface ProductOverview {
  title: string;
  paragraphs: string[];
}

export interface AcquisitionStep {
  num: string;
  title: string;
  desc: string;
}

export interface ProductAcquisition {
  title: string;
  steps: AcquisitionStep[];
}

export interface SystemRequirement {
  icon: IconName;
  text: string;
}

export interface ProductPage {
  slug: string;
  kind: 'tier' | 'utility';
  badge: string;
  category?: string;
  tier?: string;
  name: string;
  title: string;
  subtitle: string;
  desc: string;
  features: string[];
  more: number;
  variant?: 'essential' | 'popular' | 'limited';
  buyUrl: string;
  images: ProductSlide[];
  overview: ProductOverview;
  acquisition: ProductAcquisition;
  goodToKnow: string;
  limitations: string;
  fullFeatures: string[];
  systemRequirements: SystemRequirement[];
  about?: { type: 'h2' | 'p'; text: string }[];
  body: { type: 'h2' | 'p'; text: string }[];
  relatedBlogSlugs: string[];
}

/** Guides paired with each product detail page */
export const productRelatedBlogSlugs: Record<string, string[]> = {
  dbd: ['best-dbd-cheats', 'dbd-esp-guide', 'dbd-cheats-features', 'dbd-cloud-dma', 'dbd-installation'],
  'hwid-spoofer': ['dbd-hwid-spoofer', 'dbd-anti-cheat', 'dbd-cheats-safety', 'dbd-cheats-comparison'],
  ugc: ['dbd-ugc-tool', 'dbd-cheats-safety', 'dbd-cheats-comparison', 'best-dbd-cheats'],
  'cloud-dma': ['dbd-cloud-dma', 'dbd-pc-requirements', 'dbd-cheats-features', 'dbd-installation'],
};

const productBase = PRODUCT_BASE;

const defaultAcquisitionSteps: AcquisitionStep[] = [
  {
    num: '01',
    title: 'Match the listing to the job',
    desc: 'The main cheat, Cloud DMA, HWID Spoofer, and UGC Tool are separate purchases on dbd-cheat.com.',
  },
  {
    num: '02',
    title: 'Confirm Windows PC',
    desc: 'Windows 10 or 11, with Dead by Daylight on Steam, Epic Games, or Xbox Game Pass for PC.',
  },
  {
    num: '03',
    title: 'Read the merchant offer',
    desc: 'Price, term, and any related purchases are on the checkout page. This site does not invent a price.',
  },
  {
    num: '04',
    title: 'Follow the order you receive',
    desc: 'Use only the delivery notes that come with that purchase. Stop if a game update is newer than the build note.',
  },
];

function acquisitionFor(productName: string): ProductAcquisition {
  return {
    title: `How to get ${productName}`,
    steps: defaultAcquisitionSteps,
  };
}

const sharedGoodToKnow =
  'Dead by Daylight runs here on Windows 10 or 11. The merchant supports Steam, Epic Games, and Xbox Game Pass for PC. Full functionality of the main cheat requires Cloud DMA, sold separately. Related purchases may be required. Confirm the current feature list on the merchant page before you pay.';

const sharedLimitations =
  'Third-party software for Dead by Daylight can conflict with the game rules and anti-cheat systems. Account action is possible. These listings are not offered as ban-proof or risk-free, and they do not guarantee that a penalty will be reversed. Console and mobile are not supported. Availability can change after a game or Windows update.';

const pcSystemRequirements: SystemRequirement[] = [
  { icon: 'reqWindows', text: '64-bit Windows 10 or Windows 11.' },
  { icon: 'reqSteam', text: 'Dead by Daylight on Steam, Epic Games, or Xbox Game Pass for PC.' },
  { icon: 'reqSettings', text: 'A PC that can run the current Dead by Daylight client.' },
  { icon: 'reqWifi', text: 'A connection to reach merchant checkout and any build note.' },
  { icon: 'reqCpu', text: 'Cloud DMA (Hyper-V, single PC) for full main-cheat functionality.' },
];

type GalleryKey = keyof typeof galleryRaw;

const gameplay = '/images/gameplay';

const galleryRaw = {
  esp: {
    src: `${gameplay}/dbd-esp.png`,
    alt: 'Dead by Daylight Survivor ESP with box, skeleton, and player details',
    caption: 'Survivor ESP',
    captionDesc: 'Box, fill, skeleton, nickname, health, level, prestige, character name, distance, and view line.',
  },
  'world-esp': {
    src: `${gameplay}/dbd-world-esp.png`,
    alt: 'Dead by Daylight World ESP marking generators, hooks, pallets, and exit gates',
    caption: 'World ESP',
    captionDesc: 'Generators, meat hooks, pallets, windows, closets, chests, totems, traps, hatch, and escape doors.',
  },
  'skill-check': {
    src: `${gameplay}/dbd-skill-check.png`,
    alt: 'Dead by Daylight skill check helper on a generator interaction',
    caption: 'Skill Check Helper',
    captionDesc: 'An aid for the skill-check minigame on the current game build.',
  },
  aim: {
    src: `${gameplay}/dbd-aim.png`,
    alt: 'Dead by Daylight aim options with FOV and smoothness controls',
    caption: 'Aimbot',
    captionDesc: 'Aim Key, FOV, Smoothness, and Draw FOV.',
  },
  menu: {
    src: `${gameplay}/dbd-menu.png`,
    alt: 'Dead by Daylight cheat menu and config options',
    caption: 'Menu and configs',
    captionDesc: 'Menu and config options, plus Battle Mode, crosshair, out-of-screen arrows, and FOV changer.',
  },
  'cloud-dma': {
    src: `${gameplay}/dbd-cloud-dma.png`,
    alt: 'Cloud DMA Hyper-V layer described for a single Windows PC',
    caption: 'Cloud DMA',
    captionDesc: 'Hyper-V infrastructure on one PC. Required for full functionality of the main cheat.',
  },
};

function slide(...keys: GalleryKey[]): ProductSlide[] {
  return keys.map((k) => {
    const item = galleryRaw[k];
    return {
      src: item.src,
      alt: item.alt,
      caption: item.caption,
      captionDesc: item.captionDesc,
    };
  });
}

function slugFromHref(href: string): string {
  const segment = href.replace(productBase, '').replace(/^\//, '').replace(/\/$/, '');
  return segment || 'dbd';
}

const tierAbout: Record<string, ProductPage['about']> = {
  dbd: [
    {
      type: 'p',
      text: 'The main Dead by Daylight cheat is one Windows product. It lists Survivor ESP, World ESP, a skill check helper, aim options, Battle Mode, a crosshair, out-of-screen arrows, an FOV changer, and menu/config options.',
    },
    { type: 'h2', text: 'Cloud DMA is part of the full setup' },
    {
      type: 'p',
      text: 'The merchant requires Cloud DMA for full functionality. That layer is Hyper-V based and intended for a single PC. It is a separate purchase, and related purchases may be needed. Prices stay on the merchant page.',
    },
  ],
};

const tierBodies: Record<string, ProductPage['body']> = {
  dbd: [
    { type: 'h2', text: 'Survivor ESP' },
    {
      type: 'p',
      text: 'Box, fill, skeleton, nickname, health, level, prestige, character name, distance, and view line.',
    },
    { type: 'h2', text: 'World ESP' },
    {
      type: 'p',
      text: 'Generators, meat hooks, pallets, windows, closets, chests, totems, traps, the hatch, and escape doors.',
    },
    { type: 'h2', text: 'Aim, skill checks, and extras' },
    {
      type: 'p',
      text: 'Aimbot options are Aim Key, FOV, Smoothness, and Draw FOV. The build also lists a skill check helper, Battle Mode, a crosshair, out-of-screen arrows, an FOV changer, and menu/config options.',
    },
  ],
};

const utilityBodies: Record<string, ProductPage['body']> = {
  'hwid-spoofer': [
    { type: 'h2', text: 'What the listing is' },
    {
      type: 'p',
      text: 'HWID Spoofer is hardware-ID spoofing and a cleaner. On the merchant page, Dead by Daylight is grouped under Easy Anti-Cheat. That is the context for this utility. It is not the main cheat menu.',
    },
    { type: 'h2', text: 'What it does not do' },
    {
      type: 'p',
      text: 'It does not lift a game penalty, file an appeal, or return an account you lost. Ready-made accounts, if you are considering them, are the separate [UGC Tool](/products/dbd-cheats/ugc/) listing. Full cheat functionality still requires [Cloud DMA](/products/dbd-cheats/cloud-dma/).',
    },
  ],
  ugc: [
    { type: 'h2', text: 'Credential handoff' },
    {
      type: 'p',
      text: 'UGC Tool is the merchant’s sale of ready-made game accounts. Delivery is a credential handoff: login details for an account the merchant is selling. Read the current offer at checkout for what is included today.',
    },
    { type: 'h2', text: 'Limits' },
    {
      type: 'p',
      text: 'This is not recovery of an account you already own. There is no promise that the login stays available, keeps its progress, or remains only yours. Buying and selling game accounts often conflicts with the publisher’s terms. Keep credentials off public pages.',
    },
  ],
  'cloud-dma': [
    { type: 'h2', text: 'Single PC' },
    {
      type: 'p',
      text: 'Cloud DMA is Hyper-V based infrastructure meant to run on the same PC as the game. It is required for full functionality of the main Dead by Daylight cheat. Buying Cloud DMA alone does not add the cheat menu.',
    },
    { type: 'h2', text: 'Related purchases' },
    {
      type: 'p',
      text: 'The merchant may require separate related purchases. This page does not invent those prices. Confirm them on the Cloud DMA checkout before you pay, and confirm Windows can start the Hyper-V layer.',
    },
  ],
};

const productContent: Record<
  string,
  Pick<ProductPage, 'overview' | 'images' | 'fullFeatures' | 'goodToKnow' | 'limitations' | 'systemRequirements'>
> = {
  dbd: {
    images: slide('esp', 'world-esp', 'skill-check', 'aim', 'menu'),
    goodToKnow: sharedGoodToKnow,
    limitations: sharedLimitations,
    systemRequirements: pcSystemRequirements,
    fullFeatures: [
      'Survivor ESP: box, fill, skeleton, nickname, health, level, prestige, character name, distance, view line',
      'World ESP: generators, meat hooks, pallets, windows, closets, chests, totems, traps, hatch, escape doors',
      'Skill Check Helper',
      'Aimbot: Aim Key, FOV, Smoothness, Draw FOV',
      'Battle Mode, Crosshair, Out of Screen Arrows, FOV Changer',
      'Menu and config options',
      'Windows 10 and 11',
      'Cloud DMA required for full functionality',
    ],
    overview: {
      title: 'One Dead by Daylight cheat for Windows',
      paragraphs: [
        'This is the main PC build: Survivor ESP, World ESP, a skill check helper, aim options, Battle Mode, a crosshair, out-of-screen arrows, an FOV changer, and menu/config options.',
        'Steam, Epic Games, and Xbox Game Pass for PC are the storefronts. Cloud DMA is required for full functionality and is purchased separately. Related purchases may be needed.',
      ],
    },
  },
  'hwid-spoofer': {
    images: slide('menu', 'esp'),
    goodToKnow:
      'The merchant lists Dead by Daylight under Easy Anti-Cheat for this hardware-ID utility. Read that page for the games and term on offer today. It is a different checkout from the main cheat.',
    limitations:
      'HWID Spoofer does not unban an account, appeal a penalty, or recover a login you lost. It is not a substitute for the main cheat or for Cloud DMA. Hardware-ID tools can conflict with platform rules. You use it at your own risk.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11 64-bit.' },
      { icon: 'reqSteam', text: 'A PC copy of Dead by Daylight (Steam, Epic, or Xbox Game Pass PC) if that is the game you are pairing it with.' },
      { icon: 'reqShieldGuide', text: 'The current merchant listing for supported titles and the EAC grouping.' },
      { icon: 'reqWifi', text: 'A connection to the HWID Spoofer checkout.' },
    ],
    fullFeatures: [
      'Hardware ID spoofing',
      'Cleaner tools',
      'Framed for Dead by Daylight',
      'Merchant lists DBD under Easy Anti-Cheat',
      'Separate from the main cheat and Cloud DMA',
      'Does not restore or unban an account',
    ],
    overview: {
      title: 'Hardware ID spoofing and cleaner',
      paragraphs: [
        'HWID Spoofer is a hardware-ID spoofing and cleaner utility. For this catalog it is framed around Dead by Daylight, which the merchant groups under Easy Anti-Cheat.',
        'It does not include Survivor ESP or the rest of the cheat menu, and it is not an account-recovery product. UGC Tool is the separate ready-made account listing.',
      ],
    },
  },
  ugc: {
    images: slide('menu'),
    goodToKnow:
      'Delivery is a credential handoff for a ready-made game account the merchant is selling. Read the checkout page for what that handoff includes today. Do not post the login on the forum.',
    limitations:
      'UGC Tool does not recover, unban, or restore an account you already played on. There is no promise the purchased login stays available or remains only yours. Account sales often conflict with publisher terms.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows PC if you plan to use the account with the Dead by Daylight client on this site.' },
      { icon: 'reqMailOrder', text: 'The email you use at UGC checkout, kept private.' },
      { icon: 'reqShieldAccount', text: 'A private place to store the handed-off credentials. Do not email them to a public thread.' },
      { icon: 'reqWifiPortal', text: 'A connection to the merchant page that describes the current account offer.' },
    ],
    fullFeatures: [
      'Ready-made game accounts',
      'Credential handoff',
      'Separate from the cheat, HWID Spoofer, and Cloud DMA',
      'Not an appeal or recovery service',
      'No promise the login remains available',
    ],
    overview: {
      title: 'Ready-made accounts, handed off as logins',
      paragraphs: [
        'UGC Tool is the merchant’s ready-made game account offer. You receive credentials for an account they are selling. The title on this site is UGC Tool.',
        'It does not install the cheat, change hardware IDs, or work on an account you already own. Treat the handoff as a new login with no recovery guarantee.',
      ],
    },
  },
  'cloud-dma': {
    images: slide('cloud-dma', 'menu', 'esp'),
    goodToKnow:
      'Cloud DMA is required for full functionality of the main Dead by Daylight cheat. The merchant describes a Hyper-V layer on a single PC. Related purchases may be required; their prices are on the merchant page, not here.',
    limitations:
      'Cloud DMA is not the cheat menu, not a Windows license, and not a performance mode. If Hyper-V cannot start, the full feature set is not available on that machine. It does not change anti-cheat status or reverse a penalty.',
    systemRequirements: [
      { icon: 'reqWindows', text: 'Windows 10 or 11 on a single PC that can run Hyper-V.' },
      { icon: 'reqCpu', text: 'Firmware virtualization available if the merchant’s Hyper-V layer requires it.' },
      { icon: 'reqSettings', text: 'The main cheat is a separate purchase if you want the overlay menu.' },
      { icon: 'reqWifi', text: 'Checkout access for Cloud DMA and any related purchase the merchant lists.' },
    ],
    fullFeatures: [
      'Hyper-V based infrastructure',
      'Single-PC setup',
      'Required for full main-cheat functionality',
      'Separate checkout from the main cheat',
      'Related purchases may be required',
      'Windows 10 and 11',
    ],
    overview: {
      title: 'Hyper-V infrastructure on one PC',
      paragraphs: [
        'Cloud DMA is the layer the merchant requires before the main Dead by Daylight cheat’s full feature set is available. It runs on a single PC using Hyper-V.',
        'Plan for it as its own purchase. The merchant may also list related purchases. This page does not set those prices. The cheat’s ESP, skill check helper, and aim options stay on the main product.',
      ],
    },
  },
};

function buildTierPages(): ProductPage[] {
  return t.cheats.items.map((cheat) => {
    const slug = slugFromHref(cheat.href);
    const content = productContent[slug];
    if (!content) {
      throw new Error(`Missing product content for cheat slug "${slug}"`);
    }
    return {
      slug,
      kind: 'tier',
      badge: cheat.badge,
      tier: cheat.tier,
      name: cheat.name,
      title: cheat.title,
      subtitle: cheat.desc,
      desc: cheat.desc,
      features: cheat.features,
      more: cheat.more,
      variant: cheat.variant,
      buyUrl: checkoutForSlug(slug),
      images: content.images,
      overview: content.overview,
      acquisition: acquisitionFor(cheat.title),
      goodToKnow: content.goodToKnow,
      limitations: content.limitations,
      fullFeatures: content.fullFeatures,
      systemRequirements: content.systemRequirements,
      about: tierAbout[slug],
      body: tierBodies[slug] ?? [],
      relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
    };
  });
}

function buildUtilityPages(): ProductPage[] {
  return t.products.items
    .filter((p) => p.href !== productBase)
    .map((product) => {
      const slug = slugFromHref(product.href);
      const content = productContent[slug];
      if (!content) {
        throw new Error(`Missing product content for utility slug "${slug}"`);
      }
      return {
        slug,
        kind: 'utility' as const,
        badge: product.badge,
        category: product.category,
        name: product.title,
        title: product.title,
        subtitle: product.subtitle,
        desc: product.desc,
        features: product.features,
        more: product.more,
        buyUrl: checkoutForSlug(slug),
        images: content.images,
        overview: content.overview,
        acquisition: acquisitionFor(product.title),
        goodToKnow: content.goodToKnow,
        limitations: content.limitations,
        fullFeatures: content.fullFeatures,
        systemRequirements: content.systemRequirements,
        body: utilityBodies[slug] ?? [],
        relatedBlogSlugs: productRelatedBlogSlugs[slug] ?? [],
      };
    });
}

export const productPages: ProductPage[] = [...buildTierPages(), ...buildUtilityPages()];

export const cheatPages = productPages.filter((p) => p.kind === 'tier');

export function getProductPage(slug: string) {
  return productPages.find((p) => p.slug === slug);
}

export function getCheatPage(slug: string) {
  return cheatPages.find((p) => p.slug === slug);
}

export function getAllProductSlugs() {
  return productPages.map((p) => p.slug);
}

export function getAllCheatSlugs() {
  return cheatPages.map((p) => p.slug);
}

export const heroSlides = slide('esp', 'world-esp', 'skill-check', 'aim', 'menu', 'cloud-dma');

export const productHub = {
  path: productBase,
  title: t.products.title,
  subtitle: t.products.subtitle,
  description:
    'Dead by Daylight cheats for Windows PC, plus HWID Spoofer, UGC Tool, and Cloud DMA. Steam, Epic, and Xbox Game Pass PC.',
  buyUrl: checkoutPath('dbd'),
};
