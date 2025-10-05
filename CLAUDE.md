# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Next.js 14 portfolio website deployed to Netlify. Built with TypeScript, React, and Tailwind CSS. The site is a single-page application with section-based navigation.

## Development Commands

```bash
# Development server (runs on http://localhost:3000)
yarn dev

# Build for production
yarn build

# Start production server
yarn start

# Build and export static site
yarn export
```

## Architecture

### Component Structure

- **pages/index.tsx**: Main application entry point that composes all sections
- **pages/_app.tsx**: Minimal Next.js app wrapper with no global state
- **components/**: Top-level section components (Navigation, Hero, About, FeaturedWork, Contact, Footer)
- **components/ui/**: Radix UI component library with shadcn/ui patterns
- **components/figma/**: Custom components for Figma integration

### Styling System

Uses Tailwind CSS with custom design tokens defined in `pages/globals.css`:
- CSS custom properties for colors, spacing, and typography
- Dark mode support via `.dark` class
- Design tokens prefixed with `--` (e.g., `--primary`, `--radius`)
- Base typography styles for semantic HTML elements

UI components use `cn()` utility (from `components/ui/utils.ts`) to merge Tailwind classes with class-variance-authority (cva) for variant-based styling.

### Path Aliases

TypeScript paths configured in `tsconfig.json`:
- `@components/*` → `./components/*`
- `@styles/*` → `./styles/*`

### Deployment

Configured for Netlify with `@netlify/plugin-nextjs`:
- Build command: `npm run build`
- Publish directory: `.next`
- Configuration in `netlify.toml`

## Package Manager

Project uses Yarn 1.22.22 (specified in `package.json`). Use `yarn` instead of `npm`.
