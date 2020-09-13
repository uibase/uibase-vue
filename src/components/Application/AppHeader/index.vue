<template>
  <div :class="$style.header">
    <div v-if="$slots.logo" :class="$style.logo">
      <slot name="logo" />
    </div>
    <div v-if="$slots.utilities" :class="$style.util">
      <slot name="utilities" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppHeader',
}
</script>
<style lang="scss" module>
@mixin headerShadow($show: false) {
  @if $show {
    box-shadow: 0 1px 4px $headerShadowColor;
  }
}
@mixin headerBottomBorder($show: false) {
  @if $show {
    border-bottom: $headerBottomBorder;
  }
}
.header {
  display: flex;
  height: $headerHeight;
  background: $headerBackgroundColor;
  box-sizing: border-box;
  padding: 0 16px;
  align-items: center;
  @include headerShadow($headerShadow);
  @include headerBottomBorder($headerBottomBorder);
}

.util {
  display: flex;
}
.logo {
  display: flex;
}
</style>
