### Text

```vue
<base-input-field
    name="text-example-text"
    label="ラベルが入ります"
    type="text"
    ></base-input-field>
```

### Password

```vue
<base-input-field
    name="text-example-password"
    label="ラベルが入ります"
    type="password"
    ></base-input-field>
```
## append / prepend

`slot` に `append` および `prepend` を指定することで前後に別の要素を挿入することができます

```vue
<base-input-field
    name="text-example-name"
    placeholder="プレースホルダー"
    label="ラベルが入ります"
>
    <template v-slot:prepend>前に設定されます</template>
    <template v-slot:append>後ろに設定されます</template>
</base-input-field>
```

## look

インプット要素の前後に指定できる部分の見た目を指定することができます

### inset (デフォルト)

```
<base-input-field
    name="text-example-name"
    placeholder="プレースホルダー"
    label="ラベルが入ります"
>
    <template v-slot:prepend>前に設定されます</template>
    <template v-slot:append>後ろに設定されます</template>
</base-input-field>
```

### divide
```
<base-input-field
    name="text-example-name"
    placeholder="プレースホルダー"
    label="ラベルが入ります"
    look="divide"
>
    <template v-slot:prepend>前に設定されます</template>
    <template v-slot:append>後ろに設定されます</template>
</base-input-field>
```

### none
```
<base-input-field
    name="text-example-name"
    placeholder="プレースホルダー"
    label="ラベルが入ります"
    look="none"
>
    <template v-slot:prepend>前に設定されます</template>
    <template v-slot:append>後ろに設定されます</template>
</base-input-field>
```

さらに前後で別々のスタイルを指定したい場合は `divide-none` のように指定することで設定可能です

```vue
<base-input-field
    name="text-example-name"
    placeholder="プレースホルダー"
    look="inset_none"
>
    <template v-slot:prepend>
        <base-icon name="grass" size="16px" color="#ccc" />
    </template>
    <template v-slot:append>
        <base-button>検索</base-button>
    </template>
</base-input-field>
```

### error

エラーを表示したい場合は`error`プロパティーにエラー内容の文字列を渡します

```vue
<base-input-field
    name="text-example-name"
    placeholder="プレースホルダー"
    look="inset_none"
    error="検索の文字列を入れてください"
>
    <template v-slot:prepend>
        <base-icon name="grass" size="16px" color="#ccc" />
    </template>
    <template v-slot:append>
        <base-button>検索</base-button>
    </template>
</base-input-field>
```
