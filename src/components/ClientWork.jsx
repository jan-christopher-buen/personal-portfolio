import { additionalClients, featuredClients } from '../data/clientWork.js'

export default function ClientWork() {
  return (
    <section
      id="work"
      className="client-work section"
      aria-labelledby="client-work-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow section-label">01 / Client work</p>
          <h2 id="client-work-title">
            Websites built
            <br />
            for everyday business.
          </h2>
        </div>
        <p>
          WordPress development, customization, maintenance, and technical SEO
          for client websites.
        </p>
      </div>
      <div className="experience">
        <h3>Web Developer &amp; SEO Specialist</h3>
        <p>Ironclad Sites &amp; affiliated businesses</p>
        <p className="experience-details">
          Part-time · Remote · <time dateTime="2026-03">March 2026</time>
          –Present
        </p>
      </div>
      <div className="client-grid">
        {featuredClients.map((client) => (
          <article className="client-entry" key={client.url}>
            <p className="eyebrow">{client.category}</p>
            <h3>{client.name}</h3>
            <p>{client.description}</p>
            <p>{client.contribution}</p>
            <ul
              className="tags"
              aria-label={`${client.name} tools and features`}
            >
              {client.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a href={client.url}>
              Visit website <span aria-hidden="true">↗</span>
              <span className="sr-only"> — {client.name}</span>
            </a>
          </article>
        ))}
      </div>
      <div className="additional-work">
        <h3>More client contributions</h3>
        {additionalClients.map((client) => (
          <div className="additional-entry" key={client.url}>
            <h4>
              <a href={client.url}>
                {client.name} <span aria-hidden="true">↗</span>
              </a>
            </h4>
            <p>{client.contribution}</p>
          </div>
        ))}
      </div>
      <p className="client-note">
        Across this work, I configured page titles, meta descriptions, sitemaps,
        and structured data, including a custom schema plugin when existing
        plugins did not meet the requirements.
      </p>
      <a className="text-link" href="#projects">
        Explore my full-stack JavaScript projects{' '}
        <span aria-hidden="true">↓</span>
      </a>
    </section>
  )
}
