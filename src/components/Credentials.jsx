import { credentials } from '../data/credentials.js'
export default function Credentials() {
  return (
    <section
      id="credentials"
      className="credentials section"
      tabIndex="-1"
      aria-labelledby="credentials-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow section-label">Certifications</p>
          <h2 id="credentials-title">
            Always building.
            <br />
            Always learning.
          </h2>
        </div>
        <p>Certifications in web development and search.</p>
      </div>
      <ul className="credential-list">
        {credentials.map((credential) => (
          <li key={`${credential.issuer}-${credential.title}`}>
            <div>
              <h3>{credential.title}</h3>
              {credential.validity && <span>{credential.validity}</span>}
            </div>
            <div className="credential-meta">
              <span>{credential.issuer}</span>
              {credential.issued && (
                <time dateTime={credential.issued}>{credential.date}</time>
              )}
            </div>
            {credential.url && (
              <a href={credential.url}>
                View credential <span aria-hidden="true">↗</span>
                <span className="sr-only"> — {credential.title}</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>
  )
}
