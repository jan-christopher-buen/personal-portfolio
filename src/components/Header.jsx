import { useEffect, useRef, useState } from 'react'

const links = [
  ['work', 'Work'],
  ['services', 'Services'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['about', 'About'],
  ['credentials', 'Credentials'],
  ['contact', 'Let’s Talk'],
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const toggle = useRef(null)

  useEffect(() => {
    function escape(event) {
      if (event.key === 'Escape' && open) {
        setOpen(false)
        toggle.current?.focus()
      }
    }
    document.addEventListener('keydown', escape)
    return () => document.removeEventListener('keydown', escape)
  }, [open])

  useEffect(() => {
    let frame
    function update() {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const current = [
          'work',
          'services',
          'projects',
          'skills',
          'about',
          'experience',
          'credentials',
          'contact',
        ]
          .filter(
            (id) =>
              document.getElementById(id)?.getBoundingClientRect().top <= 160,
          )
          .at(-1)
        const atEnd =
          window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight - 4
        const section = current === 'experience' ? 'about' : current
        setActive(atEnd ? 'contact' : section || '')
      })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => {
      window.removeEventListener('scroll', update)
      cancelAnimationFrame(frame)
    }
  }, [])

  function navigate(id) {
    setOpen(false)
    setActive(id)
    requestAnimationFrame(() =>
      document.getElementById(id)?.focus({ preventScroll: true }),
    )
  }

  return (
    <header
      className="header"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false)
      }}
    >
      <div className="header-inner">
        <a
          className="wordmark"
          href="#top"
          aria-label="Jan Christopher Buen — back to top"
        >
          <img
            src="/images/jcb-logo.svg"
            width="88"
            height="32"
            alt=""
            aria-hidden="true"
          />
          <span>Jan Christopher Buen</span>
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? 'Close' : 'Menu'}{' '}
          <span aria-hidden="true">{open ? '−' : '+'}</span>
        </button>
        <nav
          id="main-nav"
          className={open ? 'navigation is-open' : 'navigation'}
          aria-label="Main navigation"
        >
          {links.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={id === 'contact' ? 'button nav-contact' : undefined}
              aria-current={active === id ? 'location' : undefined}
              onClick={() => navigate(id)}
            >
              {label}
              {id === 'contact' && <span aria-hidden="true">↗</span>}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
