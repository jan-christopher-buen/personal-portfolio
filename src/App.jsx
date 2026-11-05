import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Project from './components/Project.jsx'
import ClientWork from './components/ClientWork.jsx'
import Services from './components/Services.jsx'
import Stack from './components/Stack.jsx'
import Credentials from './components/Credentials.jsx'
import Contact from './components/Contact.jsx'
import Experience from './components/Experience.jsx'
import { profileUrl, projects } from './data/projects.js'

function About() {
  return (
    <section
      id="about"
      className="about"
      tabIndex="-1"
      aria-labelledby="about-title"
    >
      <div className="about-content">
        <p className="eyebrow section-label">About</p>
        <h2 id="about-title">
          Careful with the details.
          <br />
          Curious about the whole.
        </h2>
        <p className="about-description">
          I’m Jan Christopher Buen, a web developer building WordPress websites
          and full-stack JavaScript applications with React, Express, and
          PostgreSQL. My current work includes technical SEO and site
          maintenance. My previous roles in manufacturing, product engineering,
          and quality assurance shape how I troubleshoot, verify behavior, and
          document decisions, with a focus on useful interfaces and dependable
          websites.
        </p>
      </div>
    </section>
  )
}

export default function App() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting && !motion.matches) {
            entry.target.classList.add('reveal-enter')
            observer.unobserve(entry.target)
          }
        }),
      { threshold: 0.01, rootMargin: '0px 0px 48px 0px' },
    )
    function observeContent() {
      observer.disconnect()
      if (motion.matches) return
      document
        .querySelectorAll(
          '.section-heading, .client-card, .service-grid article, .project, .stack-list > div, .about-content, .timeline-entry, .credential-list > li, .contact-panel',
        )
        .forEach((element) => {
          if (!element.classList.contains('reveal-enter'))
            observer.observe(element)
        })
    }
    observeContent()
    motion.addEventListener('change', observeContent)
    return () => {
      observer.disconnect()
      motion.removeEventListener('change', observeContent)
    }
  }, [])
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div id="top" />
      <Header />
      <main id="main" tabIndex="-1">
        <section className="hero" aria-labelledby="intro-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="identity-line" aria-hidden="true" />
              Jan Christopher Buen / Web Developer
            </p>
            <h1 id="intro-title">
              Useful websites.
              <br />
              <span>Thoughtful implementation.</span>
            </h1>
            <p className="hero-description">
              I build full-stack JavaScript applications and WordPress websites,
              bringing technical SEO and careful site maintenance into the same
              workflow.
            </p>
            <div className="hero-actions">
              <a className="button" href="#work">
                View My Work <span aria-hidden="true">↗</span>
              </a>
              <a className="secondary-action" href="#contact">
                Let’s Talk <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div className="hero-portrait">
            <img
              src="/images/jan-christopher-buen.jpg"
              alt="Jan Christopher Buen"
              width="720"
              height="1008"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </section>
        <ClientWork />
        <Services />
        <section
          id="projects"
          className="work section"
          tabIndex="-1"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow section-label">Full-stack projects</p>
              <h2 id="work-title">
                Built to learn.
                <br />
                Made to be explored.
              </h2>
            </div>
            <p>
              Personal and curriculum projects from The Odin Project. A closer
              look at application logic, data models, and usable interfaces.
            </p>
          </div>
          <div className="projects">
            {projects.map((project, index) => (
              <Project key={project.id} project={project} index={index} />
            ))}
          </div>
          <p className="demo-note">
            Learning demos use free hosting. APIs may take about a minute to
            wake; provider limits can affect availability.
          </p>
          <a className="text-link all-work" href={profileUrl}>
            More work on GitHub <span aria-hidden="true">↗</span>
          </a>
        </section>
        <Stack />
        <div className="about-experience section">
          <About />
          <Experience />
        </div>
        <Credentials />
        <Contact />
      </main>
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Jan Christopher Buen</p>
        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href={profileUrl}>
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a href={`${profileUrl}/personal-portfolio`}>
            Source code <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </footer>
    </>
  )
}
