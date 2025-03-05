<div align="center">
  <a href="https://caravan-kidstec.com/">
    <picture>
      <source srcset="../public/caravan-kidstec_logo.avif" media="(max-width: 600px)" height="128">
      <img src="../public/caravan-kidstec_logo.avif" alt="caravan-kidstec logo" height="256">
    </picture>
  </a>
  <h1>caravan-kidstec</h1>

  <a href="https://www.algolia.com/"><img src="https://img.shields.io/badge/algolia-003DFF?labelColor=000000&logo=algolia&style=for-the-badge" alt="Algolia"></a>
  <a href="https://bun.sh/"><img src="https://img.shields.io/badge/bun-FBF0DF?labelColor=000000&logo=bun&style=for-the-badge" alt="Bun"></a>
  <a href="https://docusaurus.io/"><img src="https://img.shields.io/badge/docusaurus-3ECC5F?labelColor=000000&logo=docusaurus&style=for-the-badge" alt="Docusaurus"></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/react-61DAFB?labelColor=000000&logo=react&style=for-the-badge" alt="React"></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/typescript-3178C6?labelColor=000000&logo=typescript&style=for-the-badge" alt="TypeScript"></a>
  <a href="https://code.visualstudio.com/"><img src="https://img.shields.io/badge/visual%20studio%20code-007ACC?labelColor=000000&style=for-the-badge" alt="VSCode"></a>
  
  <p>
    This document is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.
  </p>
</div>

### Installation

```bash
bun i
```

### Local Development

```bash
bun start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```bash
bun run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```bash
USE_SSH=true bun deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> bun deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
