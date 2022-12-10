# angular-sample

## 概要

[Angular](https://angular.jp)フレームワークを使ったサンプル

## 事前準備

- Node.js の導入

## 導入

```bash
npm install
```

## 起動コマンド

```bash
# 開発サーバ起動(ホットリロード)
$ npm run start
```

## 静的解析

```bash
# 実行
$ npm run lint

# 強制的に修正
$ npm run fix
```

## テスト

```bash
# 単体テスト
$ npm run test

# e2eテスト
$ npm run e2e
```

## ビルド

```bash
# 実運用環境で利用する.js/.css/.htmlを生成する
$ npm run build
```

## 生成ファイルのリセット

```bash
# distフォルダを削除
$ npm run clean
```

## 実装の雛形を追加

```bash
# componentを追加する
$ npm run ng generate component component-name

※その他以下が利用可能
  npm run ng generate directive|pipe|service|class|guard|interface|enum|module
```

## ヘルプ表示

```bash
# ngコマンドのヘルプを表示
$ npm run ng help
```
