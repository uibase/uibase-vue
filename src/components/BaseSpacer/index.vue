<template>
  <div :class="$style[`inner-${size}`]">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BaseSpacer',
  props: {
    size: {
      type: String,
      default: 's',
      validator: (value) => ['s', 'l'].indexOf(value)
    }
  }
}
</script>

<style lang="scss" module>
.inner-l {
  padding: 16px;
}
.inner-s {
  padding: 8px;
}
</style>
