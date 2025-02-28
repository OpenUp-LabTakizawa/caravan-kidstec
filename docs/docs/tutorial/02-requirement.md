import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 事前準備

こどもテックキャラバンHPを作成する前に準備するもの。

## JavaScript 実行環境（以下から１つ）

- [Bun](https://bun.sh/docs/installation) オススメ！
- [Deno](https://deno.com/)
- [Node.js](https://nodejs.org/en/download/): デフォルトの [npm](https://www.npmjs.com/) ではない以下のパッケージマネージャの利用を推奨
  - [pnpm](https://pnpm.io/ja/installation)
  - [yarn](https://yarnpkg.com/)

## SCM ツール（以下から１つ）

- [Sapling](https://sapling-scm.com/docs/introduction/installation) オススメ！
- [Jujutsu](https://jj-vcs.github.io/jj/latest/install-and-setup/)
- [Git](https://git-scm.com/downloads)

## コードエディター（好きなものを１つ）

- [VSCode](https://code.visualstudio.com/) Windows の方
- [Zed](https://zed.dev/): macOS や Linux の方

このチュートリアルや今後の説明では、以下のツールを使用して説明していきます。

- JavaScript 実行環境 : Bun
- SCM ツール : Sapling
- コードエディター : VSCode

## プロジェクトをクローン

こどもテックキャラバンHPを扱う為に、先ずは[レポジトリ](https://github.com/OpenUp-LabTakizawa/caravan-kidstec)を[クローン](https://zenn.dev/gachigachi/articles/329952348817d7)します。

次のコマンドを実行することで、GitHub レポジトリをローカルにクローン出来ます。

<Tabs>
  <TabItem value="sapling" label="Sapling" default>
    ```bash title="Terminal"
    sl clone git@github.com:OpenUp-LabTakizawa/caravan-kidstec.git
    ```
  </TabItem>
  <TabItem value="jujutsu" label="Jujutsu">
    ```bash title="Terminal"
    jj git clone git@github.com:OpenUp-LabTakizawa/caravan-kidstec.git
    ```
  </TabItem>
  <TabItem value="git" label="Git">
    ```bash title="Terminal"
    git clone git@github.com:OpenUp-LabTakizawa/caravan-kidstec.git
    ```
  </TabItem>
</Tabs>

上記のコマンドは [Powershell](https://learn.microsoft.com/ja-jp/powershell/scripting/overview) や[ターミナル](https://learn.microsoft.com/ja-jp/windows/terminal/)、又はターミナルが統合されたコードエディター上で実行出来ます。

クローン出来たら、プロジェクトに移動して必要な依存関係を全てインストールしましょう。

<Tabs>
  <TabItem value="bun" label="Bun" default>
    ```bash title="Terminal"
    cd caravan-kidstec
    bun i
    ```
  </TabItem>
  <TabItem value="deno" label="Deno">
    ```bash title="Terminal"
    cd caravan-kidstec
    deno install
    ```
  </TabItem>
  <TabItem value="pnpm" label="pnpm">
    ```bash title="Terminal"
    cd caravan-kidstec
    pnpm i
    ```
  </TabItem>
  <TabItem value="yarn" label="yarn">
    ```bash title="Terminal"
    cd caravan-kidstec
    yarn
    ```
  </TabItem>
</Tabs>

`cd` コマンドはワーキングディレクトリを変更します。 プロジェクトをクローンしたら、ターミナルでプロジェクトのディレクトリに移動する必要があります。

`bun i`、`deno install`、`pnpm i`、`yarn` コマンドは必要な依存関係を自動的に解決し、インストールします。

これで、こどもテックキャラバンHPを実行する環境が整いました。
