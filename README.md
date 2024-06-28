# chrome-ex-zoom-comment-stream

zoom のチャット欄に寄せられたコメントを取得し、ローカルサーバーにストリーミングする Chrome 拡張機能です。

http://localhost:5100/comments にコメントがストリーミングされます。

```ts
type Response = {
  comment: string;
};
```

## インストール

1. このリポジトリをクローンするか、ZIP ファイルをダウンロードして解凍します。

```bash
git clone git@github.com:tfs-tada/chrome-ex-zoom-comment-stream.git
```

2. Chrome の拡張機能のページを開きます。

chrome://extensions/

3. 右上の「デベロッパーモード」を有効にします。

![デベロッパーモードを有効にする](https://github.com/tfs-tada/chrome-ex-zoom-comment-stream/assets/74394709/57f10218-b6c5-4c1c-9bb7-00ff3bfd2cf3)

4. 「パッケージ化されていない拡張機能を読み込む」をクリックし、先ほどクローンしたディレクトリを選択します。

![パッケージ化されていない拡張機能を読み込む](https://github.com/tfs-tada/chrome-ex-zoom-comment-stream/assets/74394709/e205954e-5164-4461-9d2e-6270213f07aa)

読み込みが成功したら、拡張一覧に chrome-ex-zoom-comment-stream が表示されます。
![選択したらこの画面になります](https://github.com/tfs-tada/chrome-ex-zoom-comment-stream/assets/74394709/9555efb6-91d2-40b7-aae0-8ea1c569919c)

5. ブラウザ上で zoom ミーティングに参加します

- https://app.zoom.us/wc/home からアクセスし、ブラウザ上でミーティングに参加します。
- チャット欄を表示しておくことで、自動で localhost:5100 にコメントがストリーミングされます。

![zoom ミーティングに参加](https://github.com/tfs-tada/chrome-ex-zoom-comment-stream/assets/74394709/798c3f19-06ff-41cf-be25-83205b89edb3)

- PWA モードは解除してください（URL に fromPWA と入っていたら PWA モードです）
  - PWA モードを検知すると、リロード要求のアラートが表示されることがあります

![PWA モードを解除](https://github.com/tfs-tada/chrome-ex-zoom-comment-stream/assets/74394709/d5be11b0-050a-46b8-b727-1a905ea9d7b6)