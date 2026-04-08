# 🤔Docusaurus とは？

[Docusaurus](https://docusaurus.io/) は [Meta](https://www.meta.com/jp/) が開発した**静的サイトジェネレータ**です。

[![docusaurus logo](/img/docusaurus.png)](https://docusaurus.io/)

他の静的サイトジェネレータと比べて、以下の特徴があります。

- 豊富な[採用実績](https://docusaurus.io/showcase?tags=favorite)
- [MDX](https://mdxjs.com/) や [i18n](https://docusaurus.io/docs/i18n/introduction)、[Algolia DocSearch](https://docsearch.algolia.com/) のサポート

## フォルダー構成

このドキュメントは `docs` フォルダーの直下に構成されています（３階層以降は省略）。

```
docs/
├── docs/
│   ├── document/
│   ├── homepage/
│   ├── infra/
│   └── intro/
├── src/
│   ├── components/
│   ├── css/
│   └── pages/
├── static/
│   ├── img/
│   └── .nojekyll
├── .gitignore
├── docusaurus.config.ts
├── package.json
├── README.md
├── sidebars.ts
└── tsconfig.json
```

例えば、現在、表示しているこのページは [`docs/docs/document/01-what-is-docusaurus.md`](https://github.com/OpenUp-LabTakizawa/caravan-kidstec/blob/main/docs/docs/document/01-what-is-docusaurus.md) です:

## デプロイ環境

このドキュメントは [GitHub Pages](https://pages.github.com/) を利用しています。

更に、ドキュメントの更新をトリガーにした以下の [GitHub Actions](https://github.com/features/actions) を用いて、自動デプロイを行っています。

<details>
<summary>デプロイのテスト</summary>

```yaml
name: 🌐 Test deployment

on:
  pull_request:
    branches: main
    paths:
      - "@caravan-kidstec/docs/**"

permissions:
  contents: read
  pull-requests: write

jobs:
  test-deploy:
    name: Test deployment
    runs-on: ubuntu-latest
    steps:
      - name: 📥 Checkout
        uses: actions/checkout@v6
        with:
          fetch-depth: 0
          persist-credentials: false
      - name: 🐣 Install bun
        uses: oven-sh/setup-bun@735343b667d3e6f658f44d0eca948eb6282f2b76
        with:
          bun-version: canary

      - name: 📦 Install dependencies
        run: bun i --frozen-lockfile
      - name: 🌐 Test build website
        run: bun docs-build
```

</details>

<details>
<summary>GitHub Pages へデプロイ</summary>

```yaml
name: 🐙 Deploy to GitHub Pages

concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

on:
  push:
    branches: main
    paths:
      - "@caravan-kidstec/docs/**"

jobs:
  build:
    name: Build Docusaurus
    runs-on: ubuntu-latest
    if: github.repository_owner == 'openup-labtakizawa'
    permissions:
      contents: read
      pull-requests: write

    steps:
      - name: 📥 Checkout
        uses: actions/checkout@v6
        with:
          fetch-depth: 0
          persist-credentials: false
      - name: 🐣 Install bun
        uses: oven-sh/setup-bun@735343b667d3e6f658f44d0eca948eb6282f2b76
        with:
          bun-version: canary

      - name: 📦 Install dependencies
        run: bun i --frozen-lockfile
      - name: 🧩 Build website
        run: bun docs-build

      - name: 🆙 Upload Build Artifact
        uses: actions/upload-pages-artifact@v4
        with:
          path: "@caravan-kidstec/docs/build"

  deploy:
    name: Deploy to GitHub Pages
    needs: build

    # Grant GITHUB_TOKEN the permissions required to make a Pages deployment
    permissions:
      pages: write # to deploy to Pages
      id-token: write # to verify the deployment originates from an appropriate source

    # Deploy to the github-pages environment
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    runs-on: ubuntu-latest
    steps:
      - name: 🐙 Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

</details>

詳細は [Docusaurus のドキュメント](https://docusaurus.io/docs/deployment#deploying-to-github-pages)を参考にして下さい。
