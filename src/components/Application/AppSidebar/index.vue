<template>
  <div :class="[$style.sidebar]">
    <app-dynamic-sidebar :routes="routes" />
  </div>
</template>
<script>
import AppDynamicSidebar from '@/components/Application/AppSidebar/DynamicSidebar/index'
export default {
  name: 'AppSidebar',
  components: { AppDynamicSidebar },
  props: {
    routes: {
      type: Array,
      default: null
    }
  },
  methods: {}
}
</script>
<style lang="scss" module>
.sidebar {
  width: $sidebarWidth;
  background: $sidebarBackgroundColor;
  height: 100%;
}
</style>
