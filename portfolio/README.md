# Portfolio

My personal developer portfolio — built to showcase backend projects, skills, and how to get in touch.

**Live site:** [portfolio-8z5j.vercel.app](https://portfolio-8z5j.vercel.app/)

## Overview

A single-page portfolio site with a hero section styled like a mock API request/response, a projects grid, and (in progress) an about and contact section.

## Tech Stack

- **React** (Vite)
- **react-icons** for iconography
- **Sora** font
- Deployed on **Vercel**

## Features

- Hero section with a live-looking API call/response code card
- Reusable `ProjectCard` component driven by a projects data array (icon, title, description, tech tags)
- Responsive layout
- Clean, minimal dark theme

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
    main.jsx
    NavBar.jsx
    ProjectCard.jsx
  data/
    projects.js
  App.jsx
  main.jsx
```

## Roadmap

- [ ] About section
- [ ] Contact section / form
- [ ] Individual project detail pages
- [ ] Tech tag badges on project cards
- [ ] Custom domain

## Contact

- GitHub: [AshishResolute](https://github.com/AshishResolute)
- Email: ashishresolute@gmail.com
