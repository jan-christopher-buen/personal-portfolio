const services = [
  {
    name: 'WordPress Website Development',
    description:
      'Business websites with custom child themes, ACF-editable content, and responsive layouts.',
    href: '#work',
    link: 'See client websites',
  },
  {
    name: 'Website Redesign & Maintenance',
    description:
      'Layout and content improvements, hosting management, and troubleshooting to keep a website useful.',
    href: 'https://practicalexteriormaintenance.com/',
    link: 'View my redesign work',
  },
  {
    name: 'Technical SEO Setup',
    description:
      'Page metadata, sitemaps, structured data, and technical checks that give a website a clear foundation.',
    href: '#work',
    link: 'Explore my contributions',
  },
  {
    name: 'Custom Web Applications',
    description:
      'Dashboards, CRUD workflows, authentication, and database-backed applications. My personal projects demonstrate this work.',
    href: '#projects',
    link: 'Explore personal applications',
  },
]
export default function Services() {
  return (
    <section
      id="services"
      className="services section"
      tabIndex="-1"
      aria-labelledby="services-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow section-label">02 / Services</p>
          <h2 id="services-title">
            From a business website
            <br />
            to the logic behind it.
          </h2>
        </div>
        <p>
          Practical development and ongoing site care, with a focus on clarity
          and maintainability.
        </p>
      </div>
      <div className="service-grid">
        {services.map((service, index) => (
          <article key={service.name}>
            <span className="service-number" aria-hidden="true">
              0{index + 1} /
            </span>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <a href={service.href}>
              {service.link} <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
