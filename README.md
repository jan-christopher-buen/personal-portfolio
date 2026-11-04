# Jan Christopher Buen — Developer Portfolio

A personal portfolio for hiring managers, developers, and anyone who wants to explore my work as a junior full-stack developer. It introduces what I build, explains a few engineering decisions, and links directly to the projects and their source.

I built this website for [The Odin Project’s personal website assignment](https://www.theodinproject.com/lessons/node-path-getting-hired-building-your-personal-website), to bring my learning projects together in one clear, approachable place.

![The portfolio’s introduction and selected work on a desktop screen](docs/portfolio-desktop.webp)

[Visit the live portfolio](https://janchristopherbuen.vercel.app/)

## What you can explore

- An introduction, four selected projects, a short about section, demonstrated skills, and my GitHub profile.
- **Commonroom:** social feeds, directed follows, posts, likes, and comments.
- **Midnight Market:** an illustrated search game with keyboard controls and server-owned scoring.
- **Signal Post:** private one-to-one messaging with manual refresh and draft handling.
- **Folio:** private folders, file uploads, downloads, and ownership checks.
- Real screenshots of each project’s public page, technology lists, and concise notes about implementation decisions.
- Responsive layouts, semantic sections, skip navigation, visible keyboard focus, and reduced-motion support.

These are personal learning projects, not commercial products. Their free-hosted APIs may need about a minute to wake after inactivity. Provider quotas can also affect availability. Follow each source link for setup instructions and limitations.

## Stack

React, Vite, JavaScript, HTML, and plain CSS. ESLint checks the source and Prettier applies single quotes with no semicolons. There is no backend, database, analytics, or contact form for this website.

## Run locally

Use **Node.js 24 LTS** and npm. From the repository directory:

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite. No environment variables or credentials are required.

| Command                | Purpose                                  |
| ---------------------- | ---------------------------------------- |
| `npm run dev`          | Start the development server             |
| `npm run build`        | Create the production website in `dist/` |
| `npm run preview`      | Preview the production build locally     |
| `npm run lint`         | Check JavaScript and React rules         |
| `npm run format`       | Format source and documentation          |
| `npm run format:check` | Check formatting without changing files  |

To preview a release build, run `npm run build` followed by `npm run preview`.

## Structure and customization

```text
src/App.jsx                 Page sections and navigation
src/components/Project.jsx  Reusable project presentation
src/data/projects.js        Project copy, technology lists, and links
src/styles.css              Layout, typography, colors, responsive rules
public/images/              Optimized screenshots of the actual projects
docs/                       Screenshot of the completed portfolio
index.html                  Page title, description, and social metadata
```

Edit `src/data/projects.js` to update a project. Replace its screenshot in `public/images/` and keep its alternative text and dimensions accurate. Update the introduction, about text, and contact profile in `src/App.jsx`. The GitHub profile URL is centralized in the data module. Color variables and responsive styles live in `src/styles.css`.

The contact section includes my approved email address and verified GitHub profile. No résumé is published. The page uses the confirmed production URL for canonical and Open Graph URL metadata. No social image is configured.

## Assets and references

The monogram favicon and visual identity were created for this portfolio. Project images are actual browser captures of my own applications’ public landing/sign-in pages; they do not include private conversations or account data. Midnight Market’s original illustration is covered by [its repository’s MIT license](https://github.com/jan-christopher-buen/odin-wheres-waldo). Screenshots are optimized to WebP.

Typography uses [DM Sans](https://fonts.google.com/specimen/DM+Sans) and [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk), available under the SIL Open Font License and loaded from Google Fonts with system-font fallbacks. Font delivery requires an internet connection; the page remains usable without it.

The assignment’s [Forbes article](https://www.forbes.com/sites/jacquelynsmith/2013/04/26/why-every-job-seeker-should-have-a-personal-website-and-what-it-should-include/) informed the focus on identity, relevant work, and clear contact links. [Write the Docs](https://www.writethedocs.org/guide/writing/beginners-guide-to-docs/) informed this README’s purpose, setup, and customization guidance.

Design research included [Brittany Chiang](https://brittanychiang.com/) for clear project evidence, [Josh W. Comeau](https://www.joshwcomeau.com/) for readable content hierarchy, and [Adham Dannaway](https://www.adhamdannaway.com/) for direct work/about/contact navigation. This portfolio uses its own layout, copy, and visual identity.

## Hosting

Hosted on Vercel’s free Hobby plan at [janchristopherbuen.vercel.app](https://janchristopherbuen.vercel.app/).

The project uses the repository root, the Vite preset, Node.js **24.x**, install command **`npm ci`**, build command **`npm run build`**, and output directory **`dist`**. No environment variables or SPA routing rewrites are required. The production branch is `main`.

The canonical and Open Graph URLs in `index.html` point to the live portfolio. If the production domain changes, update both metadata URLs and the links in this README. Add a social image only when an actual hosted image is available.

## Feedback

Browse more work on [my GitHub profile](https://github.com/jan-christopher-buen) or [open an issue](https://github.com/jan-christopher-buen/personal-portfolio/issues) with a clear description of a problem or suggestion.
