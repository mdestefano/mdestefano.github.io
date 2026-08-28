# mdestefano.github.io

Sito personale di Manuel De Stefano — [mdestefano.github.io](https://mdestefano.github.io).

Astro, pagina singola. Build in CI e deploy su GitHub Pages.

## Sviluppo

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Deploy

Push su `master` → workflow `.github/workflows/deploy.yml` builda con Astro e pubblica su GitHub Pages.

Richiede una volta sola: repo **Settings → Pages → Source = GitHub Actions**.

## Contenuti

Testi e link stanno nel frontmatter di `src/pages/index.astro`. Foto profilo: `public/foto-profilo.png`.
