# 🗒️ドキュメント作成

ドキュメントは**ページの集まり**で以下と関連しています:

- **サイドバー**
- **前へ/次へ ナビゲーション**
- **バージョン管理**

## 初めてのドキュメント作成

`docs/hello.md` に以下の Markdown ファイルを作成しましょう:

```md title="docs/hello.md"
# こんにちは

これは私の **初めての Docusaurus ドキュメントです**!
```

この新しいドキュメントは [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello) で確認出来ます。

## サイドバーの設定

Docusaurus は自動的に `docs` フォルダーから**サイドバーを作成**します。

メタデータを追加してサイドバーのラベルと位置を変更しましょう:

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'やあ!'
sidebar_position: 3
---

# こんにちは

これは私の **初めての Docusaurus ドキュメントです**!
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
