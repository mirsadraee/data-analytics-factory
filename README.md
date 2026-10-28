# React Deployment Test

A small React + Vite website for testing a public deployment.

## Run locally

Requires Node.js (LTS).

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Test a production build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. Import that repository at https://vercel.com/new.
3. Keep the default Vite settings, or use:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click Deploy.

This demo is a frontend-only static React application. It does not require a backend.
