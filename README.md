# Portfolio

My personal developer portfolio — built to showcase backend projects, skills, and how to get in touch.

**Live site:** [portfolio-vercel.app](https://portfolio-seven-theta-gr81z8gaqt.vercel.app/)

## Overview

A single-page portfolio site designed around a backend-developer identity — the hero section mimics a live API request/response instead of a headshot, and every section (Projects, About, Contact) carries that same dark, code-inspired visual language.

Sections:
- **Home** — intro + a styled mock `POST /api/auth/login` request/response card
- **Projects** — a responsive grid of project cards (icon, description, tech tags, GitHub link), driven entirely by a data array
- **About** — background, quick stats, and a categorized skills list (Backend / Auth & Security / Also using), plus a resume link
- **Contact** — direct contact links (email, GitHub, LinkedIn) alongside a working contact form

## Tech Stack

- **React** (Vite)
- **Tailwind CSS**
- **react-icons** for iconography
- **Sora** font
- **Formspree** for contact form submissions
- Deployed on **Vercel**

## Features

- Hero section styled as a live-looking API call/response, in place of a traditional profile photo
- Reusable `ProjectCard` component driven by a `projects` data array (icon, title, description, tech tags, GitHub link) — no hardcoded/duplicated card markup
- Whole project cards are clickable (not just an icon), with hover lift + shadow for clear affordance
- About section with categorized skill tags and quick stats (experience, projects shipped, location)
- Working contact form (via Formspree) alongside direct contact links
- Smooth-scrolling in-page navigation (Home / Projects / About / Contact) with scroll offset to account for the fixed navbar
- Fully responsive — tested and fixed down to 300-350px wide screens (stat rows, project card tags, and contact chips all adapt independently of content length)
- Clean, minimal dark theme throughout

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/AshishResolute/portfolio.git
cd portfolio
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Project Structure

```
src/
  components/
    NavBar.jsx
    ProjectCard.jsx
    About.jsx
    Contact.jsx
  data/
    projects.data.js
  App.jsx
  main.jsx
public/
  Resume.pdf
```

> Static assets referenced directly by URL (like `Resume.pdf`) live in `public/` and are served from the site root (e.g. `/Resume.pdf`) — not `/public/Resume.pdf`.

## Roadmap

- [x] About section
- [x] Contact section / form
- [x] Tech tag badges on project cards
- [ ] Individual project detail pages
- [ ] Custom domain

## Contact

- GitHub: [AshishResolute](https://github.com/AshishResolute)
- Email: ashishresolute@gmail.com
