const groups = [
  { label: 'Frontend', tools: ['HTML', 'CSS', 'JavaScript', 'React'] },
  {
    label: 'Backend & data',
    tools: ['Node.js', 'Express', 'PostgreSQL', 'Prisma'],
  },
  {
    label: 'WordPress',
    tools: [
      'WordPress',
      'PHP',
      'ACF',
      'WooCommerce',
      'Custom child themes',
      'Custom plugins',
    ],
  },
  {
    label: 'Tools & deployment',
    tools: ['Git', 'GitHub', 'VS Code', 'WSL', 'Vercel', 'Render'],
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
          <p className="eyebrow section-label">04 / Tech stack</p>
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
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
