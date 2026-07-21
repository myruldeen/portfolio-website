# Portfolio Website

Personal portfolio for Muhammad Amirul — an IT Support Analyst building IoT, software, and hardware solutions. Built with [Astro](https://astro.build), with a couple of interactive islands (nav, back-to-top button, PWA install prompt) powered by Vue, styled with Tailwind CSS, and installable as a PWA.

## Project Setup

```sh
npm install
```

### Develop (with hot reload)

```sh
npm run dev
```

### Build for production

```sh
npm run build
```

### Preview the production build locally

```sh
npm run preview
```

### Lint / format

```sh
npm run lint
npm run format
```

## Deployment

A `Dockerfile` and `docker-compose.yml` are included: the `portfolio` service builds the static site and serves it via nginx (see `nginx.conf`); the `dev` service runs `astro dev` in a container for local development.
