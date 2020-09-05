Vue CLI(4.5.4)を利用して、以下の構成で作成した。

- Vue 3.0
- TypeScript + Babel
- CSSプリプロセッサ: Sass/SCSS (node-sass)
- EsLint (コードフォーマット: Airbnb)
- Prettier

その他、プロジェクトについてはVue CLIのサイトを参照  
https://cli.vuejs.org

Vue3.0に関しては以下を参照
https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api

## セットアップ

### 依存パッケージをインストール
``` bash
npm install
```

## 実行方法


``` bash
npm run serve
```

### 本番用にユーザーサイトをビルドする
``` bash
npm run build
```

### 単体テスト
``` bash
npm run test:unit
```

### 静的解析
``` bash
npm run lint
```
