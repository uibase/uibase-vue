```vue
const checked = true;
<div>
  <base-input-check-box v-model="checked">
    チェックボックス
  </base-input-check-box>
  <input type="checkbox" v-model="checked" />
  <p>{{ checked }}</p>
</div>
```

```vue
const checked = ['HTML'];
<div>
  <base-input-check-box name="base-checkbox" value="javascript" v-model="checked">
    javascript
  </base-input-check-box>
  <base-input-check-box name="base-checkbox" value="HTML" v-model="checked">
    HTML
  </base-input-check-box>
  <base-input-check-box name="base-checkbox" value="CSS" v-model="checked">
    CSS
  </base-input-check-box>
  <p>{{checked.join(', ')}}</p>
</div>
```