```vue
<base-page-navi :total="100" :current="1" />
```

`url` で `nuxt-link` を使った遷移URLを作成できます。
引数にはページ番号が含まれています。 

`nuxt-link` の 名前付きルートでの設定も可能です。

```vue
<base-page-navi :total="100" :url="(num) => `/page=${num}`" :current="3" />
```
