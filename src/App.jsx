import { useEffect } from 'react'
import Header from './components/Header.jsx'
import HeroPortrait from './components/HeroPortrait.jsx'
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
        <a
          className="text-link"
          href="/jan-christopher-buen-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View resume (PDF, opens in a new tab)"
        >
          View resume <span aria-hidden="true">↗</span>
        </a>
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
              Open to projects &amp; work opportunities
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
              <a
                className="secondary-action"
                href="/jan-christopher-buen-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View resume (PDF, opens in a new tab)"
              >
                View resume <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <HeroPortrait />
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
        <div className="footer-top">
          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#work">Work</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#about">About</a>
            <a href="#credentials">Credentials</a>
          </nav>
          <div className="footer-socials">
            <a href={profileUrl} aria-label="GitHub" title="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.68.08-.68 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.15a10.8 10.8 0 0 1 5.62 0c2.15-1.46 3.09-1.15 3.09-1.15.61 1.55.23 2.7.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.32-2.63 5.27-5.14 5.55.4.35.76 1.03.76 2.08v3.1c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/jan-christopher-buen-24715117a/"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.4-.76 1.36-1.56 2.79-1.56 2.99 0 3.58 1.97 3.58 4.53v5.28Z" />
              </svg>
            </a>
            <a
              href="mailto:buenjanchristopher@gmail.com"
              aria-label="Send an email"
              title="Email"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 6 9 7 9-7" />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-branding">
            <a href="#top" aria-label="Jan Christopher Buen — back to top">
              <img
                src="/images/jcb-logo.svg"
                width="66"
                height="24"
                alt=""
                aria-hidden="true"
              />
            </a>
            <p>© {new Date().getFullYear()} Jan Christopher Buen</p>
          </div>
          <a href={`${profileUrl}/personal-portfolio`}>
            Source code <span aria-hidden="true">↗</span>
          </a>
        </div>
      </footer>
    </>
  )
}
