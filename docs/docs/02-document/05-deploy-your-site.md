import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# サイトのデプロイ

Docusaurus は **静的サイトジェネレーター** (**[Jamstack](https://jamstack.org/)** とも呼ばれる)です。

これはサイトをシンプルな **静的な HTML, JavaScript と CSS ファイル** にしてビルドします。

## サイトのビルド

**本番環境用に** ビルドしましょう:

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

静的ファイルは `build` フォルダー内に生成されます。

## サイトのデプロイ

本番環境のビルドをローカルでテストしましょう:

<Tabs>
  <TabItem value="bun" label="Bun" default>
    ```bash title="Terminal"
    bun serve
    ```
  </TabItem>
  <TabItem value="deno" label="Deno">
    ```bash title="Terminal"
    deno task serve
    ```
  </TabItem>
  <TabItem value="pnpm" label="pnpm">
    ```bash title="Terminal"
    pnpm serve
    ```
  </TabItem>
  <TabItem value="yarn" label="yarn">
    ```bash title="Terminal"
    yarn serve
    ```
  </TabItem>
</Tabs>

`build` フォルダーは [http://localhost:3000/](http://localhost:3000/) で確認出来ます。

遂に、`build` フォルダーを **ほぼどこへでも** 簡単に、**無料** 又は、非常に小さなコストでデプロイ出来ます(詳細は **[Deployment Guide](https://docusaurus.io/docs/deployment)** を読んで下さい)。
