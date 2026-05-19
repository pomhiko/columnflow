# ColumnFlow

CSVの「列名変更」と「列順変更」だけに絞った、ブラウザ完結のMVPです。

## 技術構成

- Next.js
- TypeScript
- Tailwind CSS
- Papa Parse
- dnd kit

## セットアップ

```bash
npm install
npm run dev
```

## MVP範囲

- CSVアップロード
- CSVの1行目をヘッダーとして読み取り
- ヘッダー名編集
- ドラッグ&ドロップによる列順変更
- 並び替えた列順で全行データを出力
- 変換後CSVダウンロード
- ブラウザ内処理

ログイン、DB、サーバー保存、課金、Excel対応は含めていません。
