<template>
  <nuxt-link :to="to" :class="classObject" v-on="$listeners">
    <div :class="$style.menu_item_title">
      <slot />
    </div>
    <base-number-budge v-if="num">{{ num }}</base-number-budge>
  </nuxt-link>
</template>
<script>
import BaseNumberBudge from '@/components/BaseNumberBudge/index'
export default {
  name: 'AppSidebarMenuItem',
  components: { BaseNumberBudge },
  props: {
    to: {
      type: [String, Object],
      default: null
    },
    num: {
      type: Number,
      default: null
    },
    exact: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classObject() {
      return [
        this.$style.menu_item,
        {
          only_exact: this.exact
        }
      ]
    }
  }
}
</script>
<style lang="scss" module>
.menu_item {
  position: relative;
  height: 46px;
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 14px;
  box-sizing: border-box;
  padding: 16px;
  text-decoration: none;
  transition: 0.4s;
}
.menu_item {
  background: $sidebarBackgroundColor;
}
.menu_item:global.nuxt-link-exact-active.only_exact.nuxt-link-active {
  font-weight: bold;
  background: $sidebarActiveBackgroundColor;
  color: $sidebarActiveTextColor;
}
.menu_item:global.nuxt-link-active {
  font-weight: bold;
  background: #fff;
  color: $sidebarActiveTextColor;
}
.menu_item:global.nuxt-link-active.only_exact {
  font-weight: normal;
  background: $sidebarBackgroundColor;
  color: $sidebarTextColor;
}
.menu_item:before {
  position: absolute;
  top: 11px;
  right: 0;
  content: '';
  display: block;
  width: 4px;
  background: $sidebarTextColor;
  border-radius: 4px 0 0 4px;
  height: 22px;
  transition: 0.4s;
  transform-origin: center;
  transform: scaleY(0);
}
.menu_item:global.nuxt-link-exact-active:before {
  transform: scaleY(1);
}
.menu_item:after {
  content: '';
  display: block;
  width: 90%;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  position: absolute;
  bottom: 0;
  right: 0;
}
.menu_item_title {
  flex: 1;
}
</style>
