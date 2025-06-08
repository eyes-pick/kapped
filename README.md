# Kapped

Kapped is a small Next.js and Tailwind CSS application showcasing a collection of reusable UI components. The goal is to provide a clean starting point for experimenting with React components while keeping the project structure lightweight.

## Folder overview

```
src/
  app/          - entry pages and layout files
  components/   - reusable UI components
  hooks/        - custom React hooks
  lib/          - small utilities
public/         - static files served by Next.js
```

TypeScript is configured with the alias `@/` pointing to `src/`. You can import any file under `src` using this prefix, for example `import Button from '@/components/ui/button'`.

## Installation

Install dependencies once after cloning the repository:

```bash
npm install
```

## Development

Start the development server with:

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser. The page reloads as you edit source files.

