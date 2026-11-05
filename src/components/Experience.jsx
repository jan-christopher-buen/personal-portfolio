import { experience } from '../data/experience.js'

export default function Experience() {
  return (
    <section
      id="experience"
      className="experience"
      tabIndex="-1"
      aria-label="Work experience"
    >
      <ol className="experience-timeline" role="list">
        {experience.map((entry) => (
          <li
            key={`${entry.company}-${entry.start}`}
            className={
              entry.current ? 'timeline-entry is-current' : 'timeline-entry'
            }
          >
            <p className="timeline-dates">
              <time dateTime={entry.start}>{entry.startLabel}</time>
              {'–'}
              {entry.current ? (
                'Present'
              ) : (
                <time dateTime={entry.end}>{entry.endLabel}</time>
              )}
            </p>
            <span className="timeline-marker" aria-hidden="true">
              <span className="timeline-line" />
              <span className="timeline-dot" />
            </span>
            <div className="timeline-details">
              {entry.current && (
                <p className="eyebrow timeline-status">Current role</p>
              )}
              <h3>{entry.role}</h3>
              <p className="timeline-company">{entry.company}</p>
              {entry.arrangement && (
                <p className="timeline-arrangement">{entry.arrangement}</p>
              )}
              <p className="timeline-summary">{entry.summary}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
