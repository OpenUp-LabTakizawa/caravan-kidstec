---
sidebar_position: 1
---

# Docusaurus とは？

ドキュメントは**ページの集まり**で以下と関連しています:

- **サイドバー**
- **戻る/次の ナビゲーション**
- **バージョン管理**

## 初めてのドキュメント作成

`docs/hello.md`に以下のMarkdownファイルを作成しましょう:

```md title="docs/hello.md"
# Hello

This is my **first Docusaurus document**!
```

この新しいドキュメントは [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello) で確認出来ます。

## サイドバーの設定

[Docusaurus](https://docusaurus.io/) は自動的に `docs` フォルダーから**サイドバーを作成**します。

メタデータを追加してサイドバーのラベルと位置を変更しましょう:

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

This is my **first Docusaurus document**!
```

また、`sidebars.js` を使用し、明示的にサイドバーを作成することも可能です:

```js title="sidebars.js"
export default {
  tutorialSidebar: [
    'tutorial',
    // highlight-next-line
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};
```
