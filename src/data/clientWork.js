const clients = [
  {
    name: 'Rossi Moves the East',
    category: 'Real estate',
    url: 'https://rossimovestheeast.com/',
    description:
      'Built a realtor website from scratch for an agent serving New York and Florida, and currently manage its hosting.',
    contribution:
      'Integrated IDX Broker MLS search across two boards, Turnstile-protected lead forms, Google Tag Manager, and RealEstateAgent structured data.',
    stack: ['WordPress', 'IDX Broker', 'Structured data'],
  },
  {
    name: 'Ironclad Sites',
    category: 'Web design & commerce',
    url: 'https://ironclad-sites.com/',
    description:
      'Built the website from scratch for a web design brand serving contractors, and currently manage its hosting.',
    contribution:
      'Developed a custom child theme with ACF and a WooCommerce shop offering subscription website plans and logo/vector add-ons with Square payments.',
    stack: ['WordPress', 'ACF', 'WooCommerce', 'Square'],
  },
  {
    name: 'Paver Sealing Academy',
    category: 'Contractor training',
    url: 'https://paversealingacademy.com/',
    description:
      'Built a lead-generation website from scratch for a contractor training program, and currently manage its hosting.',
    contribution:
      'Implemented an application funnel and GA4 tracking to support the program’s application process.',
    stack: ['WordPress', 'Application funnel', 'GA4'],
  },

  {
    name: 'Nexora Technologies',
    category: 'Company website',
    description:
      'Built the company website from scratch and currently manage hosting.',
    stack: ['WordPress', 'Website development', 'Hosting'],
    url: 'https://nexorany.com/',
    contribution:
      'Nexora offers websites, apps, and custom software; my contribution here was its company website.',
  },
  {
    name: 'Practical Exterior Maintenance',
    category: 'Website redesign & local SEO',
    description:
      'Redesigned an existing exterior-maintenance website and currently manage its hosting.',
    stack: ['WordPress', 'ACF', 'Local SEO'],
    url: 'https://practicalexteriormaintenance.com/',
    contribution:
      'Made content editable with ACF and worked on local SEO. My contribution was the redesign and ongoing care, not the original website build.',
  },
]

const featuredNames = [
  'Rossi Moves the East',
  'Practical Exterior Maintenance',
  'Nexora Technologies',
]
export const featuredClients = featuredNames.map((name) =>
  clients.find((client) => client.name === name),
)
export const additionalClients = clients.filter(
  (client) => !featuredNames.includes(client.name),
)
