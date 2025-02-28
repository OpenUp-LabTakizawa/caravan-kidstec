import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 翻訳

`docs/intro.md` をフランス語に翻訳しましょう。

## i18n 設定

`docusaurus.config.js` に、 `fr` locale を追加しサポートします:

```js title="docusaurus.config.js"
export default {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
};
```

## ドキュメントの翻訳

`docs/intro.md` ファイルを `i18n/fr` フォルダーにコピーします:

```bash title="Terminal"
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

`i18n/fr/docusaurus-plugin-content-docs/current/intro.md` をフランス語に翻訳します。

## ローカライズしたサイトを始める

フランス語サイトを始めましょう:

<Tabs>
  <TabItem value="bun" label="Bun" default>
    ```bash title="Terminal"
    bun start -- --locale fr
    ```
  </TabItem>
  <TabItem value="deno" label="Deno">
    ```bash title="Terminal"
    deno task start -- --locale fr
    ```
  </TabItem>
  <TabItem value="pnpm" label="pnpm">
    ```bash title="Terminal"
    pnpm start -- --locale fr
    ```
  </TabItem>
  <TabItem value="yarn" label="yarn">
    ```bash title="Terminal"
    yarn start -- --locale fr
    ```
  </TabItem>
</Tabs>

ローカライズされたサイトは [http://localhost:3000/fr/](http://localhost:3000/fr/) でアクセスできます。`Getting Started` ページは翻訳されています。

:::caution

開発中は、1 つの言語のみ同時に使用できます。

:::

## 言語ドロップダウンの追加

言語間の遷移をシームレスにする為に、言語ドロップダウンを追加します。

`docusaurus.config.js` ファイルを編集します:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'localeDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

言語ドロップダウンがナビゲーションバーに表示されます:

![Locale Dropdown](/img/localeDropdown.png)

## ローカライズサイトをビルドする

特定の言語でビルドする:

<Tabs>
  <TabItem value="bun" label="Bun" default>
    ```bash title="Terminal"
    bun run build -- --locale fr
    ```
  </TabItem>
  <TabItem value="deno" label="Deno">
    ```bash title="Terminal"
    deno task build -- --locale fr
    ```
  </TabItem>
  <TabItem value="pnpm" label="pnpm">
    ```bash title="Terminal"
    pnpm build -- --locale fr
    ```
  </TabItem>
  <TabItem value="yarn" label="yarn">
    ```bash title="Terminal"
    yarn build -- --locale fr
    ```
  </TabItem>
</Tabs>

又は、全ての言語を含め、１回でビルドする:

<Tabs>
  <TabItem value="bun" label="Bun" default>
    ```bash title="Terminal"
    bun run build
    ```
  </TabItem>
  <TabItem value="deno" label="Deno">
    ```bash title="Terminal"
    deno task build
    ```
  </TabItem>
  <TabItem value="pnpm" label="pnpm">
    ```bash title="Terminal"
    pnpm build
    ```
  </TabItem>
  <TabItem value="yarn" label="yarn">
    ```bash title="Terminal"
    yarn build
    ```
  </TabItem>
</Tabs>
