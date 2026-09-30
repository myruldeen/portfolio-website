# deno solution

Marketing site for **deno solution** — a solo software studio building custom websites, web applications and mobile apps. Built with [Astro](https://astro.build), with a few interactive islands (nav, back-to-top, PWA install prompt) powered by Vue, styled with Tailwind CSS, and installable as a PWA.

## Commands

```sh
npm install
npm run dev        # dev server with hot reload
npm run build      # production build to dist/
npm run preview    # serve the production build locally
npm run lint       # eslint --fix
npm run format     # prettier --write src/
```

## Brand & logo

The accent colour is the logo blue `#0060c0`, exposed as the `brand` scale in
`tailwind.config.js`. Use the right shade for the job:

- **`brand-500`** — solid fills only (buttons, ribbons). Always pair with `text-white`;
  the logo blue is too dark for dark text (3.2:1).
- **`brand-300`** — accent text, icons and links on dark surfaces (7.6:1).
- **`brand-400`** — hover states and small accents (4.9:1).

Logo assets are derived from `src/assets/company-logo.png` (a white-background PNG) and
are already background-removed with the internal white details preserved:

- `logo-mark.png` — icon only, used in the navbar (204px wide, 21KB)
- `logo-full.png` — full stacked lockup, used in the footer (optimised to 8KB webp)

To re-derive them from a new logo file, remove the connected background rather than
keying out white globally, otherwise the white details inside the artwork disappear.

## Editing content

All site copy, services, process steps, case studies, pricing models, FAQs and SEO
metadata live in **`src/data/site.js`**. Edit that one file to change the content of
every section — no need to touch component markup.

Update `site.url` and `site.socials` in that file before deploying, since they feed the
canonical URL, Open Graph tags and JSON-LD structured data.

## Structure

```
src/
├── data/site.js              # all site content + brand config
├── layouts/Layout.astro      # HTML shell, fonts, SEO/OG/JSON-LD, PWA meta
├── pages/index.astro         # section order
├── components/
│   ├── HeroSection.astro     # headline + value props
│   ├── ServicesSection.astro # what can be built
│   ├── ProcessSection.astro  # 6-step workflow
│   ├── WorkSection.astro     # case studies
│   ├── ProjectCard.astro     # shared case study card (featured + compact)
│   ├── PricingSection.astro  # engagement models, quote-based
│   ├── AboutSection.astro    # credibility + differentiators
│   ├── FaqSection.astro      # native <details> accordion, no JS
│   ├── ContactSection.astro  # quote request form (mailto) + direct links
│   ├── FooterSection.astro
│   ├── NavBar.vue            # active-section tracking, scroll state
│   ├── BackToTopButton.vue
│   └── PWAInstallPrompt.vue
├── pwa.js                    # service worker registration + update toast
└── style.css                 # Tailwind entry
```

## Contact form

`ContactSection.astro` validates client-side then composes a pre-filled `mailto:` link,
so the form works on a purely static host with no backend. To switch to a hosted form
service, replace the `window.location.href = ...` block with a `fetch()` POST to your
endpoint.

## Deployment

`Dockerfile` and `docker-compose.yml` are included: the `portfolio` service builds the
static site and serves it via nginx (see `nginx.conf`); the `dev` service runs
`astro dev` in a container for local development.
