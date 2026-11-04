import Project from './components/Project.jsx'
import { profileUrl, projects } from './data/projects.js'

function Header() {
  return (
    <header className="header">
      <a
        className="wordmark"
        href="#top"
        aria-label="Jan Christopher Buen — back to top"
      >
        jcb<span>.</span>
      </a>
      <nav aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">
          Contact <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  )
}

function About() {
  return (
    <section id="about" className="about section" aria-labelledby="about-title">
      <div>
        <p className="eyebrow section-label">02 / A little context</p>
        <h2 id="about-title">
          Curious about the
          <br />
          whole picture.
        </h2>
      </div>
      <div className="about-copy">
        <p className="large-copy">
          I’m Jan Christopher Buen, a junior full-stack developer building with
          JavaScript, from the interface to the database.
        </p>
        <p>
          Through The Odin Project, I’ve built personal projects that connect
          React interfaces to Express APIs and PostgreSQL. My work explores how
          data models, access rules, and everyday interactions fit together.
        </p>
        <p>
          I care about the details that make an app understandable: clear
          feedback, recoverable errors, deliberate data boundaries, and
          documentation that explains the decisions.
        </p>
        <div className="skills">
          <h3>Tools put into practice</h3>
          <dl>
            <div>
              <dt>Interface</dt>
              <dd>JavaScript · React · HTML · CSS</dd>
            </div>
            <div>
              <dt>Server & data</dt>
              <dd>Node.js · Express · Prisma · PostgreSQL</dd>
            </div>
            <div>
              <dt>Workflow</dt>
              <dd>Git · npm · Vite · ESLint · Prettier</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div id="top" />
      <Header />
      <main id="main" tabIndex="-1">
        <section className="hero" aria-labelledby="intro-title">
          <div className="hero-topline">
            <p className="eyebrow">Jan Christopher Buen</p>
            <p className="eyebrow hero-role">Junior Full-Stack Developer</p>
          </div>
          <h1 id="intro-title">
            Thoughtful interfaces.
            <br />
            <span>Solid foundations.</span>
          </h1>
          <div className="hero-bottom">
            <p>
              I build full-stack JavaScript projects that connect useful
              interfaces with the logic and data behind them.
            </p>
            <a className="button" href="#work">
              Explore my work <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-footnote">
            <span>React / Node.js / PostgreSQL</span>
            <span aria-hidden="true">
              From first interaction to final query.
            </span>
          </div>
        </section>
        <section
          id="work"
          className="work section"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow section-label">01 / Selected work</p>
              <h2 id="work-title">
                Built to learn.
                <br />
                Made to be explored.
              </h2>
            </div>
            <p>
              Four personal projects from The Odin Project. Each one is a
              different exercise in turning an idea into a working application.
            </p>
          </div>
          <p className="demo-note">
            <span aria-hidden="true">↳</span> These learning demos use free
            hosting. Their APIs may take about a minute to wake, and provider
            limits can affect availability.
          </p>
          <div className="projects">
            {projects.map((project, index) => (
              <Project key={project.id} project={project} index={index} />
            ))}
          </div>
          <a className="text-link all-work" href={profileUrl}>
            More experiments on GitHub <span aria-hidden="true">↗</span>
          </a>
        </section>
        <About />
        <section
          id="contact"
          className="contact section"
          aria-labelledby="contact-title"
        >
          <p className="eyebrow">03 / Keep in touch</p>
          <div className="contact-row">
            <h2 id="contact-title">
              Let’s talk
              <br />
              <span>about the work.</span>
            </h2>
            <div className="contact-options">
              <a
                className="contact-link"
                href="mailto:buenjanchristopher@gmail.com"
              >
                Send me an email <span aria-hidden="true">↗</span>
              </a>
              <span className="contact-address">
                buenjanchristopher@gmail.com
              </span>
              <a className="github-contact" href={profileUrl}>
                Find me on GitHub <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <p>
            Explore the code, follow what I’m building, or leave feedback on a
            project.
          </p>
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
