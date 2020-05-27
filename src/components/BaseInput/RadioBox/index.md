```vue
const input = {
  value: true
};
<p>{{input.value}}</p>
<base-input-radio-box name="trueorfalse" :value="true" v-model="input.value">
true
</base-input-radio-box>
<base-input-radio-box name="trueorfalse" :value="false" v-model="input.value">
false
</base-input-radio-box>
```

```vue
const input = {
  value: 'javascript'
};
<p>{{input.value}}</p>
<base-input-radio-box name="code" value="javascript" v-model="input.value">
Javascript
</base-input-radio-box>
<base-input-radio-box name="code" value="Ruby" v-model="input.value">
Ruby
</base-input-radio-box>
<base-input-radio-box name="code" value="PHP" v-model="input.value">
PHP
</base-input-radio-box>
```
