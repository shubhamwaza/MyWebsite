# Shubham Waza — Portfolio (Static HTML Version)

No Node, no npm, no build step. Pure HTML, CSS, and vanilla JavaScript — just open it in a browser.

## How to run it

**Easiest:** double-click `index.html`. It opens directly in your default browser and the whole site works — navigation, the Work filter, case studies, the contact form, everything.

**Slightly better (recommended once you're editing content):** serve it locally so relative links behave exactly like a real deployed site:
- VS Code: install the free "Live Server" extension, right-click `index.html` → "Open with Live Server"
- Or, with Python installed: `python3 -m http.server 8000` from this folder, then open `http://localhost:8000`

Either way works — double-clicking is simplest to just look at it right now.

## Structure

```
index.html          Home
about.html           About
work.html            Work index with category filters
work/case-study.html Case study template (reads ?slug=... and renders from data.js)
services.html        Services
resume.html          Resume
blog.html            Blog index
blog/post.html       Blog post template (reads ?slug=...)
contact.html         Contact form
404.html             Custom not-found page
css/style.css        All design tokens, layout, and component styles
js/data.js           Your content — projects, clients, blog posts. Edit this to update the site.
js/main.js           Shared behavior: nav, mobile menu, scroll reveal animations
images/              Placeholder SVGs — swap these for real photos/logos
```

## Adding or editing a project

Open `js/data.js` and edit the `PROJECTS` array. Each project needs a unique `slug` — that's what builds its URL (`work/case-study.html?slug=your-slug`) and its case study is generated automatically from the same `caseStudy` array (Overview, Problem, Goals, Research, Process, Design Decisions, Final Solution, Results, Learnings — include only the ones relevant to that project).

Same pattern for clients (`CLIENTS` array) and blog posts (`POSTS` array).

## Swapping in real images

Every image reference in `js/data.js` points to a placeholder SVG in `images/`. Replace the files in place (keep the same filenames) or update the paths in `data.js` to point to your own images/CDN URLs — no other code changes needed.

## Fonts

Cabinet Grotesk + General Sans load from Fontshare's CDN, Inter loads from Google Fonts — both linked in the `<head>` of every page. This needs an internet connection to render the exact typefaces; offline, it'll gracefully fall back to your system's default sans-serif.

## The contact form

It's UI-only right now — submitting shows a "Message sent" confirmation but doesn't actually send anything anywhere. To make it functional, either:
- Point the form at a free service like [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com) (just add their action URL), or
- Add a small backend/serverless function later if you outgrow that.

## Moving to Next.js later

If you eventually want the React/Next.js version (better for SEO metadata per page, image optimization, and a real CMS integration), I already built that version too — this HTML version mirrors its structure closely so migrating content over is straightforward.
