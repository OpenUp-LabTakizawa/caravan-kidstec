import type * as Preset from "@docusaurus/preset-classic"
import type { Config } from "@docusaurus/types"
import { themes as prismThemes } from "prism-react-renderer"

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  future: {
    experimental_faster: true,
    v4: true,
  },
  title: "こどもテックキャラバン",
  tagline: "Caravan Kidstec",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://openup-labtakizawa.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/caravan-kidstec",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "OpenUp-LabTakizawa", // Usually your GitHub org/user name.
  projectName: "caravan-kidstec", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "ja",
    locales: ["ja"],
  },

  markdown: {
    remarkRehypeOptions: {
      footnoteLabel: "脚注",
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/OpenUp-LabTakizawa/caravan-kidstec/tree/main/@caravan-kidstec/docs/",
          onInlineTags: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/caravan-kidstec-social-card.avif",
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: "こどもテックキャラバン",
      logo: {
        alt: "こどもテックキャラバン",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "introSidebar",
          position: "left",
          label: "🚀イントロ",
        },
        {
          type: "docSidebar",
          sidebarId: "homepageSidebar",
          position: "left",
          label: "🏠ホームページ",
        },
        {
          type: "docSidebar",
          sidebarId: "infraSidebar",
          position: "left",
          label: "🧰インフラ",
        },
        {
          type: "docSidebar",
          sidebarId: "documentSidebar",
          position: "left",
          label: "📝ドキュメント",
        },
        {
          href: "https://github.com/OpenUp-LabTakizawa/caravan-kidstec",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "チュートリアル",
          items: [
            {
              label: "🚀イントロ",
              to: "/docs/intro/what-is-caravan-kidstec",
            },
          ],
        },
        {
          title: "コンテンツ",
          items: [
            {
              label: "🏠ホームページ",
              to: "/docs/homepage/foreword",
            },
            {
              label: "🧰インフラ",
              to: "/docs/infra/services",
            },
          ],
        },
        {
          title: "その他",
          items: [
            {
              label: "📝ドキュメント",
              to: "/docs/document/what-is-docusaurus",
            },
            {
              label: "GitHub",
              href: "https://github.com/OpenUp-LabTakizawa/caravan-kidstec",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} こどもテックキャラバン事務局. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: "C57R3Y9NXJ",

      // Public API key: it is safe to commit it
      apiKey: "2506029dd2a67827904049d98b52cdac",

      indexName: "openup-labtakizawaio",

      // Optional: see doc section below
      contextualSearch: true,
    },
  } satisfies Preset.ThemeConfig,
}

export default config
