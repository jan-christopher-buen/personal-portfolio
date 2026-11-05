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
      src={`/icons/${brandIcons[name]}.svg`}
      width="24"
      height="24"
      alt=""
      aria-hidden="true"
    />
  )
}
