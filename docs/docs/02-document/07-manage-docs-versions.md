import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# バージョン管理

Docusaurus は複数のバージョンでドキュメント管理出来ます。

## バージョンの作成

バージョン 1.0 をリリースします:

<Tabs>
  <TabItem value="bun" label="Bun" default>
    ```bash title="Terminal"
    bun docusaurus docs:version 1.0
    ```
  </TabItem>
  <TabItem value="deno" label="Deno">
    ```bash title="Terminal"
    deno task docusaurus docs:version 1.0
    ```
  </TabItem>
  <TabItem value="pnpm" label="pnpm">
    ```bash title="Terminal"
    pnpm docusaurus docs:version 1.0
    ```
  </TabItem>
  <TabItem value="yarn" label="yarn">
    ```bash title="Terminal"
    yarn docusaurus docs:version 1.0
    ```
  </TabItem>
</Tabs>

`docs` フォルダーは `versioned_docs/version-1.0` と `versions.json` にコピーされ、作成されます。

これにより２つのバージョンのドキュメントがあります:

- `1.0` は `http://localhost:3000/docs/` を指し、バージョン 1.0 のドキュメントです
- `current` は `http://localhost:3000/docs/next/` を指し、**次回のリリースされていないドキュメント**です

## バージョンドロップダウンの追加

バージョン間の移動をシームレスにする為に、バージョンドロップダウンを追加します。

`docusaurus.config.js` ファイルを編集します:

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'docsVersionDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

ドキュメントのバージョンドロップダウンがナビゲーションバーに表示されます:

![Docs Version Dropdown](/img/docsVersionDropdown.png)

## 既存のバージョンを更新する

バージョン付与したドキュメントを後から編集可能です:

- `versioned_docs/version-1.0/hello.md` は `http://localhost:3000/docs/hello` を更新します
- `docs/hello.md` は `http://localhost:3000/docs/next/hello` を更新します
