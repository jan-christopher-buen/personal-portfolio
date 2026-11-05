import { profileUrl } from '../data/projects.js'

const email = 'buenjanchristopher@gmail.com'

export default function Contact() {
  return (
    <section
      id="contact"
      className="contact section"
      tabIndex="-1"
      aria-labelledby="contact-title"
    >
      <div className="contact-panel">
        <p className="eyebrow section-label">Contact</p>
        <h2 id="contact-title">
          Have a project in mind?
          <br />
          <span>Let’s talk.</span>
        </h2>
        <p className="contact-description">
          Tell me about your website, an improvement you need, or a developer
          opportunity.
        </p>
        <div className="contact-actions">
          <a className="button" href={`mailto:${email}`}>
            Email me <span aria-hidden="true">↗</span>
          </a>
          <a className="contact-github" href={profileUrl}>
            View GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  )
}
