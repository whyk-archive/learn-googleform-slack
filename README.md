# GAS TS Env
【日本語 / [English](./README_EN.md)】

これはGoogle Apps Script（以下、GAS）をTypeScriptで開発するために作られた環境です。  
Googleの"[clasp](https://github.com/google/clasp)"を使い、ローカルで開発できるようになっています。  
ローカルで作成するため、Gitでバージョン管理することも可能です。

## 使い方
1. `Use this template`を押下してレポジトリを複製し、ローカルにダウンロードしてください。

2. パッケージをインストールします  
``` bash
$ npm i
```

3. claspをGoogleアカウントで認証します  
``` bash
$ npm run login
```

4. プロジェクトを作成ないし複製します  
``` bash
# ローカルにプロジェクトがない場合
$ npm run make -- <project-name> # 新しいプロジェクトの作成
# or
$ npm run clone -- <project-id> # 既存のプロジェクトと接続

# 既にプロジェクトと接続済みの場合
$ npm run pull # 接続済みのプロジェクトからコードを取得
```

5. 好きに書いてください

6. プロジェクトにアップロードします  
``` bash
$ npm run push
```
