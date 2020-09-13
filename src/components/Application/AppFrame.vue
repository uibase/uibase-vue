<template>
  <div :class="$style.app">
    <div :class="$style.area_header">
      <slot name="header" />
    </div>
    <div :class="$style.area_sidebar">
      <slot name="sidebar" />
    </div>
    <slot />
    <slot name="other" />
  </div>
</template>
<script>
export default {
  name: 'AppFrame'
}
</script>
<style lang="scss" module>
.app {
  display: grid;
  height: 100vh;
  overflow: hidden;
  grid-template:
    'header header' auto
    'sidebar main' 1fr / auto 1fr;
}
.area_header {
  grid-area: header;
  position: relative;
  z-index: 10;
}
.area_sidebar {
  overflow-y: scroll;
  background: $sidebarBackgroundColor;
  grid-area: sidebar;
  -ms-overflow-style: none; /* IE, Edge 対応 */
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
