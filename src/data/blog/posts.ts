import type { BlogPostFull } from './types';

const author = 'DBD Cheat guides';

export const blogPosts: BlogPostFull[] = [
  {
    featured: true,
    tag: 'Buying Guides',
    title: 'How to choose a Dead by Daylight cheat in 2026',
    slug: 'best-dbd-cheats',
    image: '/images/blog/best-dbd-cheats.webp',
    desc: 'What the main DBD cheat, Cloud DMA, HWID Spoofer, and UGC account listing actually include, and what none of them can promise.',
    date: 'Nov 14, 2026',
    readTime: '11 min read',
    author,
    body: [
      {
        type: 'p',
        text: 'A useful Dead by Daylight cheat page names its features, says which extra product is required, and states the limits. This guide compares the listings on this site: the [main DBD cheat](/products/dbd-cheats/), [Cloud DMA](/go/cloud-dma/), [HWID Spoofer](/go/hwid-spoofer/), and the [UGC account listing](/go/ugc/). None of them is a promise that a match, an account, or a hardware profile will avoid a penalty.',
      },
      { type: 'h2', text: 'Start with the feature you actually need' },
      {
        type: 'p',
        text: 'The main cheat is the gameplay overlay. Survivor ESP marks other survivors. World ESP marks generators, hooks, pallets, windows, closets, chests, totems, traps, the hatch, and escape doors. The same build lists a skill check helper, aim options, and saved configs. Read the [ESP guide](/blogs/dbd-esp-guide/) and the [feature breakdown](/blogs/dbd-cheats-features/) before you compare prices.',
      },
      {
        type: 'p',
        text: 'Full functionality of that main build requires Cloud DMA. The merchant describes Cloud DMA as a Hyper-V layer on a single PC. If you skip it, do not expect the full menu the product page describes. Details are in the [Cloud DMA article](/blogs/dbd-cloud-dma/).',
      },
      { type: 'h2', text: 'Separate products are not upgrades of the same menu' },
      {
        type: 'table',
        headers: ['Listing', 'What it is', 'What it is not'],
        rows: [
          [
            '[Main DBD cheat](/go/dbd/)',
            'Survivor ESP, World ESP, skill check helper, aim options, and configs. Cloud DMA is required for the full set.',
            'A guarantee about bans, reports, or future patches.',
          ],
          [
            '[Cloud DMA](/go/cloud-dma/)',
            'Hyper-V single-PC layer the merchant requires for full main-cheat functionality.',
            'A substitute for the cheat menu, and not a Windows license.',
          ],
          [
            '[HWID Spoofer](/go/hwid-spoofer/)',
            'A hardware-ID utility. The merchant lists Dead by Daylight under Easy Anti-Cheat for this product.',
            'Account recovery, an unban service, or a replacement for the cheat.',
          ],
          [
            '[UGC accounts](/go/ugc/)',
            'Ready-made game accounts sold by the merchant, delivered as a credential handoff.',
            'Recovery of an account you already own, or a promise the login will stay yours.',
          ],
        ],
      },
      { type: 'h2', text: 'Questions worth answering before checkout' },
      {
        type: 'ul',
        items: [
          'Do you need the overlay, a hardware-ID utility, or a ready-made account? They are different purchases.',
          'Can the PC run the Hyper-V layer Cloud DMA uses? See [PC notes](/blogs/dbd-pc-requirements/).',
          'Have you read the [anti-cheat timeline](/blogs/dbd-anti-cheat/) verified on 2026-11-15?',
          'Are you willing to lose access to the game account you play on? Third-party tools conflict with the game rules, and no listing here reverses that.',
        ],
      },
      {
        type: 'p',
        text: 'Price, term length, and build status change. The checkout page is the current source, not a screenshot in an article. The [pricing guide](/blogs/dbd-cheats-pricing/) explains how to read a subscription without treating a longer term as lower risk.',
      },
      {
        type: 'cta',
        title: 'Open the main DBD cheat listing',
        text: 'Review the current feature list and term options on the product page, then continue to checkout only if the requirements match your PC.',
        href: '/go/dbd/',
      },
    ],
  },
  {
    tag: 'Features',
    title: 'DBD ESP guide: survivors, generators, and the rest of the map',
    slug: 'dbd-esp-guide',
    image: '/images/blog/dbd-esp-guide.webp',
    desc: 'What Survivor ESP and World ESP list for generators, hooks, pallets, windows, closets, chests, totems, traps, the hatch, and exit gates.',
    date: 'Nov 12, 2026',
    readTime: '9 min read',
    author,
    body: [
      {
        type: 'p',
        text: 'ESP on the main [DBD cheat](/products/dbd-cheats/) is a set of on-screen markers. It does not play the match for you, and it does not change what the game considers fair play. This page lists the marker groups the merchant publishes. Cloud DMA is required before the full set is available. See [Cloud DMA](/blogs/dbd-cloud-dma/).',
      },
      { type: 'h2', text: 'Survivor ESP' },
      {
        type: 'p',
        text: 'Survivor ESP is the player overlay for other survivors. Use it to see who is already on a generator, who is moving between tiles, and who is being carried, when those states are exposed by the current build. Turn groups off if the screen is too busy to read during a chase. A shorter, labeled set is easier to use than every marker at once.',
      },
      { type: 'h2', text: 'World ESP objects' },
      {
        type: 'p',
        text: 'World ESP covers map objects rather than player models. The merchant lists the following groups. Names in the menu can change after a game update, so confirm them in the build you downloaded.',
      },
      {
        type: 'ul',
        items: [
          'Generators, so you can see remaining objectives without walking the whole map.',
          'Hooks, including basement hooks when the build draws them.',
          'Pallets and windows, the usual chase tiles.',
          'Closets (lockers) and chests.',
          'Totems, so hex and dull totems are marked as objects, not identified as a specific perk unless the menu says so.',
          'Traps, where the current build has a trap marker.',
          'The hatch.',
          'Escape doors (exit gates).',
        ],
      },
      { type: 'h2', text: 'How to keep the overlay readable' },
      {
        type: 'p',
        text: 'Start with survivors, generators, hooks, and pallets. Add windows, lockers, chests, totems, traps, the hatch, and exit gates only after you can still see the killer and the tile you are running. Color and distance options belong to the current config screen. Save that layout with the steps in the [feature guide](/blogs/dbd-cheats-features/). Display mode still matters: borderless and fullscreen can place an overlay differently, which the [FPS article](/blogs/dbd-fps-boost/) covers from the performance side.',
      },
      {
        type: 'p',
        text: 'Markers can be wrong or missing after a patch until the merchant ships a matching build. If a group disappears, stop and read [updates and compatibility](/blogs/dbd-updates-compatibility/) instead of assuming the object was removed from the game.',
      },
      {
        type: 'cta',
        title: 'See the main cheat listing',
        text: 'The product page is the checklist for which ESP groups ship with the current build.',
        href: '/products/dbd-cheats/',
      },
    ],
  },
  {
    tag: 'Features',
    title: 'DBD cheat features: skill checks, aim options, and configs',
    slug: 'dbd-cheats-features',
    image: '/images/blog/dbd-cheats-features.webp',
    desc: 'A plain inventory of the main Dead by Daylight cheat: ESP, the skill check helper, aim options, and config slots.',
    date: 'Nov 10, 2026',
    readTime: '12 min read',
    author,
    body: [
      {
        type: 'p',
        text: 'The main [DBD cheat](/products/dbd-cheats/) is one product with several modules. Survivor ESP and World ESP are covered in the [ESP guide](/blogs/dbd-esp-guide/). This article covers the other groups the merchant lists: the skill check helper, aim options, and configs. Full use of the build requires [Cloud DMA](/go/cloud-dma/).',
      },
      { type: 'h2', text: 'Skill check helper' },
      {
        type: 'p',
        text: 'The skill check helper is an aid for the skill-check minigame on generators, healing, and similar interactions. It is tied to the current game build. Great skill checks still depend on timing, perks, and whether the helper is aligned with that patch. Treat a miss as a reason to pause and check the status note, not as a setting you should keep forcing.',
      },
      {
        type: 'p',
        text: 'Automated or assisted skill checks are visible to people who watch the replay or stand next to you. They also conflict with the game rules. The helper is a listed feature, not a claim that checks will be perfect or that other players will ignore them.',
      },
      { type: 'h2', text: 'Aim options' },
      {
        type: 'p',
        text: 'Aim options are the killer-side aim tools in the same menu. The exact sliders ship with the build and can be renamed after an update. Use the in-menu descriptions rather than a copied preset from a forum post. Assisted aim is easy to notice in a chase and is against the rules of the game. This site does not describe it as hidden or low risk.',
      },
      { type: 'h2', text: 'Configs' },
      {
        type: 'p',
        text: 'Configs store overlay and option layouts so you can switch between a survivor set and a killer set without rebuilding the menu. Name them after the role, and keep one spare copy of the last layout that matched the menu you understood. After a game update, reload the config only after the merchant says that build is current. Old files can point at options that no longer exist.',
      },
      {
        type: 'table',
        headers: ['Module', 'Listed scope', 'Read before you rely on it'],
        rows: [
          ['Survivor ESP', 'Other survivors', '[ESP guide](/blogs/dbd-esp-guide/)'],
          ['World ESP', 'Generators, hooks, pallets, windows, closets, chests, totems, traps, hatch, escape doors', '[ESP guide](/blogs/dbd-esp-guide/)'],
          ['Skill check helper', 'Assistance on skill-check interactions', 'This page and the current build notes'],
          ['Aim options', 'Killer aim options in the current menu', 'This page'],
          ['Configs', 'Saved layouts for those options', '[Installation](/blogs/dbd-installation/) after the first launch'],
          ['Cloud DMA', 'Required for full functionality', '[Cloud DMA](/blogs/dbd-cloud-dma/)'],
        ],
      },
      {
        type: 'cta',
        title: 'Check the current feature list',
        text: 'Checkout shows the build the merchant is selling today. Pair it with Cloud DMA if you want the full menu described here.',
        href: '/go/dbd/',
      },
    ],
  },
  {
    tag: 'Buying Guides',
    title: 'DBD cheat pricing: how to read the subscription',
    slug: 'dbd-cheats-pricing',
    image: '/images/blog/dbd-cheats-pricing.webp',
    desc: 'How to compare DBD cheat, Cloud DMA, HWID Spoofer, and UGC terms without treating a longer plan as lower risk.',
    date: 'Nov 8, 2026',
    readTime: '7 min read',
    author,
    body: [
      {
        type: 'p',
        text: 'Prices on this site move with the merchant listing. An article should not freeze a dollar amount that checkout can change tomorrow. Use this page to see which line items exist, then confirm the term on [DBD checkout](/go/dbd/), [Cloud DMA](/go/cloud-dma/), [HWID Spoofer](/go/hwid-spoofer/), or [UGC](/go/ugc/).',
      },
      { type: 'h2', text: 'Count products, not just days' },
      {
        type: 'p',
        text: 'The main cheat subscription does not include Cloud DMA, the HWID utility, or a ready-made account unless the checkout line says so. Full functionality of the main cheat requires Cloud DMA, so a price that looks low on the cheat alone can be incomplete for the menu described in the [feature guide](/blogs/dbd-cheats-features/).',
      },
      {
        type: 'ul',
        items: [
          'Main cheat: overlay features, billed for a term you select at [checkout](/go/dbd/).',
          'Cloud DMA: separate Hyper-V layer, billed on its own listing.',
          'HWID Spoofer: separate hardware-ID utility. It does not extend the cheat term by itself.',
          'UGC: a purchase of ready-made account credentials, not a timed cheat key, and not recovery of an existing account.',
        ],
      },
      { type: 'h2', text: 'A longer term is not a lower-risk term' },
      {
        type: 'p',
        text: 'A longer subscription buys more calendar time on that listing. It does not buy compatibility with future Dead by Daylight updates, and it does not buy immunity from game penalties. If a patch lands in the middle of a term, the useful document is the [update guide](/blogs/dbd-updates-compatibility/), not the receipt length.',
      },
      {
        type: 'p',
        text: 'Before you pay, match the PC to the [requirements notes](/blogs/dbd-pc-requirements/) and read the [safety notes](/blogs/dbd-cheats-safety/). Refund and license rules belong to the merchant terms shown at checkout, not to a blog estimate.',
      },
      {
        type: 'cta',
        title: 'View current DBD checkout',
        text: 'The live term lengths and prices are on the checkout page.',
        href: '/go/dbd/',
      },
    ],
  },
  {
    tag: 'Safety & Compatibility',
    title: 'DBD cheat safety: rules, reports, and realistic limits',
    slug: 'dbd-cheats-safety',
    image: '/images/blog/dbd-cheats-safety.webp',
    desc: 'What using a Dead by Daylight cheat can put at risk, and the claims this site will not make.',
    date: 'Nov 6, 2026',
    readTime: '8 min read',
    author,
    body: [
      {
        type: 'p',
        text: 'Third-party cheats break Dead by Daylight’s rules. People who use them can be reported by other players and can be restricted by the game’s anti-cheat or account systems. This article is the plain version of that risk. It is not a way to reduce a penalty to zero.',
      },
      { type: 'h2', text: 'Claims this site does not make' },
      {
        type: 'ul',
        items: [
          'We do not call any build undetected.',
          'We do not call any build ban-proof or safe in a way that rules out penalties.',
          'We do not promise a hardware-ID change will lift a game restriction.',
          'We do not promise a purchased account will remain playable or stay in your control.',
          'We do not promise a config from this article will match the next patch.',
        ],
      },
      { type: 'h2', text: 'What can still go wrong' },
      {
        type: 'p',
        text: 'A working menu is not evidence about enforcement. Skill-check assistance and aim options are visible in play. ESP does not stop a manual review or a report. Anti-cheat on Steam has changed during 2026; the dated notes are in the [anti-cheat article](/blogs/dbd-anti-cheat/). After the game updates, an old loader can simply fail, which is a compatibility problem covered under [updates](/blogs/dbd-updates-compatibility/).',
      },
      {
        type: 'p',
        text: 'Use an account you can afford to lose if you decide to break the rules. Do not share checkout mail, license keys, or account passwords in a public thread. Support requests belong on the merchant’s support channel.',
      },
      { type: 'h2', text: 'Related products are not safety products' },
      {
        type: 'p',
        text: '[HWID Spoofer](/blogs/dbd-hwid-spoofer/) deals with hardware identifiers. The merchant lists Dead by Daylight under Easy Anti-Cheat for that utility. It is not an appeal process. The [UGC listing](/blogs/dbd-ugc-tool/) sells ready-made accounts and hands off credentials. Buying another login is not recovery, and it carries its own rules risk.',
      },
      {
        type: 'cta',
        title: 'Read the product page with those limits in mind',
        text: 'If the limits above are acceptable to you, the current listing is the main DBD cheat checkout.',
        href: '/go/dbd/',
      },
    ],
  },
  {
    tag: 'Safety & Compatibility',
    title: 'Dead by Daylight anti-cheat notes, verified 15 November 2026',
    slug: 'dbd-anti-cheat',
    image: '/images/blog/dbd-anti-cheat.webp',
    desc: 'Historically Easy Anti-Cheat, a short Denuvo Anti-Cheat Steam trial in September 2026, and why later tests are still possible.',
    date: 'Nov 4, 2026',
    readTime: '10 min read',
    author,
    body: [
      {
        type: 'p',
        text: 'Anti-cheat is chosen by the game’s publisher and can change without a matching edit on a cheat menu. These notes were last checked on 2026-11-15. They describe public history. They are not a statement that any product avoids detection.',
      },
      { type: 'h2', text: 'What was in place' },
      {
        type: 'table',
        headers: ['Period', 'What players saw', 'What it means for a cheat listing'],
        rows: [
          [
            'Before the 2026 trial',
            'Dead by Daylight on Steam was historically associated with Easy Anti-Cheat (EAC).',
            'Merchant pages that say “EAC” are referring to that history, including the HWID listing.',
          ],
          [
            'About 2–15 September 2026',
            'A Denuvo Anti-Cheat trial ran on the Steam version, then that trial build was removed.',
            'A short trial is not a permanent switch, and it is not a reason to assume the next month looks the same.',
          ],
          [
            'After 15 September 2026, as of 15 November 2026',
            'The Denuvo trial was no longer the live Steam test described above.',
            'Other providers may still be tested later. Recheck status before you launch.',
          ],
        ],
      },
      { type: 'h2', text: 'How to use this timeline' },
      {
        type: 'p',
        text: 'If a product page says the HWID utility lists Dead by Daylight under EAC, that matches the historical anti-cheat named above. It does not mean EAC is the only system that will ever run, and it does not mean a spoofer changes the outcome of an account restriction. Read [HWID](/blogs/dbd-hwid-spoofer/) and [safety](/blogs/dbd-cheats-safety/) together.',
      },
      {
        type: 'p',
        text: 'When the game client updates, assume compatibility is unknown until the merchant posts a note. The practical checklist is in [updates and compatibility](/blogs/dbd-updates-compatibility/). Do not treat a quiet week as proof that enforcement stopped.',
      },
      {
        type: 'cta',
        title: 'Review the listing after you read the timeline',
        text: 'Checkout does not change the anti-cheat history above. It only shows the current product terms.',
        href: '/go/dbd/',
      },
    ],
  },
  {
    tag: 'PC Optimization',
    title: 'DBD FPS: practical ways to keep frame rate readable',
    slug: 'dbd-fps-boost',
    image: '/images/blog/dbd-fps-boost.webp',
    desc: 'Display mode, background apps, and overlay load — ordinary PC steps that affect Dead by Daylight frame rate.',
    date: 'Nov 2, 2026',
    readTime: '6 min read',
    author,
    body: [
      {
        type: 'p',
        text: 'Frame rate in Dead by Daylight comes from the PC, the display settings, and how much extra drawing you add. An overlay with every World ESP group enabled costs more than a short list. This page stays on performance. It does not claim that a smoother frame rate changes anti-cheat behavior.',
      },
      { type: 'h2', text: 'Measure before you change five things' },
      {
        type: 'ul',
        items: [
          'Note FPS in the same map area twice: once with the overlay off, once with only the groups you intend to keep.',
          'Close extra browsers, capture apps, and RGB suites for the test so you can see the game’s own cost.',
          'Update the GPU driver from the vendor, then reboot before you compare again.',
          'Prefer a borderless or fullscreen mode you have already tested. Switching modes can move an overlay and also change frame pacing.',
        ],
      },
      { type: 'h2', text: 'Overlay choices that usually matter' },
      {
        type: 'p',
        text: 'Survivor markers plus generators, hooks, and pallets are enough for many layouts. Windows, lockers, chests, totems, traps, the hatch, and exit gates add draw calls and visual noise. Turn a group off and retest instead of lowering every game setting at once. Configs in the [feature guide](/blogs/dbd-cheats-features/) exist so you can keep a lighter layout.',
      },
      {
        type: 'p',
        text: 'If FPS falls only after a game patch, treat it as a compatibility question first. Read [updates](/blogs/dbd-updates-compatibility/) and the [PC notes](/blogs/dbd-pc-requirements/). A Hyper-V layer for Cloud DMA has its own CPU and memory cost; budget for that if full functionality is the goal.',
      },
      {
        type: 'cta',
        title: 'Match the overlay to the product you bought',
        text: 'Feature scope for the current build is on the DBD cheat page.',
        href: '/products/dbd-cheats/',
      },
    ],
  },
  {
    tag: 'Comparisons',
    title: 'DBD cheat comparison: main build, Cloud DMA, HWID, and UGC',
    slug: 'dbd-cheats-comparison',
    image: '/images/blog/dbd-cheats-comparison.webp',
    desc: 'Side-by-side look at the four listings: who each one is for, and which jobs they do not do.',
    date: 'Oct 28, 2026',
    readTime: '9 min read',
    author,
    body: [
      {
        type: 'p',
        text: 'These four listings are easy to mix up because they sit on the same site. They answer different questions. Use the table, then open the matching article if a row is the one you are considering.',
      },
      {
        type: 'table',
        headers: ['Question', 'Main DBD cheat', 'Cloud DMA', 'HWID Spoofer', 'UGC accounts'],
        rows: [
          ['Primary job', 'ESP, skill check helper, aim options, configs', 'Hyper-V layer required for full cheat functionality', 'Hardware-ID utility', 'Ready-made account credentials'],
          ['Needed for the full overlay?', 'This is the overlay', 'Yes, for full functionality', 'No', 'No'],
          ['Account login included?', 'No', 'No', 'No', 'Yes, as a credential handoff'],
          ['Listed anti-cheat context', 'See the anti-cheat notes', 'Separate system layer', 'Merchant lists DBD under EAC', 'Account sale, not an anti-cheat product'],
          ['Recovery or unban?', 'No', 'No', 'No', 'No'],
          ['Where to read more', '[Features](/blogs/dbd-cheats-features/)', '[Cloud DMA](/blogs/dbd-cloud-dma/)', '[HWID](/blogs/dbd-hwid-spoofer/)', '[UGC](/blogs/dbd-ugc-tool/)'],
        ],
      },
      { type: 'h2', text: 'A practical pairing' },
      {
        type: 'p',
        text: 'People who want the overlay described on the product page need the main cheat and Cloud DMA. People who only want a hardware-ID utility do not get ESP by buying the spoofer. People who only want a different game login are looking at UGC, which does not install the cheat. The [buying guide](/blogs/best-dbd-cheats/) walks through that choice in order.',
      },
      {
        type: 'cta',
        title: 'Open the main listing',
        text: 'Compare the live checkout text with the table above before you add another product.',
        href: '/go/dbd/',
      },
    ],
  },
  {
    tag: 'PC Optimization',
    title: 'PC notes for the DBD cheat and Cloud DMA',
    slug: 'dbd-pc-requirements',
    image: '/images/blog/dbd-pc-requirements.webp',
    desc: 'Windows edition, Hyper-V, and the difference between running the game and running the full cheat stack.',
    date: 'Oct 24, 2026',
    readTime: '5 min read',
    author,
    body: [
      {
        type: 'p',
        text: 'Dead by Daylight’s own store page lists the game’s PC requirements. This article is about the extra stack sold here. The full main-cheat feature set requires Cloud DMA, and the merchant describes that product as a Hyper-V layer on a single PC.',
      },
      { type: 'h2', text: 'Hyper-V is an edition and firmware question' },
      {
        type: 'p',
        text: 'Hyper-V is a Windows virtualization feature. On typical Windows 10 and Windows 11 installs it is available on Pro, Enterprise, and Education editions, and it needs a CPU and firmware setup that allow virtualization. Windows Home usually does not include the Hyper-V role. Confirm the edition on your PC before you buy Cloud DMA, and confirm the merchant’s current note in case their steps differ.',
      },
      {
        type: 'ul',
        items: [
          'One PC is the intended layout: the merchant calls Cloud DMA a single-PC layer, not a second-computer kit.',
          'Leave enough memory for the game and the layer at the same time. If the machine already swaps heavily, read the [FPS notes](/blogs/dbd-fps-boost/).',
          'A laptop that blocks virtualization in firmware will not match this stack even if the game itself launches.',
          'Console and handheld copies of Dead by Daylight are outside this PC listing.',
        ],
      },
      {
        type: 'p',
        text: 'Meeting these notes means the stack can be installed as the merchant describes. It does not speak to bans or to the next game patch. Keep the [installation outline](/blogs/dbd-installation/) next to the system check.',
      },
      {
        type: 'cta',
        title: 'Read the Cloud DMA listing',
        text: 'The merchant page is the place to confirm the current single-PC Hyper-V description.',
        href: '/go/cloud-dma/',
      },
    ],
  },
  {
    tag: 'Updates',
    title: 'DBD updates and cheat compatibility',
    slug: 'dbd-updates-compatibility',
    image: '/images/blog/dbd-updates-compatibility.webp',
    desc: 'What to do when Dead by Daylight patches: stop, read the build note, and do not assume yesterday’s config still matches.',
    date: 'Oct 20, 2026',
    readTime: '8 min read',
    author,
    body: [
      {
        type: 'p',
        text: 'Dead by Daylight patches change maps, perks, and sometimes the client that anti-cheat is attached to. A cheat build written for the previous client can fail open, draw the wrong objects, or refuse to start. That is normal compatibility drift. It is not something an article can close in advance.',
      },
      { type: 'h2', text: 'A short pause after the game updates' },
      {
        type: 'ul',
        items: [
          'Finish the game update from the official store before you look at the cheat menu.',
          'Read the merchant status for the [main cheat](/products/dbd-cheats/) and for [Cloud DMA](/go/cloud-dma/) if you use the full set.',
          'If the note says the build is behind the game, wait. Launching an old build because a term is still paid does not make the versions match.',
          'When a matching build is posted, load it from the merchant portal and then open your config. Rename the config if the menu changed.',
          'Re-check Survivor ESP and the World ESP list: generators, hooks, pallets, windows, closets, chests, totems, traps, hatch, and escape doors.',
        ],
      },
      { type: 'h2', text: 'Anti-cheat can move on a different schedule' },
      {
        type: 'p',
        text: 'A content patch and an anti-cheat test are not the same event. The [anti-cheat notes](/blogs/dbd-anti-cheat/) record the EAC history and the Denuvo Anti-Cheat Steam trial that ran about 2–15 September 2026 and was then removed. Later tests are still possible. Recheck that page’s date when you see a new client.',
      },
      {
        type: 'p',
        text: 'Skill check help and aim options are the first modules people notice when a patch shifts timing. If they feel wrong, turn them off and wait for the build note. Do not stack unofficial files from elsewhere on top of the portal build.',
      },
      {
        type: 'cta',
        title: 'Check the product page status',
        text: 'The listing is where a current compatibility note should appear.',
        href: '/products/dbd-cheats/',
      },
    ],
  },
  {
    tag: 'Tutorials',
    title: 'DBD cheat installation outline',
    slug: 'dbd-installation',
    image: '/images/blog/dbd-installation.webp',
    desc: 'The order of products and checks before a first launch: official checkout, Cloud DMA for full features, and when to stop.',
    date: 'Oct 16, 2026',
    readTime: '11 min read',
    author,
    body: [
      {
        type: 'p',
        text: 'Install from the merchant you paid, on a PC that matches the [requirements](/blogs/dbd-pc-requirements/). This outline is the order of decisions. The buttons and file names inside the portal can change, so the portal text wins when it disagrees with this page.',
      },
      { type: 'h2', text: 'Order of operations' },
      {
        type: 'ul',
        items: [
          'Read [safety](/blogs/dbd-cheats-safety/) and the [anti-cheat timeline](/blogs/dbd-anti-cheat/) so the limits are clear before you pay.',
          'Buy the [main DBD cheat](/go/dbd/) if you want Survivor ESP, World ESP, the skill check helper, aim options, and configs.',
          'Buy [Cloud DMA](/go/cloud-dma/) as well if you want the full functionality the merchant describes. It is a Hyper-V single-PC layer, not an optional theme.',
          'Download only the build linked from that checkout. Skip repacks, mirrors, and “updated” files posted in public chats.',
          'Start the game from the official store after the merchant steps say the layer is ready. Confirm the menu against the [feature list](/blogs/dbd-cheats-features/).',
          'Save a config once the layout is readable. Keep World ESP limited until you know which groups you use.',
        ],
      },
      { type: 'h2', text: 'When to stop' },
      {
        type: 'p',
        text: 'Stop if the portal says the build does not match today’s game version. Stop if Windows reports that Hyper-V cannot start. Stop if a download did not come from the checkout you paid. Contact support with the order email and the sentence on screen. Do not follow advice that tells you to disable security products or to replace system files.',
      },
      {
        type: 'p',
        text: 'HWID Spoofer and UGC are not steps in this install. Add them only if you separately want a hardware-ID utility or a ready-made account. Those purchases are explained in their own articles and do not complete a half-installed cheat.',
      },
      {
        type: 'cta',
        title: 'Go to DBD checkout',
        text: 'Use the merchant portal as the install source after you have read the requirements.',
        href: '/go/dbd/',
      },
    ],
  },
  {
    tag: 'Tutorials',
    title: 'DBD cheats FAQ',
    slug: 'dbd-cheats-faq',
    image: '/images/blog/dbd-cheats-faq.webp',
    desc: 'Short answers on ESP, Cloud DMA, HWID, UGC accounts, patches, and what this site will not promise.',
    date: 'Oct 12, 2026',
    readTime: '14 min read',
    author,
    body: [
      {
        type: 'p',
        text: 'These answers match the product pages as described on 2026-11-15. When checkout text changes, checkout wins. Longer versions sit in the linked guides.',
      },
      { type: 'h2', text: 'What does the main cheat include?' },
      {
        type: 'p',
        text: 'Survivor ESP, World ESP for generators, hooks, pallets, windows, closets, chests, totems, traps, the hatch, and escape doors, a skill check helper, aim options, and configs. Full functionality requires Cloud DMA. See [features](/blogs/dbd-cheats-features/).',
      },
      { type: 'h2', text: 'What is Cloud DMA?' },
      {
        type: 'p',
        text: 'A separate product. The merchant describes it as a Hyper-V layer that runs on a single PC. Without it, the full main-cheat set is not available. See [Cloud DMA](/blogs/dbd-cloud-dma/).',
      },
      { type: 'h2', text: 'Does the HWID Spoofer unban an account?' },
      {
        type: 'p',
        text: 'No. It is a hardware-ID utility. The merchant lists Dead by Daylight under Easy Anti-Cheat for that product. It does not appeal a penalty and it does not restore a login. See [HWID](/blogs/dbd-hwid-spoofer/).',
      },
      { type: 'h2', text: 'What does the UGC listing sell?' },
      {
        type: 'p',
        text: 'Ready-made game accounts. The merchant hands off credentials. It is not a recovery service for an account you already own, and it is not a promise that the account stays unrestricted. See [UGC](/blogs/dbd-ugc-tool/).',
      },
      { type: 'h2', text: 'Which anti-cheat does Dead by Daylight use?' },
      {
        type: 'p',
        text: 'Historically, Easy Anti-Cheat on Steam. A Denuvo Anti-Cheat trial ran on Steam from about 2 September 2026 through 15 September 2026 and was then removed. Other providers may be tested later. Last verified 2026-11-15. See [anti-cheat notes](/blogs/dbd-anti-cheat/).',
      },
      { type: 'h2', text: 'Will I get banned?' },
      {
        type: 'p',
        text: 'Nobody on this site can answer that for your account. Cheats conflict with the rules, reports exist, and enforcement changes. We do not say a build is undetected, ban-proof, or guaranteed. See [safety](/blogs/dbd-cheats-safety/).',
      },
      { type: 'h2', text: 'What should I do after a patch?' },
      {
        type: 'p',
        text: 'Update the game, read the merchant note, and wait if the cheat build is behind. Details are in [updates and compatibility](/blogs/dbd-updates-compatibility/).',
      },
      { type: 'h2', text: 'Where do I buy?' },
      {
        type: 'p',
        text: 'Main cheat: [checkout](/go/dbd/) and the [product page](/products/dbd-cheats/). Cloud DMA: [/go/cloud-dma/](/go/cloud-dma/). HWID Spoofer: [/go/hwid-spoofer/](/go/hwid-spoofer/). UGC: [/go/ugc/](/go/ugc/). Pricing context: [pricing guide](/blogs/dbd-cheats-pricing/).',
      },
      {
        type: 'cta',
        title: 'Browse the product page',
        text: 'Use the FAQ as a map, then confirm details on the listing you plan to buy.',
        href: '/products/dbd-cheats/',
      },
    ],
  },
  {
    tag: 'Safety & Compatibility',
    title: 'HWID Spoofer for Dead by Daylight: what the listing covers',
    slug: 'dbd-hwid-spoofer',
    image: '/images/blog/dbd-hwid-spoofer.webp',
    desc: 'The HWID utility targets hardware identifiers. The merchant lists DBD under EAC. It is not an unban or account recovery tool.',
    date: 'Oct 8, 2026',
    readTime: '7 min read',
    author,
    body: [
      {
        type: 'p',
        text: 'HWID Spoofer is a separate utility from the main Dead by Daylight cheat. It is sold for hardware identifiers. On the merchant listing, Dead by Daylight is grouped under Easy Anti-Cheat. That grouping matches the historical anti-cheat described in the [timeline](/blogs/dbd-anti-cheat/), which was last verified on 2026-11-15. A later anti-cheat test would need a new check of the listing.',
      },
      { type: 'h2', text: 'What this product does not do' },
      {
        type: 'ul',
        items: [
          'It does not lift a game penalty or file an appeal.',
          'It does not return an account you lost access to. Account sales, if you are considering them, are the separate [UGC listing](/blogs/dbd-ugc-tool/).',
          'It does not include Survivor ESP, World ESP, skill checks, or aim options. Those are the [main cheat](/blogs/dbd-cheats-features/).',
          'It does not make the main cheat’s full feature set run. That requirement is [Cloud DMA](/blogs/dbd-cloud-dma/).',
        ],
      },
      { type: 'h2', text: 'How to read the listing' },
      {
        type: 'p',
        text: 'Read the current page at [HWID checkout](/go/hwid-spoofer/) for supported games and the term you are buying. Hardware-ID tools can conflict with platform rules the same way cheats do. This site will not describe a result as guaranteed, and it will not publish steps that pretend to be a recovery method.',
      },
      {
        type: 'p',
        text: 'If your question is “which product do I need,” use the [comparison](/blogs/dbd-cheats-comparison/). Buying the spoofer because a cheat term felt risky does not convert the spoofer into a safety product.',
      },
      {
        type: 'cta',
        title: 'Open the HWID Spoofer listing',
        text: 'Confirm the EAC grouping and the current term on the merchant page.',
        href: '/go/hwid-spoofer/',
      },
    ],
  },
  {
    tag: 'Features',
    title: 'Cloud DMA for the DBD cheat: the Hyper-V requirement',
    slug: 'dbd-cloud-dma',
    image: '/images/blog/dbd-cloud-dma.webp',
    desc: 'Why the main Dead by Daylight cheat lists Cloud DMA for full functionality, and what “Hyper-V single-PC layer” means.',
    date: 'Oct 4, 2026',
    readTime: '8 min read',
    author,
    body: [
      {
        type: 'p',
        text: 'Cloud DMA is required for full functionality of the main [DBD cheat](/products/dbd-cheats/). The merchant describes it as a Hyper-V layer that runs on a single PC. It is its own checkout at [/go/cloud-dma/](/go/cloud-dma/), not a checkbox inside the cheat menu.',
      },
      { type: 'h2', text: 'Single PC, not a second box' },
      {
        type: 'p',
        text: '“Single-PC” means the intended setup is one computer running both the game and this layer. Plan for Windows edition support and firmware virtualization before you pay. Those constraints are summarized in the [PC notes](/blogs/dbd-pc-requirements/). If Hyper-V cannot start, the full feature set described for the cheat is not available on that machine.',
      },
      { type: 'h2', text: 'What full functionality refers to' },
      {
        type: 'p',
        text: 'The feature set that depends on this layer is the main cheat’s set: Survivor ESP, World ESP (generators, hooks, pallets, windows, closets, chests, totems, traps, hatch, escape doors), the skill check helper, aim options, and configs. Buying only Cloud DMA does not add that menu. Buying only the cheat, and skipping Cloud DMA, leaves you short of the full set the merchant describes.',
      },
      {
        type: 'p',
        text: 'Cloud DMA is not an anti-cheat status, a ban appeal, or a performance mode. It has a resource cost, so retest frame rate after it is running using the [FPS notes](/blogs/dbd-fps-boost/). After a Dead by Daylight update, check the Cloud DMA status note as well as the cheat note. See [updates](/blogs/dbd-updates-compatibility/).',
      },
      {
        type: 'cta',
        title: 'Open Cloud DMA checkout',
        text: 'Confirm the Hyper-V single-PC description on the current listing, then pair it with the main cheat if you want the full menu.',
        href: '/go/cloud-dma/',
      },
    ],
  },
  {
    tag: 'Buying Guides',
    title: 'UGC tool: ready-made Dead by Daylight accounts',
    slug: 'dbd-ugc-tool',
    image: '/images/blog/dbd-ugc-tool.webp',
    desc: 'The UGC listing sells ready-made game accounts and hands off credentials. It is not recovery and it does not promise the login will last.',
    date: 'Sep 28, 2026',
    readTime: '6 min read',
    author,
    body: [
      {
        type: 'p',
        text: 'The UGC product on this site is a merchant sale of ready-made game accounts. Delivery is a credential handoff: you receive login details for an account the merchant is selling. The current offer is at [UGC checkout](/go/ugc/). Read that page for what is included today.',
      },
      { type: 'h2', text: 'What the handoff is' },
      {
        type: 'p',
        text: 'A credential handoff means the product is the account login, not a cheat module and not a service that works on an account you already own. It does not install Survivor ESP or any other overlay. It does not change hardware IDs. If those are the goals, see the [comparison](/blogs/dbd-cheats-comparison/).',
      },
      { type: 'h2', text: 'Limits, stated plainly' },
      {
        type: 'ul',
        items: [
          'This is not account recovery. There is no promise that a lost, locked, or restricted account you already played on will be returned.',
          'There is no promise that a purchased account stays unflagged, keeps its progress, or remains accessible only to you.',
          'Selling and buying game accounts often conflicts with the publisher’s terms. A marketplace listing does not override those terms.',
          'Sharing the inbox, password, or payment proof in a public forum is a good way to lose the login. Keep support on the merchant’s private channel.',
        ],
      },
      {
        type: 'p',
        text: 'If you still want the main cheat on whatever account you use, that is a separate purchase with its own rules risk. Start with [safety](/blogs/dbd-cheats-safety/) and the [installation outline](/blogs/dbd-installation/).',
      },
      {
        type: 'cta',
        title: 'Read the UGC listing',
        text: 'The merchant page states the current account offer and handoff. This article does not add guarantees on top of it.',
        href: '/go/ugc/',
      },
    ],
  },
];
