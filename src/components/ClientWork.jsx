import { useState } from 'react'
import { additionalClients, featuredClients } from '../data/clientWork.js'

function ClientCard({ client }) {
  return (
    <article className="client-card">
      <p className="eyebrow">{client.category}</p>
      <h3>{client.name}</h3>
      <p className="client-summary">{client.description}</p>
      <p className="client-contribution">{client.contribution}</p>
      <ul className="tags" aria-label={`${client.name} tools and features`}>
        {client.stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <a href={client.url}>
        Visit website <span aria-hidden="true">↗</span>
        <span className="sr-only"> — {client.name}</span>
      </a>
    </article>
  )
}

export default function ClientWork() {
  const [expanded, setExpanded] = useState(false)
  return (
    <section
      id="work"
      className="client-work section"
      tabIndex="-1"
      aria-labelledby="client-work-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow section-label">Selected client work</p>
          <h2 id="client-work-title">
            Commercial websites,
            <br />
            real contributions.
          </h2>
        </div>
        <p>
          WordPress builds, customization, and technical SEO for real
          businesses. Each entry describes my contribution.
        </p>
      </div>
      <div className="client-grid">
        {featuredClients.map((client) => (
          <ClientCard key={client.url} client={client} />
        ))}
      </div>
      <div className="client-disclosure">
        <button
          className="client-toggle"
          type="button"
          aria-expanded={expanded}
          aria-controls="additional-client-work"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'Show fewer projects' : 'Show more client work'}{' '}
          <span aria-hidden="true">{expanded ? '−' : '+'}</span>
        </button>
      </div>
      <div
        id="additional-client-work"
        className="client-grid additional-client-grid"
        hidden={!expanded}
      >
        {additionalClients.map((client) => (
          <ClientCard key={client.url} client={client} />
        ))}
      </div>
    </section>
  )
}
