
```vue
const show = false;
<div>
  <base-floating-box v-if="show" @close="show = !show">
    <p style="padding: 16px;">テスト</p>
  </base-floating-box> 
  <p>{{ show ? '開' : '閉' }}</p>
  <base-button @click="show = !show">開閉</base-button>
</div>
```