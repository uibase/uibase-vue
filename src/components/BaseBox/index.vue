<template>
  <div v-bind="$attrs" :class="classObject">
    <div :style="{ padding }">
      <slot />
    </div>
    <div v-if="$slots.footer" :class="$style.footer" :style="{ padding }">
      <slot name="footer" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'BaseBox',
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: 'gray',
      validator: (value) => [undefined, 'gray', 'white'].indexOf(value)
    },
    padding: {
      type: String,
      default: '0px'
    }
  },
  computed: {
    classObject() {
      return [
        this.$style[this.type],
        this.$style[this.color],
        this.$style.base_box
      ]
    }
  }
}
</script>
<style lang="scss" module>
.base_box {
  border-radius: $boxBorderRadius;
  &.gray {
    background: #f8f8f8;
  }
  &.white {
    background: #fff;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  }
  .footer {
    border-top: 1px solid $blackTrans10;
  }
}
</style>
