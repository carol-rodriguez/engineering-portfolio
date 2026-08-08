# Your Name — Astro Portfolio

A 6-page portfolio (About, Projects, Research, Experience, Resume, Contact)
built with [Astro](https://astro.build), styled like an engineering drawing
sheet: title-block navigation, dimension-line dividers, blueprint grid
background.

Projects, research, and experience are **content collections** — each item
is its own Markdown file under `src/content/`. Add a new project by adding
a new `.md` file; you don't need to touch any page or component code.

## Project structure

```
src/
├── content/
│   ├── projects/       # one .md file per project
│   ├── research/       # one .md file per research item / publication
│   ├── experience/     # one .md file per job / leadership role
│   └── config.ts       # defines the fields (frontmatter) each collection accepts
├── components/          # ItemCard, CVEntry, DimDivider — reused across pages
├── layouts/
│   └── BaseLayout.astro # shared header (nav) + footer for every page
├── pages/
│   ├── index.astro      # About (home)
│   ├── projects.astro   # Projects list (+ filters)
│   ├── projects/[slug].astro   # auto-generated detail page per project
│   ├── research.astro
│   ├── research/[slug].astro
│   ├── experience.astro
│   ├── resume.astro
│   └── contact.astro
└── styles/global.css    # the whole design system (colors, type, components)
public/assets/           # put your CV PDF and any images here
```

## Running it locally

You'll need [Node.js](https://nodejs.org) 18+ installed. Then, in a
terminal, inside this folder:

```bash
npm install      # one-time setup — installs Astro
npm run dev      # starts a local preview at http://localhost:4321
```

Edit any file under `src/` and the preview updates automatically.

```bash
npm run build    # builds the static site into dist/
npm run preview  # preview the built version
```

## Adding a new project / research item / experience entry

Copy an existing file in `src/content/projects/` (or `research/` /
`experience/`), rename it, and edit the frontmatter fields between the
`---` lines at the top, plus the write-up text below it. The field names
and allowed values are defined in `src/content/config.ts` — Astro will
show a clear error if you typo a field or leave a required one out.

## Personalizing

1. **Name & links** — edit `src/layouts/BaseLayout.astro` (header/footer)
   and `astro.config.mjs` (the `site` URL).
2. **About page** — `src/pages/index.astro`.
3. **Resume / Contact** — `src/pages/resume.astro`, `src/pages/contact.astro`.
4. **CV PDF** — export your resume as a PDF, name it `your-name-cv.pdf`,
   and put it in `public/assets/`.

## Publishing to GitHub Pages (via GitHub Actions)

Astro needs a build step, so publishing works a little differently than a
plain HTML site — GitHub builds it for you automatically on every push.

1. Create a free GitHub account, then a new **public** repository named
   exactly `your-username.github.io`.
2. Upload this whole folder to the repository (see the step-by-step guide
   your assistant gave you in chat — same idea, but this time also
   include the `.github` folder, which contains the build instructions).
3. In the repo, go to **Settings → Pages**, and under "Build and
   deployment → Source", choose **GitHub Actions** (not "Deploy from a
   branch" — that option is for plain HTML sites).
4. Push/upload a change and check the **Actions** tab — you'll see a
   workflow run that builds and deploys the site. When it finishes
   (green checkmark), your site is live at `https://your-username.github.io`.
5. Every future push to `main` re-builds and re-publishes automatically.
