
```vue
<base-button>primary</base-button>
<base-button type="secondary">secondary</base-button>
<base-button type="undone">undone</base-button>
<base-button type="border">border</base-button>
<base-button type="border2">border2</base-button>
```

### `display` を指定した場合

```vue
<base-button href="#" display="block">primary</base-button>
```

`to` もしくは　`href` の指定がない場合は、 `button`要素でレンダリングされますので、
要素いっぱいにボタンを広げたい場合は `width="100%"`を指定してください

```vue
<base-button width="100%">primary</base-button>
```

### by-label
```vue
<base-button by-label>primary</base-button>
```

```vue
const clicked = false;
<base-button @click="clicked = true">primary</base-button>
<div v-if="clicked">クリックされました！</div>
```
