<template>
  <div>
    <template v-for="route in routes">
      <app-sidebar-menu-item
        v-if="
          (show(route) && route.children === undefined) ||
            (show(route) && route.children.length === 0)
        "
        :num="route.num"
        :to="route.to"
        :key="route.name"
        :exact="route.exact"
        @click="route.click !== undefined ? route.click : null"
        >{{ route.name }}</app-sidebar-menu-item
      >
      <app-sidebar-menu-toggle
        v-if="
          show(route) && route.children !== undefined && route.children.length
        "
        :key="route.name"
        :num="route.num"
        :to="route.to"
        :title="route.name"
        :open="route.open"
        :exact="route.exact"
        @click="route.click !== undefined ? route.click : null"
      >
        <app-dynamic-sidebar :routes="route.children" />
      </app-sidebar-menu-toggle>
    </template>
  </div>
</template>
<script>
import AppSidebarMenuToggle from '@/components/Application/AppSidebar/MenuToggle/index'
import AppSidebarMenuItem from '@/components/Application/AppSidebar/MenuItem/index'
export default {
  name: 'AppDynamicSidebar',
  components: { AppSidebarMenuItem, AppSidebarMenuToggle },
  props: {
    /**
     * [
     *  { name: 'テスト親', path: '', num: null, click: null, open: true, children: [], exact: false }
     * ]
     */
    routes: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    show() {
      return (route) => {
        if (route.show === undefined) return true
        if (typeof route.show === 'boolean') return route.show
        if (typeof route.show === 'function')
          return route.show(route, this.routes)
        return true
      }
    }
  }
}
</script>
