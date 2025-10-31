# Repository Guidelines

## Project Structure & Module Organization
The Next.js App Router lives in `app/`. `page.tsx` defines the default route and should stay lean; extract UI units into components under `app/(components)/` when they grow. `layout.tsx` manages shared metadata and wrappers. Global styles reside in `app/globals.css` and should only host resets and design tokens. Static assets belong in `public/` and are referenced via `/asset.png`. Root-level configs (`next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `postcss.config.mjs`) configure build, TypeScript, linting, and Tailwind. Avoid adding source files to the repository root.

## Build, Test, and Development Commands
Install dependencies with `pnpm install`. Use `pnpm dev` for the local dev server on port 3000, `pnpm build` for a production bundle, and `pnpm start` to run the compiled app. Run `pnpm lint` before commits; it uses the shared ESLint config and catches both TypeScript and Next.js issues. When scripts are added, document them here and keep their names verbs (e.g., `pnpm analyze`).

## Coding Style & Naming Conventions
Write components in TypeScript using the App Router conventions (server components by default, add `"use client"` only when needed). Prefer functional components, React hooks, and Tailwind utility classes in JSX for layout; keep `globals.css` limited to reset and CSS custom properties. Use two-space indentation, camelCase for variables and functions, PascalCase for React components and file names under `app/`, and kebab-case for route segments. Export a single default component per route. Run `pnpm lint --fix` to auto-apply formatting.

## Testing Guidelines
Automated tests are not yet configured. When introducing them, add a `pnpm test` script and place files in `tests/` or co-locate with the feature under `app/feature/__tests__/`. Prefer Vitest with React Testing Library for component logic and Playwright for end-to-end coverage. Until tooling lands, document manual verification steps in the pull request, especially when touching routing, data fetching, or styles.

## Commit & Pull Request Guidelines
Use present-tense, imperative commit messages (`Add hero section`, `Fix lint config`). Group related changes together and avoid large mixed commits. Every PR should include: a concise summary, screenshots for UI changes, reproduction steps for fixes, and references to GitHub issues or Linear tickets (`Closes #42`). Ensure `pnpm lint` passes and note any missing tests or follow-up tasks in the PR description.
