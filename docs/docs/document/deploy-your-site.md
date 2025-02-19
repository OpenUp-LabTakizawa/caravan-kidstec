---
sidebar_position: 5
---

# サイトのデプロイ

Docusaurus は **静的サイトジェネレーター** (**[Jamstack](https://jamstack.org/)** とも呼ばれる)です。

これはサイトをシンプルな **静的な HTML, JavaScript と CSS ファイル** にしてビルドします。

## サイトのビルド

**本番環境用に** ビルドしましょう:

```bash title="Terminal"
bun run build
```

静的ファイルは `build` フォルダー内に生成されます。

## サイトのデプロイ

本番環境のビルドをローカルでテストしましょう:

```bash title="Terminal"
bun run serve
```

`build` フォルダーは [http://localhost:3000/](http://localhost:3000/) で確認出来ます。

遂に、`build` フォルダーを **ほぼどこへでも** 簡単に、**無料** 又は、非常に小さなコストでデプロイ出来ます(詳細は **[Deployment Guide](https://docusaurus.io/docs/deployment)** を読んで下さい)。
