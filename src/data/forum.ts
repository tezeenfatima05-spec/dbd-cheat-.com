export interface ForumComment {
  author: string;
  age: string;
  score: number;
  body: string;
  replies?: ForumComment[];
}

export interface ForumPost {
  slug: string;
  category: string;
  categoryTone: 'purple' | 'blue' | 'green' | 'orange';
  title: string;
  excerpt: string;
  author: string;
  age: string;
  commentsCount: number;
  upvotes: number;
  flair?: string;
  body: string[];
  comments: ForumComment[];
  sourceTitle?: string;
  sourcePath?: string;
}

export const forumCategories = [
  { name: 'General', tone: 'purple', icon: 'users' },
  { name: 'Guides & Builds', tone: 'blue', icon: 'navBlog' },
  { name: 'Patch Talk', tone: 'orange', icon: 'refresh' },
  { name: 'Community', tone: 'green', icon: 'messageCircle' },
] as const;

const illustrative =
  'This thread is an illustrative example for the guide library. It is not a live support ticket, a match report, or a promise about penalties.';

function countComments(comments: ForumComment[]): number {
  return comments.reduce((total, comment) => total + 1 + countComments(comment.replies ?? []), 0);
}

function thread(post: Omit<ForumPost, 'commentsCount'>): ForumPost {
  return { ...post, commentsCount: countComments(post.comments) };
}

