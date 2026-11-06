import { credentials } from '../data/credentials.js'
const certificateImages = {
  'CS302: Software Engineering': 'saylor-cs302',
  'Responsive Web Design': 'fcc-responsive',
  JavaScript: 'fcc-javascript',
  'Front-End Development Libraries': 'fcc-libraries',
  'Ahrefs’ Marketing Platform': 'ahrefs',
  'SEO Certified': 'hubspot',
  'SEO Toolkit Crash Course': 'semrush-toolkit',
  'Technical SEO and AI Search Essentials with Semrush': 'semrush-technical',
}

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
        <p>
          Certifications in software engineering, web development, and search.
        </p>
      </div>
      <ul className="credential-list">
        {credentials.map((credential) => (
          <li key={`${credential.issuer}-${credential.title}`}>
            <div className="credential-heading">
              <div className="credential-thumbnail" aria-hidden="true">
                <img
                  src={`/images/certificates/${certificateImages[credential.title]}.webp`}
                  alt=""
                  width="128"
                  height="90"
                  loading="lazy"
                />
              </div>
              <div>
                <h3>{credential.title}</h3>
                {credential.validity && <span>{credential.validity}</span>}
              </div>
            </div>
            <div className="credential-meta">
              <span>{credential.issuer}</span>
              {credential.issued && (
                <time dateTime={credential.issued}>{credential.date}</time>
              )}
              {credential.credentialId && (
                <span>Credential ID: {credential.credentialId}</span>
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
