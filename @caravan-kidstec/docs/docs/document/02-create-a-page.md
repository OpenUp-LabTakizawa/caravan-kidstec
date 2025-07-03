# 📝新規ページ作成

**Markdown 又は React** ファイルを `src/pages` に追加して、**独立したページ**を作成します:

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## 初めての React ページの作成

`src/pages/my-react-page.js`に以下のファイルを作成しましょう:

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>私の React ページ</h1>
      <p>これは React ページです</p>
    </Layout>
  );
}
```

この新規ページは [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page) で確認出来ます。

## 初めての Markdown ページの作成

`src/pages/my-markdown-page.md`に以下のファイルを作成しましょう:

```mdx title="src/pages/my-markdown-page.md"
# 私の Markdown ページ

これは Markdown ページです
```

この新規ページは [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page) で確認出来ます。
