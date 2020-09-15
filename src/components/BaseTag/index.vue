<template>
  <div :class="customClass" :style="customStyle">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'BaseTag',
  props: {
    height: {
      type: [Number, String],
      default: 20
    },
    width: {
      type: [Number, String],
      default: 108
    },
    display: {
      type: String,
      default: 'flex'
    },
    color: {
      type: String,
      default: 'primary'
    },
    /**
     * タイプを指定
     * @values fill, border
     */
    type: {
      type: String,
      default: 'fill'
    }
  },
  computed: {
    customStyle() {
      const radian = this.height / 2
      return {
        height: `${this.height}px`,
        'border-radius': `${radian}px`,
        width: this.width ? `${this.width}px` : 'auto'
      }
    },
    customClass() {
      return [
        this.$style.base_tag,
        this.$style[this.display],
        this.$style[this.type],
        this.$style[this.color]
      ]
    }
  }
}
</script>
<style lang="scss" module>
.base_tag {
  justify-content: center;
  align-items: center;
  background: $primary;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  padding: 0 8px;
}
.flex,
.block {
  display: flex;
}
.inline,
.inline-flex {
  display: inline-flex;
}
.border {
  background: #fff;
}

.fill.black {
  background-color: #140f0f;
}

.border {
  border-width: 1px;
  border-style: solid;
}

.border.black {
  border-color: #140f0f;
  color: #140f0f;
}
.border.primary {
  border-color: $primary;
  color: $primary;
}
</style>
