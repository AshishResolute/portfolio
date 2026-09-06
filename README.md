# Portfolio

My personal developer portfolio — built to showcase backend projects, skills, and how to get in touch.

**Live site:** [portfolio-seven-theta-gr81z8gaqt.vercel.app](https://portfolio-seven-theta-gr81z8gaqt.vercel.app/)

## Overview

A developer portfolio designed around a backend-developer identity — the hero section mimics a live API request/response instead of a headshot, and that same dark, code-inspired visual language (terminal cards, tech tags, monospace touches) carries through every section and page.

The homepage is a single scrollable page (Home / Projects / About / Contact), and each project links out to its own dedicated detail page with a deeper technical write-up.

Sections:
- **Home** — intro + a styled mock `POST /api/auth/login` request/response card
- **Projects** — a responsive grid of project cards (icon, description, tech tags), each linking to its own detail page
- **About** — background, quick stats, and a categorized skills list (Backend / Auth & Security / Also using), plus a resume link
- **Contact** — direct contact links (email, GitHub, LinkedIn) alongside a working contact form

Each **project detail page** (`/project/:slug`) includes:
- Overview and key features
- An architecture flow diagram
- A realistic terminal-style request/response card specific to that project (e.g. a rate-limit response for BankAPI, a resource-created response for Job Tracker)
- A "Tech Decisions" section explaining *why* specific choices were made, not just what was used
- Links to the GitHub repo (and live API docs, where available)

## Tech Stack

- **React** (Vite)
- **React Router** for client-side routing between the homepage and project detail pages
- **Tailwind CSS**
- **react-icons** for iconography
- **Sora** font
- **Formspree** for contact form submissions
- Deployed on **Vercel**

## Features

- Hero section styled as a live-looking API call/response, in place of a traditional profile photo
- Reusable `ProjectCard` component driven by a `projects` data array — no hardcoded/duplicated card markup
- Dedicated, dynamically-routed detail page per project (`/project/bankapi`, `/project/socialbuzz`, `/project/job-tracker`), each rendering from the same data array and page template
- Whole project cards are clickable (not just an icon), with hover lift + shadow for clear affordance
- About section with categorized skill tags and quick stats (experience, projects shipped, location)
- Working contact form (via Formspree) alongside direct contact links
- Smooth-scrolling in-page navigation on the homepage, with scroll offset to account for the fixed navbar
- Fully responsive — tested and fixed down to 300-350px wide screens (stat rows, project card tags, contact chips, and the Tech Decisions grid all adapt independently of content length)
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
    ProjectDetailPage.jsx
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
- [x] Individual project detail pages
- [ ] Custom domain

## Contact

- GitHub: [AshishResolute](https://github.com/AshishResolute)
- Email: ashishresolute@gmail.com
