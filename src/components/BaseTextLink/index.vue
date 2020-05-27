<template>
  <div>
    <nuxt-link
      v-if="!!icon"
      :to="to"
      :class="classObject"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <base-icon :name="icon" :color="iconColorName" class="icon" size="12" />
      <slot />
    </nuxt-link>
    <nuxt-link
      v-else
      :to="to"
      v-bind="$attrs"
      :class="classObject"
      v-on="$listeners"
    >
      <slot />
    </nuxt-link>
  </div>
</template>
<script>
import BaseIcon from '../BaseIcon'
export default {
  name: 'BaseTextLink',
  components: {
    BaseIcon
  },
  inheritAttrs: false,
  props: {
    to: {
      type: [String, Object],
      default: ''
    },
    /**
     * アイコンの有無の設定※icon属性に入力文字は何でも良くなってしまっております汗
     */
    icon: {
      type: String,
      default: 'sign-left'
    },
    type: {
      type: String,
      default: 'primary',
      validator: (value) =>
        [undefined, 'primary', 'secondary', 'normal'].indexOf(value)
    },
    iconColor: {
      type: String,
      default: ''
    }
  },
  computed: {
    classObject() {
      return [this.$style.base_text_link, this.$style[this.type]]
    },
    iconColorName() {
      const colors = {
        primary: 'primary',
        secondary: 'deepBlue',
        normal: 'black'
      }
      return this.iconColor || colors[this.type]
    }
  }
}
</script>
<style lang="scss" module>
.base_text_link {
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  transition: 0.4s;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  .icon {
    margin-right: 10px;
  }
  &.primary {
    color: $primary;
  }
  &.primary .icon {
    fill: $primary;
  }
  &.secondary {
    color: $deepBlue;
    .icon {
      fill: $deepBlue;
    }
  }
  &.bold {
    font-weight: normal;
  }
}
</style>
