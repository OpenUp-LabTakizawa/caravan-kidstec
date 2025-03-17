# 🔰初めに

使用しているサービス概要は🚀イントロの、[🏠ホームページについて](../intro/homepage)を参考にして下さい。

ここからは [Next.js](https://nextjs.org/) 等の技術紹介の前に、必要になる前提知識を解説します。

## Bun

[Bun](https://bun.sh/) は JavaScript の実行環境です。

こどもテックキャラバンHP の開発では、他の JavaScript 実行環境の [Deno](https://deno.com/) や [pnpm](https://pnpm.io/ja/) でも問題ありません。

しかし、単体テストで [`bun test`](https://bun.sh/docs/cli/test) コマンドを使用する為、Bun の利用を推奨します。

## リンター・フォーマッター

**リンター**（**linter**）とはソースコードを静的に解析して、エラーやバグ等をチェックしてくれるツールです。

JavaScript でよく使われるリンターに [ESLint](https://ja.eslint.org/) があります。

[![eslint](/img/eslint-logo-color.svg)](https://ja.eslint.org/)

その一方、**フォーマッター**（**Formatter**）とはソースコードのインデント、改行、括弧の位置等を整形するツールです。

代表的なフォーマッターとして [Prettier](https://prettier.io/) があります。

[![prettier](/img/prettier-banner-dark.svg)](https://prettier.io/)

こどもテックキャラバンHP ではリンター兼フォーマッターの [Biome](https://biomejs.dev/ja/) を採用しています。

[![biome](/img/biome-slogan.svg)](https://biomejs.dev/ja/)

この Biome の詳細は[🔹Biome](./biome)を参考にして下さい。

## TypeScript

[TypeScript](https://www.typescriptlang.org/) は JavaScript に静的型付けや、クラスベースオブジェクト指向等を加えたプログラミング言語です。

```ts
const a: any = 100; // 代入できる
console.log(a * 3); // 操作もできる
 
const x: unknown = 100; // 代入はできる
console.log(x * 3); // 操作はできない
// 'x' is of type 'unknown'.
 
// 戻り値のない関数
function doSomething(): void {}
 
// 戻り値を返すことがありえない関数
function throwError(): never {
  throw new Error();
}
```

TypeScript の[概要](https://typescriptbook.jp/)や[特徴](https://typescriptbook.jp/overview/features)、[なぜ TypeScript を使うべきか](https://typescriptbook.jp/overview/why-you-should-use-typescript)は[サバイバルTypeScript](https://typescriptbook.jp/)を読んでみて下さい。

この本は明快且つ簡潔な説明で、非常に読み易くお勧めです。
