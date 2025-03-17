# ✡️React

[React](https://react.dev/) は [Meta](https://opensource.fb.com/) が開発している JavaScript ライブラリです。

## JSX

特徴は [JSX](https://ja.react.dev/learn/writing-markup-with-jsx) という JavaScript ファイル内に HTML のようなマークアップを記述することです。   

```jsx
export default function TodoList() {
  return (
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <img 
        src="https://i.imgur.com/yXOvdOSs.jpg" 
        alt="Hedy Lamarr" 
        className="photo" 
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  );
}
```

上記のコードの出力は次のようになります。

<img 
  src="https://i.imgur.com/yXOvdOSs.jpg" 
  alt="Hedy Lamarr" 
  className="photo" 
/>
<ul>
  <li>Invent new traffic lights</li>
  <li>Rehearse a movie scene</li>
  <li>Improve the spectrum technology</li>
</ul>

## hooks

React には組み込みの [hooks](https://ja.react.dev/reference/react/hooks) が存在します。

よく使われるものとして [`useEffect`](https://ja.react.dev/reference/react/useEffect) や [`useState`](https://ja.react.dev/reference/react/useState) があります。

```jsx
import { useEffect } from 'react';
import { createConnection } from './chat.js';

function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [serverUrl, roomId]);
  // ...
}
```

JSX と hooks を使いこなせれば、こどもテックキャラバンHPの **70% は理解出来ます**。

また、React のドキュメントは[日本語に翻訳](https://ja.react.dev/community/translations)されています。
だから、React に不慣れな方は[公式ドキュメント](https://ja.react.dev/)の一読をお勧めします。
