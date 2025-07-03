import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 🔹Biome

[Biome](https://biomejs.dev/ja/) は高速に動作するフォーマット兼リントツールです。

## 設定

Biome の設定ファイルは [`biome.json`](https://biomejs.dev/ja/guides/configure-biome/) です。
設定内容は [`biome.json`](https://github.com/OpenUp-LabTakizawa/caravan-kidstec/blob/main/biome.json) を確認して下さい。

## エディタへの導入

Biome は [VS Code](https://code.visualstudio.com/) と [IntelliJ](https://www.jetbrains.com/ja-jp/idea/)、[Zed](https://zed.dev/) エディタ向けの拡張機能を提供しています。

この拡張機能を導入することで、エディタでの編集時にフォーマット・リントを適用出来ます。

導入方法は[公式ドキュメント](https://biomejs.dev/ja/guides/editors/first-party-extensions/)を参照して下さい。

## コマンド

### 1. フォーマットとリントを同時に実行

<Tabs>
  <TabItem value="bun" label="Bun" default>
    ```bash title="Terminal"
    bun biome check --write
    ```
  </TabItem>
  <TabItem value="deno" label="Deno">
    ```bash title="Terminal"
    deno run -A npm:@biomejs/biome check --write
    ```
  </TabItem>
  <TabItem value="pnpm" label="pnpm">
    ```bash title="Terminal"
    pnpm biome check --write
    ```
  </TabItem>
  <TabItem value="yarn" label="yarn">
    ```bash title="Terminal"
    yarn biome check --write
    ```
  </TabItem>
</Tabs>

### 2. フォーマットを実行

<Tabs>
  <TabItem value="bun" label="Bun" default>
    ```bash title="Terminal"
    bun biome format --write
    ```
  </TabItem>
  <TabItem value="deno" label="Deno">
    ```bash title="Terminal"
    deno run -A npm:@biomejs/biome format --write
    ```
  </TabItem>
  <TabItem value="pnpm" label="pnpm">
    ```bash title="Terminal"
    pnpm biome format --write
    ```
  </TabItem>
  <TabItem value="yarn" label="yarn">
    ```bash title="Terminal"
    yarn biome format --write
    ```
  </TabItem>
</Tabs>

### 3. リントを実行

<Tabs>
  <TabItem value="bun" label="Bun" default>
    ```bash title="Terminal"
    bun biome lint --write
    ```
  </TabItem>
  <TabItem value="deno" label="Deno">
    ```bash title="Terminal"
    deno run -A npm:@biomejs/biome lint --write
    ```
  </TabItem>
  <TabItem value="pnpm" label="pnpm">
    ```bash title="Terminal"
    pnpm biome lint --write
    ```
  </TabItem>
  <TabItem value="yarn" label="yarn">
    ```bash title="Terminal"
    yarn biome lint --write
    ```
  </TabItem>
</Tabs>
