import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# サイトを動かそう

開発サーバーを起動しましょう:

<Tabs>
  <TabItem value="bun" label="Bun" default>
    ```bash title="Terminal"
    bun dev
    ```
  </TabItem>
  <TabItem value="deno" label="Deno">
    ```bash title="Terminal"
    deno task dev
    ```
  </TabItem>
  <TabItem value="pnpm" label="pnpm">
    ```bash title="Terminal"
    pnpm dev
    ```
  </TabItem>
  <TabItem value="yarn" label="yarn">
    ```bash title="Terminal"
    yarn dev
    ```
  </TabItem>
</Tabs>

`bun dev`、`deno task dev`、`pnpm dev`、`yarn dev` コマンドはローカルでサイトを立ち上げ、開発サーバーで実行されます。 http://localhost:3000/ のアドレスから確認出来ます。

`app/page.tsx` をコードエディターで開き、何行か編集してみて下さい。 サイトが自動的にリロードされて更新されます。
