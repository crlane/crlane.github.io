# crlane.github.io

Personal landing page built with SvelteKit 2 and Svelte 5, deployed to GitHub Pages.

## Development

Requires Node 22 (see `.tool-versions`).

```bash
npm install
npm run dev
```

## Building

Static site generated with `@sveltejs/adapter-static`:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

Deploys automatically to GitHub Pages on push to `main` via GitHub Actions.

The workflow builds the site and deploys using `actions/deploy-pages`. Requires the GitHub Pages source to be set to **GitHub Actions** in repo settings (Settings > Pages > Source).

The `github-pages` environment must allow deployments from the `main` branch.

## Type Checking

```bash
npm run check
```
