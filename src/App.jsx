import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Project from './components/Project.jsx'
import ClientWork from './components/ClientWork.jsx'
import Services from './components/Services.jsx'
import Stack from './components/Stack.jsx'
import Credentials from './components/Credentials.jsx'
import { profileUrl, projects } from './data/projects.js'

function About() {
  return (
    <section
      id="about"
      className="about section"
      tabIndex="-1"
      aria-labelledby="about-title"
    >
      <div>
        <p className="eyebrow section-label">05 / About & experience</p>
        <h2 id="about-title">
          Careful with the details.
          <br />
          Curious about the whole.
        </h2>
        <p className="about-intro">
          I’m Jan Christopher Buen, a web developer working across WordPress
          websites, full-stack JavaScript projects, and technical SEO.
        </p>
      </div>
      <div className="about-copy">
        <div className="experience">
          <p className="eyebrow">Current experience</p>
          <h3>Web Developer &amp; SEO Specialist</h3>
          <p>Ironclad Sites &amp; affiliated businesses</p>
          <p className="experience-details">
            Part-time · Remote
            <br />
            <time dateTime="2026-03">March 2026</time>–Present
          </p>
        </div>
        <p>
          My client work includes building and customizing WordPress websites,
          maintaining them, and managing hosting. I work with PHP, custom child
          themes, ACF, WooCommerce, and custom plugins to make content
          manageable and support business needs.
        </p>
        <p>
          Alongside that work, I build personal applications with React,
          Express, and PostgreSQL. My engineering and QA background informs a
          careful approach to troubleshooting, checking behavior, and
          documenting decisions.
        </p>
        <p>
          I value useful interfaces, recoverable errors, and clear data
          boundaries. Each project is an opportunity to understand how those
          pieces work together.
        </p>
      </div>
    </section>
  )
}

export default function App() {
  useEffect(() => {
    if (
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
      return
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-enter')
            observer.unobserve(entry.target)
          }
        }),
      { threshold: 0.06 },
    )
    document
      .querySelectorAll('.section')
      .forEach((section) => observer.observe(section))
    return () => observer.disconnect()
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
          <div className="hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="identity-line" aria-hidden="true" />
                Jan Christopher Buen / Web Developer
              </p>
              <h1 id="intro-title">
                Useful websites.
                <br />
                <span>Thoughtful</span>
                <br />
                implementation.
              </h1>
              <p className="hero-description">
                I build full-stack JavaScript applications and WordPress
                websites, bringing technical SEO and careful site maintenance
                into the same workflow.
              </p>
              <div className="hero-actions">
                <a className="button" href="#work">
                  View My Work <span aria-hidden="true">↗</span>
                </a>
                <a className="secondary-action" href="#contact">
                  Let’s Talk <span aria-hidden="true">↗</span>
                </a>
              </div>
              <p className="hero-caption">
                Client websites. Personal applications. Continuous learning.
              </p>
            </div>
            <figure className="hero-portrait">
              <div className="portrait-frame">
                <img
                  src="/images/jan-christopher-buen.jpg"
                  alt="Jan Christopher Buen"
                  width="720"
                  height="1008"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
              <figcaption>
                <span>Jan Christopher Buen</span>
                <span>Web Developer</span>
              </figcaption>
            </figure>
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
              <p className="eyebrow section-label">03 / Full-stack projects</p>
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
        <About />
        <Credentials />
        <section
          id="contact"
          className="contact section"
          tabIndex="-1"
          aria-labelledby="contact-title"
        >
          <p className="eyebrow section-label">07 / Contact</p>
          <div className="contact-row">
            <div>
              <h2 id="contact-title">
                Have a website in mind?
                <br />
                <span>Let’s talk.</span>
              </h2>
              <p>
                For client projects, developer opportunities, or a conversation
                about the work.
              </p>
            </div>
            <div className="contact-options">
              <a className="button" href="mailto:buenjanchristopher@gmail.com">
                Send me an email <span aria-hidden="true">↗</span>
              </a>
              <a
                className="contact-address"
                href="mailto:buenjanchristopher@gmail.com"
              >
                buenjanchristopher@gmail.com
              </a>
              <a href={profileUrl}>
                Find me on GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <a href="#top">
          Jan Christopher Buen <span aria-hidden="true">↑</span>
        </a>
        <p>Built with React, care, and curiosity.</p>
        <a href={`${profileUrl}/personal-portfolio`}>
          Site source <span aria-hidden="true">↗</span>
        </a>
      </footer>
    </>
  )
}
