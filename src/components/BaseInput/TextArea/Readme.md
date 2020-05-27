### Text

```vue
<base-input-text-area
    name="textarea-normal"
    placeholder="プレースホルダー"
    label="ラベルが入ります"
    type="textarea"
    ></base-input-text-area>
```

```[import](./example.vue)
```

### error

エラーを表示したい場合は`error`プロパティーにエラー内容の文字列を渡します

```vue
<base-input-text-area
    name="textarea-error"
    placeholder="プレースホルダー"
    label="ラベルが入ります"
    look="inset-none"
    error="検索の文字列を入れてください"
>
</base-input-text-area>
```
