---
sidebar_position: 1
---

# チュートリアル

こどもテックキャラバンHPを**5分以内で体験**してみよう！

## 事前準備

こどもテックキャラバンHPを作成する前に準備するもの。

### 1. JavaScript 実行環境（以下から１つ）

- [Bun](https://bun.sh/docs/installation) オススメ！
- [Deno](https://deno.com/)
- [Node.js](https://nodejs.org/en/download/): デフォルトの [npm](https://www.npmjs.com/) ではない以下のパッケージマネージャの利用を推奨
  - [pnpm](https://pnpm.io/ja/installation)
  - [yarn](https://yarnpkg.com/)

### 2. SCM ツール（以下から１つ）

- [Sapling](https://sapling-scm.com/docs/introduction/installation) オススメ！
- [Jujutsu](https://jj-vcs.github.io/jj/latest/install-and-setup/)
- [Git](https://git-scm.com/downloads)

### 3. コードエディター（好きなものを１つ）

- [VSCode](https://code.visualstudio.com/) Windows の方
- [Zed](https://zed.dev/): macOS や Linux の方

このチュートリアルや今後の説明では、以下のツールを使用して説明していきます。

- JavaScript 実行環境 : Bun
- SCM ツール : Sapling
- コードエディター : VSCode

## プロジェクトをクローン

こどもテックキャラバンHPを扱う為に、先ずは[クローン](https://zenn.dev/gachigachi/articles/329952348817d7)します。

次のコマンドを実行することで、こどもテックキャラバンをローカルにクローン出来ます。

```bash
sl clone git@github.com:OpenUp-LabTakizawa/caravan-kidstec.git
```

上記のコマンドは[コマンドプロンプト](https://techmania.jp/blog/cmd0001/)や [Powershell](https://learn.microsoft.com/ja-jp/powershell/scripting/overview)、[ターミナル](https://learn.microsoft.com/ja-jp/windows/terminal/)、又はターミナルが統合されたコードエディター上で実行出来ます。

クローン出来たら、プロジェクトに移動して必要な依存関係を全てインストールしましょう。

```bash
cd caravan-kidstec
bun i
```

`cd` コマンドはワーキングディレクトリを変更します。 プロジェクトをクローンしたら、ターミナルでプロジェクトのディレクトリに移動する必要があります。

`bun i` コマンドは必要な依存関係を自動的に解決し、インストールします。

これで、こどもテックキャラバンHPを実行する環境が整いました。

## サイトを動かそう

開発サーバーを起動しましょう:

```bash
bun dev
```

`bun dev` コマンドはローカルでサイトを立ち上げ、開発サーバーで実行されます。 http://localhost:3000/ のアドレスから確認出来ます。

`app/page.tsx` をコードエディターで開き、何行か編集してみて下さい。 サイトが自動的にリロードされて更新されます。
