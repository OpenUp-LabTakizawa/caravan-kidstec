<div align="center">
  <a href="https://caravan-kidstec.com/">
    <picture>
      <source srcset="../public/caravan-kidstec_logo.avif" media="(max-width: 600px)" height="128">
      <img src="../public/caravan-kidstec_logo.avif" alt="caravan-kidstec logo" height="256">
    </picture>
  </a>
  <h1>caravan-kidstec documentation</h1>

  <a href="https://www.algolia.com/"><img src="https://img.shields.io/badge/algolia-003DFF?labelColor=000000&logo=algolia&style=for-the-badge" alt="Algolia"></a>
  <a href="https://bun.sh/"><img src="https://img.shields.io/badge/bun-FBF0DF?labelColor=000000&logo=bun&style=for-the-badge" alt="Bun"></a>
  <a href="https://docusaurus.io/"><img src="https://img.shields.io/badge/docusaurus-3ECC5F?labelColor=000000&logo=docusaurus&style=for-the-badge" alt="Docusaurus"></a>
  <a href="https://pages.github.com/"><img src="https://img.shields.io/badge/github%20pages-3ECC5F?labelColor=000000&logo=githubpages&style=for-the-badge" alt="GitHub Pages"></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/react-61DAFB?labelColor=000000&logo=react&style=for-the-badge" alt="React"></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/typescript-3178C6?labelColor=000000&logo=typescript&style=for-the-badge" alt="TypeScript"></a>
  <a href="https://code.visualstudio.com/"><img src="https://img.shields.io/badge/visual%20studio%20code-007ACC?labelColor=000000&style=for-the-badge" alt="VSCode"></a>
  
  <p>
    <a href="https://openup-labtakizawa.github.io/caravan-kidstec/">This documentation</a> is built using <a href="https://docusaurus.io/">Docusaurus</a>, a modern static website generator.
  </p>
</div>

## Documentation

To check out docs, visit [caravan-kidstec docs](https://openup-labtakizawa.github.io/caravan-kidstec/).

## Installation

```bash
bun i
```

## Local Development

```bash
bun start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
bun run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true bun deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> bun deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
