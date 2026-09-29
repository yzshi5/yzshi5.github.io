# Yaozhong Shi Academic Website

Built with [Astro](https://astro.build/) and deployed to GitHub Pages with GitHub Actions.

Requires Node.js 22.12 or newer (Node.js 24 LTS is used in deployment).

## Development

```bash
npm install
npm run dev
```

Astro prints the local URL after the development server starts (normally `http://localhost:4321/`).

## Production build

```bash
npm run build
npm run preview
```

## Updating content

- Publications, selected-paper links, and figure paths: `src/data/publications.ts`
- News: `src/data/news.ts`
- Biography, research focus, contact links, and profile details: `src/data/site.ts`
- Profile image: `public/images/profile/profile.jpg`
- Publication figures: `public/images/publications/`
- CV: `public/cv/Yaozhong_Shi_CV.pdf`

## Deployment

Pushing `main` runs `.github/workflows/deploy.yml`. In the GitHub repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.
