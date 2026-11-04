export default function Project({ project, index }) {
  return (
    <article
      className={`project project--${project.id}`}
      aria-labelledby={`${project.id}-title`}
    >
      <div className="project-image">
        <img
          src={project.image}
          alt={project.alt}
          width="1440"
          height="1000"
          loading="lazy"
          decoding="async"
        />
        <span className="project-index" aria-hidden="true">
          0{index + 1}
        </span>
      </div>
      <div className="project-copy">
        <p className="eyebrow">{project.category}</p>
        <h3 id={`${project.id}-title`}>{project.name}</h3>
        <p className="project-summary">{project.summary}</p>
        <p>{project.features}</p>
        <div className="engineering-note">
          <h4>Behind the build</h4>
          <p>{project.decision}</p>
        </div>
        <ul className="tags" aria-label={`${project.name} technologies`}>
          {project.stack.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        <div className="project-links">
          <a href={project.demo}>
            Explore demo <span aria-hidden="true">↗</span>
            <span className="sr-only"> — {project.name}</span>
          </a>
          <a href={project.source}>
            Source code <span aria-hidden="true">↗</span>
            <span className="sr-only"> — {project.name}</span>
          </a>
        </div>
      </div>
    </article>
  )
}