export const forumPosts: ForumPost[] = [
  thread({
    slug: 'survivor-esp-what-it-shows',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'What does Survivor ESP actually mark?',
    excerpt: 'An example question about survivor markers versus map objects on the main DBD cheat.',
    author: 'claudette_map',
    age: '2 hours ago',
    upvotes: 41,
    flair: 'Illustrative',
    sourceTitle: 'DBD ESP guide',
    sourcePath: '/blogs/dbd-esp-guide/',
    body: [
      illustrative,
      'Survivor ESP is the player overlay for other survivors. Generators, hooks, pallets, and the rest of the map sit under World ESP, not under the survivor group. The exact labels depend on the build you downloaded.',
    ],
    comments: [
      {
        author: 'meg_sprint',
        age: '1 hour ago',
        score: 12,
        body: 'I would turn survivors on first and leave lockers and chests off until the chase UI is still readable.',
        replies: [
          {
            author: 'claudette_map',
            age: '50 min. ago',
            score: 6,
            body: 'That matches the guide: start short, then add groups.',
          },
        ],
      },
      {
        author: 'dwight_box',
        age: '48 min. ago',
        score: 8,
        body: 'A carried teammate is still a survivor marker. Do not expect the hook object itself to come from the same toggle.',
      },
      {
        author: 'feng_rush',
        age: '30 min. ago',
        score: 4,
        body: 'If a name in the menu changed after a patch, the update article is the place to pause. The overlay does not rename the game for you.',
      },
      {
        author: 'ace_luck',
        age: '18 min. ago',
        score: 3,
        body: 'Cloud DMA is still required for the full set. ESP alone on the product page is not the whole purchase.',
      },
    ],
  }),
  thread({
    slug: 'world-esp-generators-hooks-pallets',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'Which map objects are in World ESP?',
    excerpt: 'Example list: generators, hooks, pallets, windows, closets, chests, totems, traps, hatch, and escape doors.',
    author: 'gen_patrol',
    age: '5 hours ago',
    upvotes: 36,
    flair: 'Illustrative',
    sourceTitle: 'DBD ESP guide',
    sourcePath: '/blogs/dbd-esp-guide/',
    body: [
      illustrative,
      'World ESP on the main cheat is the object list: generators, hooks, pallets, windows, closets, chests, totems, traps, the hatch, and escape doors. Totem markers are objects. They are not a promise that a specific hex perk is named.',
    ],
    comments: [
      {
        author: 'totem_clean',
        age: '4 hours ago',
        score: 11,
        body: 'Dull and hex totems can share a group. Read the menu line before you assume perk detection.',
        replies: [
          {
            author: 'gen_patrol',
            age: '3 hours ago',
            score: 5,
            body: 'Yes. If the line does not say a perk name, it is only the totem object.',
          },
        ],
      },
      {
        author: 'hook_reader',
        age: '3 hours ago',
        score: 7,
        body: 'Basement hooks only show if that build draws them. Missing hooks after a patch means stop and check the status note.',
      },
      {
        author: 'pallet_loop',
        age: '2 hours ago',
        score: 6,
        body: 'Pallets and windows are the chase set. I would not add traps and chests in the same pass.',
      },
      {
        author: 'hatch_timer',
        age: '1 hour ago',
        score: 4,
        body: 'Hatch and exit gates are separate rows. Opening a gate is still a game action, not something the marker completes.',
      },
    ],
  }),
  thread({
    slug: 'overlay-too-busy-on-1080p',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'The overlay covers the center of a 1080p screen. What should I cut first?',
    excerpt: 'An example layout question: which ESP groups to disable before you touch color and size.',
    author: 'window_tech',
    age: '8 hours ago',
    upvotes: 29,
    flair: 'Illustrative',
    sourceTitle: 'DBD ESP guide',
    sourcePath: '/blogs/dbd-esp-guide/',
    body: [
      illustrative,
      'Cut object groups before you shrink text. Keep survivors, generators, hooks, and pallets if you need a chase layout. Turn off lockers, chests, totems, traps, hatch, and exit gates until you can see the tile in front of you.',
    ],
    comments: [
      {
        author: 'nea_urban',
        age: '7 hours ago',
        score: 9,
        body: 'Saving two configs helps: one dense, one chase-only. The feature guide covers config slots.',
        replies: [
          {
            author: 'window_tech',
            age: '6 hours ago',
            score: 4,
            body: 'I named them after the role so I do not load a killer aim layout in a survivor match.',
          },
        ],
      },
      {
        author: 'kate_crow',
        age: '6 hours ago',
        score: 5,
        body: 'Borderless and fullscreen can place the same menu differently. Test one mode and leave it.',
      },
      {
        author: 'yun_dash',
        age: '5 hours ago',
        score: 3,
        body: 'Distance sliders belong to the current build. Copying a number from a thread is how layouts break.',
      },
      {
        author: 'jane_romero',
        age: '4 hours ago',
        score: 2,
        body: 'If the center is still blocked with four groups, the display mode article is the next stop, not more toggles.',
      },
    ],
  }),
  thread({
    slug: 'cloud-dma-before-full-menu',
    category: 'General',
    categoryTone: 'purple',
    title: 'Do I need Cloud DMA before the full DBD menu is available?',
    excerpt: 'Example answer: the merchant requires the Hyper-V single-PC layer for full functionality.',
    author: 'fog_walker',
    age: '6 hours ago',
    upvotes: 52,
    flair: 'Illustrative',
    sourceTitle: 'Cloud DMA for the DBD cheat',
    sourcePath: '/blogs/dbd-cloud-dma/',
    body: [
      illustrative,
      'Yes. The main cheat’s full feature set requires Cloud DMA. The merchant describes that product as a Hyper-V layer on one PC. The cheat checkout does not replace it, and Cloud DMA does not include the ESP menu by itself.',
    ],
    comments: [
      {
        author: 'adam_teach',
        age: '5 hours ago',
        score: 14,
        body: 'Windows Home usually does not ship the Hyper-V role. Check the edition before you pay for the layer.',
        replies: [
          {
            author: 'fog_walker',
            age: '4 hours ago',
            score: 7,
            body: 'The PC notes say the same thing, and they say to confirm the merchant text in case it changes.',
          },
        ],
      },
      {
        author: 'jeff_rock',
        age: '4 hours ago',
        score: 6,
        body: 'Single-PC means one machine. It is not a diagram for a second computer.',
      },
      {
        author: 'blendette',
        age: '3 hours ago',
        score: 5,
        body: 'I would retest FPS after the layer is running. Extra virtualization has a cost.',
      },
      {
        author: 'jake_sabo',
        age: '2 hours ago',
        score: 3,
        body: 'If firmware virtualization is off, the game can still launch while this stack cannot. Those are different checks.',
      },
    ],
  }),
  thread({
    slug: 'install-order-first-launch',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'What order should a first install follow?',
    excerpt: 'An example sequence: read the limits, buy the official build, add Cloud DMA for the full set, then stop if the portal disagrees.',
    author: 'locker_check',
    age: '1 day ago',
    upvotes: 33,
    flair: 'Illustrative',
    sourceTitle: 'DBD cheat installation outline',
    sourcePath: '/blogs/dbd-installation/',
    body: [
      illustrative,
      'Read the safety notes, buy the main cheat from the site checkout, add Cloud DMA if you want full functionality, and download only the file the portal links. If the portal says the build is behind the game, stop. HWID and UGC are separate decisions, not install steps.',
    ],
    comments: [
      {
        author: 'dwight_box',
        age: '20 hours ago',
        score: 10,
        body: 'A file from a chat is not the portal build, even if the name looks similar.',
        replies: [
          {
            author: 'locker_check',
            age: '18 hours ago',
            score: 6,
            body: 'Agreed. Support should hear the on-screen sentence and the order email, not a request for a random mirror.',
          },
        ],
      },
      {
        author: 'meg_sprint',
        age: '16 hours ago',
        score: 5,
        body: 'I saved a config only after the menu matched the feature list, not before.',
      },
      {
        author: 'clasp_main',
        age: '14 hours ago',
        score: 4,
        body: 'Disabling security tools is not part of the outline. If a guide says that, it is not this site’s guide.',
      },
      {
        author: 'nea_urban',
        age: '12 hours ago',
        score: 3,
        body: 'Console copies are out of scope. This stack is the PC listing.',
      },
    ],
  }),
  thread({
    slug: 'fps-drop-when-overlay-is-on',
    category: 'Patch Talk',
    categoryTone: 'orange',
    title: 'FPS falls only when the overlay is enabled. What is a fair test?',
    excerpt: 'Example performance notes: compare one map area with groups off, then with a short ESP list.',
    author: 'feng_rush',
    age: '9 hours ago',
    upvotes: 24,
    flair: 'Illustrative',
    sourceTitle: 'DBD FPS notes',
    sourcePath: '/blogs/dbd-fps-boost/',
    body: [
      illustrative,
      'Compare the same spot twice. First with the overlay off, then with only survivors, generators, hooks, and pallets. Close capture apps for the test. A smoother frame rate does not say anything about anti-cheat.',
    ],
    comments: [
      {
        author: 'kate_crow',
        age: '8 hours ago',
        score: 8,
        body: 'I updated the GPU driver and rebooted before the second pass. Otherwise the numbers are mixed.',
        replies: [
          {
            author: 'feng_rush',
            age: '7 hours ago',
            score: 4,
            body: 'That is the order in the FPS article.',
          },
        ],
      },
      {
        author: 'yun_dash',
        age: '7 hours ago',
        score: 5,
        body: 'Adding every World ESP group at once hides which row costs frames.',
      },
      {
        author: 'jeff_rock',
        age: '5 hours ago',
        score: 3,
        body: 'If the drop showed up the hour the game patched, I would read the compatibility article before tweaking graphics.',
      },
      {
        author: 'adam_teach',
        age: '4 hours ago',
        score: 2,
        body: 'Cloud DMA’s layer has its own CPU cost. Include it in the test if you run the full set.',
      },
    ],
  }),
  thread({
    slug: 'borderless-or-fullscreen-overlay',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'Should I use borderless or fullscreen with the overlay?',
    excerpt: 'An example display question: pick one mode, confirm the menu sits where you can read it, then leave it.',
    author: 'kate_crow',
    age: '11 hours ago',
    upvotes: 21,
    flair: 'Illustrative',
    sourceTitle: 'DBD FPS notes',
    sourcePath: '/blogs/dbd-fps-boost/',
    body: [
      illustrative,
      'There is no universal mode. Borderless and fullscreen can change both frame pacing and where an overlay draws. Choose one, confirm you can still see the killer and the pallet prompt, and stop switching mid-session.',
    ],
    comments: [
      {
        author: 'window_tech',
        age: '10 hours ago',
        score: 7,
        body: 'I had to redo the config after changing display mode. The old layout sat on the perk icons.',
        replies: [
          {
            author: 'kate_crow',
            age: '9 hours ago',
            score: 3,
            body: 'Save the new layout under a new name so you can revert.',
          },
        ],
      },
      {
        author: 'jane_romero',
        age: '8 hours ago',
        score: 4,
        body: 'A second monitor capture app also moved the image. I closed it before judging the game mode.',
      },
      {
        author: 'ace_luck',
        age: '6 hours ago',
        score: 2,
        body: 'This does not make markers harder for other players to notice in person. Display mode is a local drawing choice.',
      },
      {
        author: 'blendette',
        age: '5 hours ago',
        score: 2,
        body: 'If the menu never appears, that is the troubleshooting thread, not a fullscreen toggle loop.',
      },
    ],
  }),
  thread({
    slug: 'which-listing-is-the-overlay',
    category: 'Community',
    categoryTone: 'green',
    title: 'Which listing is the overlay, and which are extras?',
    excerpt: 'Example comparison of the main DBD cheat, Cloud DMA, HWID Spoofer, and UGC accounts.',
    author: 'ace_luck',
    age: '7 hours ago',
    upvotes: 47,
    flair: 'Illustrative',
    sourceTitle: 'DBD cheat comparison',
    sourcePath: '/blogs/dbd-cheats-comparison/',
    body: [
      illustrative,
      'The overlay is the main DBD cheat. Cloud DMA is the Hyper-V layer required for full functionality. HWID Spoofer is a hardware-ID utility and lists DBD under EAC. UGC sells ready-made accounts as a credential handoff. None of them is an unban.',
    ],
    comments: [
      {
        author: 'claudette_map',
        age: '6 hours ago',
        score: 13,
        body: 'Buying the spoofer does not add generator markers. I keep sending people to the comparison table.',
        replies: [
          {
            author: 'ace_luck',
            age: '5 hours ago',
            score: 6,
            body: 'And buying UGC does not install the menu. It is a login handoff.',
          },
        ],
      },
      {
        author: 'jake_sabo',
        age: '5 hours ago',
        score: 5,
        body: 'A longer subscription is more time on that product, not a quieter risk profile.',
      },
      {
        author: 'totem_clean',
        age: '3 hours ago',
        score: 4,
        body: 'I read safety before pricing. The receipt does not change the game rules.',
      },
      {
        author: 'hook_reader',
        age: '2 hours ago',
        score: 3,
        body: 'Product page text beats an old screenshot if they disagree.',
      },
    ],
  }),
  thread({
    slug: 'subscription-length-and-risk',
    category: 'Community',
    categoryTone: 'green',
    title: 'Does a longer DBD cheat term lower the chance of a penalty?',
    excerpt: 'Example pricing answer: term length is calendar time on the listing, not a risk discount.',
    author: 'jake_sabo',
    age: '13 hours ago',
    upvotes: 38,
    flair: 'Illustrative',
    sourceTitle: 'DBD cheat pricing',
    sourcePath: '/blogs/dbd-cheats-pricing/',
    body: [
      illustrative,
      'No. A longer term is more days on that checkout line. It does not include future patch compatibility, and it does not change Dead by Daylight’s rules. Confirm the live price at checkout. This thread will not quote a dollar amount that can go stale.',
    ],
    comments: [
      {
        author: 'meg_sprint',
        age: '12 hours ago',
        score: 9,
        body: 'I also added Cloud DMA as its own line. The cheat price alone was not the full stack.',
        replies: [
          {
            author: 'jake_sabo',
            age: '11 hours ago',
            score: 5,
            body: 'That is the pricing guide’s main point.',
          },
        ],
      },
      {
        author: 'adam_teach',
        age: '10 hours ago',
        score: 4,
        body: 'Refund wording lives on the merchant terms, not in a forum estimate.',
      },
      {
        author: 'feng_rush',
        age: '8 hours ago',
        score: 3,
        body: 'HWID and UGC do not extend the cheat clock unless the line item says they do.',
      },
      {
        author: 'dwight_box',
        age: '6 hours ago',
        score: 2,
        body: 'If a patch hits mid-term, I wait for a matching build instead of treating the receipt as a compatibility pass.',
      },
    ],
  }),
  thread({
    slug: 'ban-risk-plain-answers',
    category: 'General',
    categoryTone: 'purple',
    title: 'Can anyone here say a DBD cheat will not lead to a ban?',
    excerpt: 'Example safety thread: reports and penalties are possible, and this library does not call a build ban-proof.',
    author: 'blendette',
    age: '4 hours ago',
    upvotes: 64,
    flair: 'Illustrative',
    sourceTitle: 'DBD cheat safety',
    sourcePath: '/blogs/dbd-cheats-safety/',
    body: [
      illustrative,
      'No. Third-party cheats break the game rules. Other players can report what they see, and the publisher can restrict accounts. This site does not call a build undetected, ban-proof, or guaranteed. Use an account you can afford to lose if you choose to break the rules.',
    ],
    comments: [
      {
        author: 'nurse_blink',
        age: '3 hours ago',
        score: 16,
        body: 'Skill-check help and aim assistance are visible in a match. “It worked once” is not a status report.',
        replies: [
          {
            author: 'blendette',
            age: '2 hours ago',
            score: 8,
            body: 'That is why the safety article lists claims we will not make.',
          },
        ],
      },
      {
        author: 'hillbilly_rev',
        age: '2 hours ago',
        score: 7,
        body: 'A hardware-ID utility is not an appeal. I stopped treating those words as the same product.',
      },
      {
        author: 'clasp_main',
        age: '90 min. ago',
        score: 5,
        body: 'Please do not post order emails or passwords under this thread. It is an example, and it is public.',
      },
      {
        author: 'jane_romero',
        age: '40 min. ago',
        score: 4,
        body: 'Anti-cheat history is in the dated notes. A quiet week is not evidence that enforcement ended.',
      },
    ],
  }),
  thread({
    slug: 'eac-history-and-denuvo-trial',
    category: 'Patch Talk',
    categoryTone: 'orange',
    title: 'What anti-cheat history should I cite for DBD?',
    excerpt: 'Example notes last checked 15 November 2026: historical EAC, then a short Denuvo Anti-Cheat Steam trial.',
    author: 'ancient_gate',
    age: '1 day ago',
    upvotes: 44,
    flair: 'Illustrative',
    sourceTitle: 'Dead by Daylight anti-cheat notes',
    sourcePath: '/blogs/dbd-anti-cheat/',
    body: [
      illustrative,
      'As last verified on 2026-11-15, Dead by Daylight on Steam was historically on Easy Anti-Cheat. A Denuvo Anti-Cheat trial ran on Steam from about 2 September 2026 to 15 September 2026 and was then removed. Other providers may be tested later. This is history, not a detection claim.',
    ],
    comments: [
      {
        author: 'fog_walker',
        age: '22 hours ago',
        score: 12,
        body: 'The HWID listing groups DBD under EAC. That matches the historical name, not a forecast.',
        replies: [
          {
            author: 'ancient_gate',
            age: '20 hours ago',
            score: 6,
            body: 'If a new test ships, the article date has to move. Do not quote September as if it were permanent.',
          },
        ],
      },
      {
        author: 'totem_clean',
        age: '18 hours ago',
        score: 5,
        body: 'A content patch and an anti-cheat test are different events. I check both notes.',
      },
      {
        author: 'hook_reader',
        age: '15 hours ago',
        score: 4,
        body: 'Please do not turn this into advice for turning protections off. The thread is only the public timeline.',
      },
      {
        author: 'pallet_loop',
        age: '11 hours ago',
        score: 3,
        body: 'I link the safety article next to this one so the timeline is not read as a green light.',
      },
    ],
  }),
  thread({
    slug: 'after-the-game-client-updates',
    category: 'Patch Talk',
    categoryTone: 'orange',
    title: 'The game just updated. Should I launch the same cheat build?',
    excerpt: 'Example compatibility answer: update the official client, then wait if the merchant build is behind.',
    author: 'gate_switch',
    age: '3 hours ago',
    upvotes: 39,
    flair: 'Illustrative',
    sourceTitle: 'DBD updates and cheat compatibility',
    sourcePath: '/blogs/dbd-updates-compatibility/',
    body: [
      illustrative,
      'Update Dead by Daylight from the official store, then read the merchant note for the cheat and for Cloud DMA. If the note says the build is behind, wait. A paid term does not make an old file match a new client.',
    ],
    comments: [
      {
        author: 'gen_patrol',
        age: '2 hours ago',
        score: 10,
        body: 'I recheck the World ESP list after a matching build: gens, hooks, pallets, windows, lockers, chests, totems, traps, hatch, gates.',
        replies: [
          {
            author: 'gate_switch',
            age: '100 min. ago',
            score: 5,
            body: 'And I rename the config if the menu rows moved.',
          },
        ],
      },
      {
        author: 'nurse_blink',
        age: '80 min. ago',
        score: 6,
        body: 'Skill-check timing is the first thing I turn off when a patch feels wrong.',
      },
      {
        author: 'hillbilly_rev',
        age: '1 hour ago',
        score: 4,
        body: 'Aim options get the same treatment. I do not paste an old preset over a new menu.',
      },
      {
        author: 'ancient_gate',
        age: '40 min. ago',
        score: 3,
        body: 'Also glance at the anti-cheat date. A client update can arrive without a new anti-cheat test, or the other way around.',
      },
    ],
  }),
  thread({
    slug: 'menu-does-not-open',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'The menu never draws. What is worth checking before I ask support?',
    excerpt: 'Example troubleshooting: official file, matching game version, Hyper-V status, then stop.',
    author: 'trap_mark',
    age: '15 hours ago',
    upvotes: 27,
    flair: 'Illustrative',
    sourceTitle: 'DBD cheat installation outline',
    sourcePath: '/blogs/dbd-installation/',
    body: [
      illustrative,
      'Confirm the file came from the checkout portal, the game is on the version the merchant named, and Cloud DMA’s Hyper-V layer is actually running if you expected the full set. Then stop. Send support the order email and the sentence on screen. Do not add unrelated system tweaks between checks.',
    ],
    comments: [
      {
        author: 'locker_check',
        age: '14 hours ago',
        score: 8,
        body: 'A second download from a forum broke the comparison. One source at a time.',
        replies: [
          {
            author: 'trap_mark',
            age: '13 hours ago',
            score: 4,
            body: 'Yes. If the sources differ, you no longer know which file failed.',
          },
        ],
      },
      {
        author: 'window_tech',
        age: '12 hours ago',
        score: 5,
        body: 'I also checked that I was not on a console account build. This listing is PC.',
      },
      {
        author: 'jeff_rock',
        age: '10 hours ago',
        score: 3,
        body: 'Hyper-V errors are a Windows edition or firmware issue. They are not fixed by reinstalling the game twice.',
      },
      {
        author: 'clasp_main',
        age: '9 hours ago',
        score: 3,
        body: 'Support cannot see a screenshot you never sent. The on-screen text matters more than a summary like “it broke.”',
      },
    ],
  }),
  thread({
    slug: 'saving-survivor-and-killer-configs',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'How should I store survivor and killer configs?',
    excerpt: 'Example config advice: separate role layouts, keep the last menu you understood, reload only on a current build.',
    author: 'nea_urban',
    age: '18 hours ago',
    upvotes: 22,
    flair: 'Illustrative',
    sourceTitle: 'DBD cheat features',
    sourcePath: '/blogs/dbd-cheats-features/',
    body: [
      illustrative,
      'Use one config for a survivor ESP layout and another if you use killer aim options. Name them after the role. Keep a copy of the last layout that matched a menu you could read. After a game update, reload configs only when the merchant says that build is current.',
    ],
    comments: [
      {
        author: 'pallet_loop',
        age: '16 hours ago',
        score: 7,
        body: 'My survivor file has survivors, gens, hooks, and pallets. Windows stay off until I need them.',
        replies: [
          {
            author: 'nea_urban',
            age: '15 hours ago',
            score: 3,
            body: 'That is a readable default. Add totems later if the center stays clear.',
          },
        ],
      },
      {
        author: 'hillbilly_rev',
        age: '14 hours ago',
        score: 4,
        body: 'I do not keep aim options in the survivor file. Loading the wrong role is an easy mistake.',
      },
      {
        author: 'yun_dash',
        age: '12 hours ago',
        score: 3,
        body: 'Old config files can point at rows the new menu removed. Rename rather than overwrite.',
      },
      {
        author: 'kate_crow',
        age: '9 hours ago',
        score: 2,
        body: 'Display mode changes can invalidate a saved position. I noted the mode in the config name.',
      },
    ],
  }),
  thread({
    slug: 'license-on-a-second-pc',
    category: 'General',
    categoryTone: 'purple',
    title: 'Can I move a license to another PC?',
    excerpt: 'Example license note: follow the merchant terms, and do not expect a hardware-ID tool to act as a transfer.',
    author: 'adam_teach',
    age: '2 days ago',
    upvotes: 19,
    flair: 'Illustrative',
    sourceTitle: 'DBD cheats FAQ',
    sourcePath: '/blogs/dbd-cheats-faq/',
    body: [
      illustrative,
      'License moves, device limits, and resets are whatever the merchant terms say at checkout. Ask support with the order email. A HWID utility is not a license transfer, and Cloud DMA still has to match the PC you actually play on, including Hyper-V.',
    ],
    comments: [
      {
        author: 'jake_sabo',
        age: '1 day ago',
        score: 6,
        body: 'I checked the term text before assuming a second install was included.',
        replies: [
          {
            author: 'adam_teach',
            age: '1 day ago',
            score: 3,
            body: 'The FAQ says checkout wins when an article and the listing disagree.',
          },
        ],
      },
      {
        author: 'fog_walker',
        age: '22 hours ago',
        score: 4,
        body: 'The new PC still needs the Windows edition for the Hyper-V layer if you want the full menu.',
      },
      {
        author: 'clasp_main',
        age: '20 hours ago',
        score: 3,
        body: 'Do not post the key here to “check if it looks valid.” This thread is public and illustrative.',
      },
      {
        author: 'dwight_box',
        age: '16 hours ago',
        score: 2,
        body: 'UGC credentials are not a cheat license. Moving an account login is a different product and a different risk.',
      },
    ],
  }),
  thread({
    slug: 'windows-hyper-v-edition',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'Which Windows setup matches the Cloud DMA note?',
    excerpt: 'Example PC thread: Hyper-V on a single PC, typically Pro, Enterprise, or Education, with virtualization enabled.',
    author: 'jeff_rock',
    age: '1 day ago',
    upvotes: 31,
    flair: 'Illustrative',
    sourceTitle: 'PC notes for the DBD cheat and Cloud DMA',
    sourcePath: '/blogs/dbd-pc-requirements/',
    body: [
      illustrative,
      'Cloud DMA is described as a Hyper-V single-PC layer. Hyper-V on Windows 10 and 11 is commonly limited to Pro, Enterprise, and Education, and the CPU firmware has to allow virtualization. Windows Home usually cannot fill that role. Confirm the merchant note before you buy.',
    ],
    comments: [
      {
        author: 'adam_teach',
        age: '23 hours ago',
        score: 9,
        body: 'The game’s store requirements and this stack’s requirements are different lists.',
        replies: [
          {
            author: 'jeff_rock',
            age: '21 hours ago',
            score: 4,
            body: 'A laptop can run DBD and still block virtualization. Both checks matter.',
          },
        ],
      },
      {
        author: 'blendette',
        age: '18 hours ago',
        score: 4,
        body: 'Leave memory headroom. The layer and the match run together.',
      },
      {
        author: 'yun_dash',
        age: '14 hours ago',
        score: 3,
        body: 'I would not follow a forum firmware recipe. The vendor’s own virtualization switch is the reference, then the merchant status.',
      },
      {
        author: 'trap_mark',
        age: '12 hours ago',
        score: 2,
        body: 'If Hyper-V will not start, stop the install outline there and talk to support.',
      },
    ],
  }),
  thread({
    slug: 'how-to-ask-support',
    category: 'Community',
    categoryTone: 'green',
    title: 'What should a support message include?',
    excerpt: 'Example support etiquette: order email, product name, and the on-screen sentence. No passwords in public.',
    author: 'clasp_main',
    age: '6 hours ago',
    upvotes: 18,
    flair: 'Illustrative',
    sourceTitle: 'DBD cheats FAQ',
    sourcePath: '/blogs/dbd-cheats-faq/',
    body: [
      illustrative,
      'Use the merchant’s support path. Include the order email, whether you bought the main cheat, Cloud DMA, HWID Spoofer, or UGC, and the exact sentence on screen. Do not send a password, a license key, or a payment screenshot into a public thread.',
    ],
    comments: [
      {
        author: 'jane_romero',
        age: '5 hours ago',
        score: 6,
        body: '“It doesn’t work” is harder to answer than the portal’s own error line.',
        replies: [
          {
            author: 'clasp_main',
            age: '4 hours ago',
            score: 3,
            body: 'And say whether the game client updated the same day.',
          },
        ],
      },
      {
        author: 'locker_check',
        age: '4 hours ago',
        score: 4,
        body: 'I mention if the file came from the portal. That filters out mirror downloads.',
      },
      {
        author: 'ace_luck',
        age: '3 hours ago',
        score: 2,
        body: 'UGC questions are account-handoff questions. Do not mix them with an ESP config.',
      },
      {
        author: 'meg_sprint',
        age: '2 hours ago',
        score: 2,
        body: 'This forum is read-only and illustrative. It will not reply as staff.',
      },
    ],
  }),
  thread({
    slug: 'choosing-cheat-hwid-or-ugc',
    category: 'Community',
    categoryTone: 'green',
    title: 'I only want one product. How do I choose?',
    excerpt: 'Example buying thread: overlay, hardware IDs, and ready-made accounts are different jobs.',
    author: 'yun_dash',
    age: '10 hours ago',
    upvotes: 34,
    flair: 'Illustrative',
    sourceTitle: 'How to choose a Dead by Daylight cheat in 2026',
    sourcePath: '/blogs/best-dbd-cheats/',
    body: [
      illustrative,
      'Pick the job. Overlay features mean the main cheat plus Cloud DMA for the full set. Hardware identifiers mean the HWID listing, which groups DBD under EAC and does not recover an account. A ready-made login means UGC’s credential handoff, with no promise the account stays yours or unrestricted.',
    ],
    comments: [
      {
        author: 'claudette_map',
        age: '9 hours ago',
        score: 8,
        body: 'I wanted generator and hook markers, so the extras would have been the wrong first purchase.',
        replies: [
          {
            author: 'yun_dash',
            age: '8 hours ago',
            score: 4,
            body: 'Right. And that overlay still needed the Cloud DMA line for the full menu.',
          },
        ],
      },
      {
        author: 'hillbilly_rev',
        age: '7 hours ago',
        score: 5,
        body: 'Aim options are inside the main cheat, not inside the spoofer.',
      },
      {
        author: 'jake_sabo',
        age: '6 hours ago',
        score: 3,
        body: 'I read pricing only after the comparison table. Otherwise the cheapest line looks like the whole stack.',
      },
      {
        author: 'blendette',
        age: '4 hours ago',
        score: 3,
        body: 'Whichever row you pick, the safety article still applies. Choosing a product is not a waiver.',
      },
    ],
  }),
  thread({
    slug: 'hwid-spoofer-is-not-recovery',
    category: 'General',
    categoryTone: 'purple',
    title: 'Does the HWID Spoofer restore a restricted DBD account?',
    excerpt: 'Example clarification: hardware IDs only. The merchant lists DBD under EAC. No unban claim.',
    author: 'nurse_blink',
    age: '12 hours ago',
    upvotes: 42,
    flair: 'Illustrative',
    sourceTitle: 'HWID Spoofer for Dead by Daylight',
    sourcePath: '/blogs/dbd-hwid-spoofer/',
    body: [
      illustrative,
      'No. HWID Spoofer is a hardware-ID utility. The merchant lists Dead by Daylight under Easy Anti-Cheat for that product. It does not file an appeal, return a login, or add ESP. Account sales are a different listing and are also not recovery.',
    ],
    comments: [
      {
        author: 'ancient_gate',
        age: '11 hours ago',
        score: 11,
        body: 'EAC in that sentence is the historical grouping, last checked with the 15 November 2026 notes.',
        replies: [
          {
            author: 'nurse_blink',
            age: '10 hours ago',
            score: 5,
            body: 'If the publisher tests another provider, that sentence has to be re-read on the live listing.',
          },
        ],
      },
      {
        author: 'hillbilly_rev',
        age: '9 hours ago',
        score: 6,
        body: 'I will not post “it cleared me” stories here. This library does not treat anecdotes as a guarantee.',
      },
      {
        author: 'trap_mark',
        age: '7 hours ago',
        score: 3,
        body: 'People asking for step-by-step identifier edits are in the wrong thread. The article stays at product scope.',
      },
      {
        author: 'clasp_main',
        age: '5 hours ago',
        score: 3,
        body: 'Support can explain the listing you bought. They cannot promise a game penalty will be reversed, because that is not the product.',
      },
    ],
  }),
  thread({
    slug: 'skill-check-helper-limits',
    category: 'Guides & Builds',
    categoryTone: 'blue',
    title: 'What should I expect from the skill check helper?',
    excerpt: 'Example feature note: it is an aid tied to the current build, not a promise of perfect great skill checks.',
    author: 'meg_sprint',
    age: '14 hours ago',
    upvotes: 26,
    flair: 'Illustrative',
    sourceTitle: 'DBD cheat features',
    sourcePath: '/blogs/dbd-cheats-features/',
    body: [
      illustrative,
      'The skill check helper assists the skill-check minigame. It depends on the current Dead by Daylight build, perks, and whether that module is aligned after the last patch. Misses happen. It is also visible to people standing next to you, and it breaks the game rules. The feature list does not call it perfect.',
    ],
    comments: [
      {
        author: 'gen_patrol',
        age: '13 hours ago',
        score: 7,
        body: 'After a patch I turn it off until the status note names that build.',
        replies: [
          {
            author: 'meg_sprint',
            age: '12 hours ago',
            score: 4,
            body: 'Same. Forcing it when the timing feels late is how a session gets messy.',
          },
        ],
      },
      {
        author: 'dwight_box',
        age: '11 hours ago',
        score: 4,
        body: 'Great checks still interact with perks. The helper does not rewrite perk text.',
      },
      {
        author: 'feng_rush',
        age: '9 hours ago',
        score: 3,
        body: 'I keep it out of FPS tests. Mixing a timing module with a frame-rate pass confuses both.',
      },
      {
        author: 'blendette',
        age: '7 hours ago',
        score: 3,
        body: 'Nothing in this reply makes the module low profile. The safety thread still applies.',
      },
    ],
  }),
];

export function getForumPost(slug: string): ForumPost | undefined {
  return forumPosts.find((post) => post.slug === slug);
}
