# AGENTS.md

## Project Overview

caravan-kidstec — A web application for a multi-experience program to learn programming with nature🌄.

## Repository Structure

Monorepo using Bun workspaces.

```bash
@caravan-kidstec/
├── web/   # Next.js (App Router) main web app
└── docs/  # Docusaurus documentation site
```

## Tech Stack

- Runtime / Package Manager: Bun
- Framework: Next.js (canary, App Router, Turbopack, React Compiler)
- UI: React 19, Tailwind CSS 4
- Documentation: Docusaurus
- Linter / Formatter: Biome
- Testing: Bun test + Happy DOM (unit), Playwright (E2E)
- Infrastructure: Docker → AWS Lambda (Lambda Web Adapter), CloudFront
- Tool Management: Mise
- LINE Bot: @line/bot-sdk

## Development Commands

```bash
bun i                # Install dependencies
bun dev              # Start dev server
bun run build        # Production build
bun start            # Start production server
bun fix              # Biome check (auto-fix)
bun test:unit        # Unit tests
bun test:e2e         # E2E tests (Playwright)
bun docs-dev         # Docs site dev server
bun docs-build       # Docs site build
```

## Coding Conventions

- Language: TypeScript (strict)
- Semicolons: none (`semicolons: "asNeeded"`)
- Indentation: spaces
- Formatter / Linter: Biome (configured in `biome.json`)
  - `noUnusedImports: error`
  - `useBlockStatements: error`
  - `noUselessElse: error`
- CSS: Tailwind CSS (v4, `@tailwind` directives enabled)
- Image format: AVIF preferred, WebP fallback
- Next.js output: `standalone`

## Commit Messages

Follow Angular convention:

```bash
<type>(<scope>): <summary>
```

- type: `build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test`
- scope: `biome|bun|common|css|docker|git|security|vscode` etc.
- summary: present tense, lowercase start, no trailing period

## Directory Structure (web)

```bash
@caravan-kidstec/web/
├── app/
│   ├── api/bot/         # LINE Bot API route
│   ├── components/      # Shared components (animation, button, layout, media)
│   ├── interfaces/      # TypeScript type definitions
│   ├── lib/             # Utilities (constant, loader, line)
│   ├── history/         # Activity history page
│   ├── partner/         # Partner pages (kanto, hiroshima, special)
│   ├── secretariat/     # Secretariat page
│   ├── sponsor/         # Sponsor page
│   ├── @modal/          # Parallel Routes (modal)
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Top page
├── public/              # Static assets
├── test/
│   ├── app/             # Unit tests
│   └── e2e/             # E2E tests
├── next.config.ts
└── playwright.config.ts
```

## Important Notes

- Next.js canary is used; experimental features (`inlineCss`, `viewTransition`) are enabled
- React Compiler is enabled (`reactCompiler: true`)
- Images are served via CloudFront (`dk75m1tgsot44.cloudfront.net`)
- Tests (`bun test:unit`) run during Docker build
- Run `bun fix` after code changes to execute Biome checks
