<template>
  <div :class="!trans ? $style.list_item : null" :style="{ padding: padding }">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'BaseTabListItem',
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    num: {
      type: Number,
      default: null
    },
    padding: {
      type: String,
      default: ''
    },
    trans: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" module>
.list_item {
  background-color: #fff;
}
</style>
