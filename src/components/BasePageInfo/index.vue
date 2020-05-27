<template>
  <base-box type="white" padding="8px">
    <div :class="$style.text">
      {{ total }}件中 {{ from }}件〜{{ to }}件を表示
    </div>
  </base-box>
</template>
<script>
import BaseBox from '../BaseBox/index'
export default {
  name: 'BasePageInfo',
  components: { BaseBox },
  props: {
    total: {
      type: [String, Number],
      default: 0
    },
    from: {
      type: [String, Number],
      default: 0
    },
    to: {
      type: [String, Number],
      default: 0
    }
  }
}
</script>
<style lang="scss" module>
.text {
  font-size: 13px;
  color: $black;
  text-align: right;
}
</style>
