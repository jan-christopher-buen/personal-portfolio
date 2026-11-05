const github = 'https://github.com/jan-christopher-buen'

export const projects = [
  {
    id: 'commonroom',
    name: 'Commonroom',
    category: 'Social platform',
    summary:
      'An everyday social space built around the people you choose to follow.',
    features:
      'Accounts, a chronological feed, directed follow requests, posts, likes, and paginated comments. Read-only guest exploration makes the community easy to try.',
    decision:
      'Timestamp-and-ID cursors keep pagination stable when posts share a timestamp. Database constraints protect follow pairs and prevent duplicate likes.',
    stack: ['React', 'Node.js', 'Express', 'Prisma', 'PostgreSQL'],
    source: `${github}/odin-book`,
    demo: 'https://commonroom-odin-book.vercel.app',
    image: '/images/commonroom.webp',
    alt: 'Commonroom welcome screen with sign-in and read-only guest exploration.',
  },
  {
    id: 'midnight-market',
    name: 'Midnight Market',
    category: 'Interactive search game',
    summary:
      'A lantern-lit search game with four hidden regulars and a server-timed leaderboard.',
    features:
      'Pointer and keyboard play, persistent discovery markers, resumable rounds, and optional score publishing bring an original illustrated market to life.',
    decision:
      'Normalized coordinates keep guesses aligned when the scene resizes. The server owns timing and validates finds inside transactions, rather than trusting the client clock.',
    stack: ['React', 'JavaScript', 'CSS', 'Express', 'Prisma', 'PostgreSQL'],
    source: `${github}/odin-wheres-waldo`,
    demo: 'https://midnight-market-eight.vercel.app',
    image: '/images/market.webp',
    alt: 'Midnight Market game introduction and illustrated nighttime market.',
  },
  {
    id: 'signal-post',
    name: 'Signal Post',
    category: 'Private messaging',
    summary:
      'A focused space for one-to-one text conversations, with room to pick up where you left off.',
    features:
      'Member search, private conversations, paginated message history, profile editing, and in-memory drafts that survive conversation switches and failed sends.',
    decision:
      'A unique database constraint prevents duplicate participant pairs. The API checks conversation membership independently of the interface; messages use explicit refresh rather than real-time delivery.',
    stack: ['React', 'Node.js', 'Express', 'Prisma', 'PostgreSQL'],
    source: `${github}/odin-messaging-app`,
    demo: 'https://signal-post-rho.vercel.app',
    image: '/images/signal.webp',
    alt: 'Signal Post public welcome and sign-in screen.',
  },
]

export const profileUrl = github
