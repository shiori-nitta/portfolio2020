# portfolio2020

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## 運用方法

ファイルの編集をする場合は[本家](<(https://github.com/nittashiori/portfolio2020)>)、
Netlify へのデプロイは[ここ](https://github.com/nittashiori/portfolio2020)のリポジトリで行います。

```
本家で編集完了してmasterマージをしたら、このリポジトリに新しく作業ブランチ（本家で作業したブランチと同名）を作成してください。

作業ブランチに`git rebase master`コマンドを叩き、origin に push してマージしてください。（試してないので挙動がよく分からない。挙動確認できたら readme 更新します。）

上記でうまくいかなかったら`remotes/upstream/master`に pull し、直接 master ブランチに push してください。
```
