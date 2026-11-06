import StackIcon from './StackIcon.jsx'

const groups = [
  {
    label: 'Frontend',
    tools: ['HTML', 'CSS', 'JavaScript', 'React', 'React Router'],
  },
  {
    label: 'Backend & data',
    tools: [
      'Node.js',
      'Express',
      'Passport',
      'PostgreSQL',
      'Prisma',
      'Supabase Storage',
    ],
  },
  {
    label: 'WordPress',
    tools: ['WordPress', 'PHP', 'WooCommerce', 'ACF', 'Elementor'],
  },
  {
    label: 'SEO & analytics',
    tools: [
      'Google Business Profile',
      'Google Search Console',
      'Google Analytics 4 (GA4)',
      'Rank Math',
      'Yoast SEO',
      'Semrush',
    ],
  },
  {
    label: 'Testing',
    tools: ['Jest', 'Vitest'],
  },
  {
    label: 'Tools & deployment',
    tools: [
      'Git',
      'GitHub',
      'VS Code',
      'Linux / WSL',
      'Vite',
      'Webpack',
      'Babel',
      'npm',
      'Vercel',
      'Render',
      'Hostinger',
    ],
  },
]

export default function Stack() {
  return (
    <section
      id="skills"
      className="stack section"
      tabIndex="-1"
      aria-labelledby="stack-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow section-label">Tech stack</p>
          <h2 id="stack-title">
            The tools behind
            <br />
            the work.
          </h2>
        </div>
        <p>
          Chosen for the job, put into practice through client websites and
          personal applications.
        </p>
      </div>
      <dl className="stack-list">
        {groups.map((group, index) => (
          <div key={group.label}>
            <dt>
              <span aria-hidden="true">0{index + 1}</span>
              {group.label}
            </dt>
            <dd>
              <ul className="stack-tools">
                {group.tools.map((tool) => (
                  <li key={tool}>
                    <StackIcon name={tool} />
                    <span>{tool}</span>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
