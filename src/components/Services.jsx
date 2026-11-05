const services = [
  {
    name: 'WordPress Website Development',
    icon: 'website',
    description:
      'Business websites with custom child themes, ACF-editable content, and responsive layouts.',
    href: '#work',
    link: 'See client websites',
  },
  {
    name: 'Website Redesign & Maintenance',
    icon: 'maintenance',
    description:
      'Layout and content improvements, hosting management, and troubleshooting to keep a website useful.',
    href: 'https://practicalexteriormaintenance.com/',
    link: 'View my redesign work',
  },
  {
    name: 'Technical SEO Setup',
    icon: 'search',
    description:
      'Page metadata, sitemaps, structured data, and technical checks that give a website a clear foundation.',
    href: '#work',
    link: 'Explore my contributions',
  },
  {
    name: 'Custom Web Applications',
    icon: 'application',
    description:
      'Dashboards, CRUD workflows, authentication, and database-backed applications. My personal projects demonstrate this work.',
    href: '#projects',
    link: 'Explore personal applications',
  },
]
function ServiceIcon({ type }) {
  const paths = {
    website:
      'M3 8h18 M3 4h18v16H3z M7 6h.01 M10 6h.01 M8 12l-2 2 2 2 M16 12l2 2-2 2 M13 11l-2 6',
    maintenance:
      'M14 6a5 5 0 0 0-6 6L3 17a2.8 2.8 0 0 0 4 4l5-5a5 5 0 0 0 6-6l-3 3-4-4 3-3z',
    search:
      'M15.5 15.5L21 21 M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0 M6 12V9 M10 12V6 M14 12v-2',
    application: 'M3 3h18v18H3z M3 8h18 M9 8v13 M13 12l-2 2 2 2 M17 12l2 2-2 2',
  }
  return (
    <svg
      className="service-icon"
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={paths[type]} />
    </svg>
  )
}

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
          <p className="eyebrow section-label">Services</p>
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
        {services.map((service) => (
          <article key={service.name}>
            <ServiceIcon type={service.icon} />
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
