const brandIcons = {
  HTML: 'html5',
  CSS: 'css',
  JavaScript: 'javascript',
  React: 'react',
  'Node.js': 'nodedotjs',
  Express: 'express',
  PostgreSQL: 'postgresql',
  Prisma: 'prisma',
  WordPress: 'wordpress',
  PHP: 'php',
  WooCommerce: 'woocommerce',
  Git: 'git',
  GitHub: 'github',
  'VS Code': 'vscode',
  Vercel: 'vercel',
  Render: 'render',
  'React Router': 'reactrouter',
  Passport: 'passport',
  'Supabase Storage': 'supabase',
  Jest: 'jest',
  Vitest: 'vitest',
  'Linux / WSL': 'linux',
  Vite: 'vite',
  Webpack: 'webpack',
  Babel: 'babel',
  npm: 'npm',
  ACF: 'acf',
  Elementor: 'elementor',
  Hostinger: 'hostinger',
  'Google Business Profile': 'googlebusinessprofile',
  'Google Search Console': 'googlesearchconsole',
  'Google Analytics 4 (GA4)': 'googleanalytics',
  'Rank Math': 'rankmath',
  'Yoast SEO': 'yoast',
  Semrush: 'semrush',
}

const lightVariants = new Set([
  'Express',
  'Prisma',
  'WordPress',
  'Elementor',
  'GitHub',
  'Vercel',
  'Render',
])

export default function StackIcon({ name }) {
  return (
    <img
      className={`stack-tool-icon${lightVariants.has(name) ? ' stack-tool-icon-light' : ''}`}
      src={`/icons/${brandIcons[name]}.${['Google Business Profile', 'Rank Math'].includes(name) ? 'png' : 'svg'}`}
      width="24"
      height="24"
      alt=""
      aria-hidden="true"
    />
  )
}
