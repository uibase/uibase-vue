<template>
  <div :class="classObject">
    <div :class="$style.menu_toggle_title">
      <div :class="$style.title_text">{{ title }}</div>
      <base-number-budge :class="$style.title_num" v-if="num">{{
        num
      }}</base-number-budge>
      <base-icon
        :class="[{ [$style.arrow_open]: myOpen }, $style.title_arrow]"
        @click="click"
        name="arrow-down"
        size="14px"
        color="white"
      />
    </div>
    <slot />
  </div>
</template>
<script>
import BaseNumberBudge from '@/components/BaseNumberBudge/index'
import BaseIcon from '@/components/BaseIcon'
export default {
  name: 'AppSidebarMenuToggle',
  components: { BaseIcon, BaseNumberBudge },
  props: {
    title: {
      style: String,
      default: ''
    },
    to: {
      type: String,
      default: null
    },
    num: {
      type: Number,
      default: null
    },
    open: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      myOpen: this.$props.open
    }
  },
  computed: {
    classObject() {
      return [
        this.$style.menu_toggle,
        { [this.$style.menu_toggle_open]: this.myOpen }
      ]
    }
  },
  methods: {
    click() {
      this.myOpen = !this.myOpen
    }
  }
}
</script>
<style lang="scss" module>
.menu_toggle {
  overflow: hidden;
  transition: 0.4s;
  transition-delay: 0;
  transition-timing-function: linear;
  max-height: 46px;
}
.menu_toggle {
  background: $sidebarMenuHeaderBackgroundColor;
}
.menu_toggle_open {
  max-height: 1200px;
}
.menu_toggle_title {
  background: rgba(255, 255, 255, 0.1);
  padding: 16px;
  height: 46px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
}
.title_text {
  color: $sidebarTextColor;
  flex: 1;
}
.title_arrow {
  margin: 0 0 0 16px;
  cursor: pointer;
  transition: 0.4s;
}
.arrow_open {
  transform: rotate(180deg);
}
</style>
