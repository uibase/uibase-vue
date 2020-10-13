<template>
  <base-box type="white" padding="12px">
    <div>App.ですよ<base-button>ボタンだよね</base-button></div>
  </base-box>
</template>
<script>
import BaseButton from '../../src/vue/components/Button/button.ejs'
export default {
  components: { BaseButton },
  name: 'App'
}
</script>
