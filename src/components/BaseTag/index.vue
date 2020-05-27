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
  color: $white;
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
  background: $white;
}

.fill.black {
  background-color: $black;
}
.fill.brightRed {
  background-color: $brightRed;
}
.fill.pastelRed {
  background-color: $pastelRed;
}
.fill.darkRed {
  background-color: $darkRed;
}
.fill.deepRed {
  background-color: $deepRed;
}
.fill.redLight {
  background-color: $redLight;
}
.fill.grayLight {
  background-color: $grayLight;
}
.fill.grayUltraLight {
  background-color: $grayUltraLight;
}
.fill.blackLight {
  background-color: $blackLight;
}
.fill.blackTrans50 {
  background-color: $blackTrans50;
}
.fill.blackTrans40 {
  background-color: $blackTrans40;
}
.fill.blackTrans30 {
  background-color: $blackTrans30;
}
.fill.blackTrans10 {
  background-color: $blackTrans10;
}
.fill.deepBlue {
  background-color: $deepBlue;
}
.fill.brightGreen {
  background-color: $brightGreen;
}
.fill.primary {
  background-color: $primary;
}
.fill.primaryVariant {
  background-color: $primaryVariant;
}
.fill.secondary {
  background-color: $secondary;
}
.fill.error {
  background-color: $error;
}
.fill.notification {
  background-color: $notification;
}
.fill.white {
  background-color: $white;
}

.border {
  border-width: 1px;
  border-style: solid;
}
.border.black {
  border-color: $black;
  color: $black;
}
.border.brightRed {
  border-color: $brightRed;
  color: $brightRed;
}
.border.pastelRed {
  border-color: $pastelRed;
  color: $pastelRed;
}
.border.darkRed {
  border-color: $darkRed;
  color: $darkRed;
}
.border.deepRed {
  border-color: $deepRed;
  color: $deepRed;
}
.border.blackLight {
  border-color: $blackLight;
  color: $blackLight;
}
.border.blackTrans50 {
  border-color: $blackTrans50;
  color: $blackTrans50;
}
.border.blackTrans40 {
  border-color: $blackTrans40;
  color: $blackTrans40;
}
.border.blackTrans30 {
  border-color: $blackTrans30;
  color: $blackTrans30;
}
.border.blackTrans10 {
  border-color: $blackTrans10;
  color: $blackTrans10;
}
.border.deepBlue {
  border-color: $deepBlue;
  color: $deepBlue;
}
.border.brightGreen {
  border-color: $brightGreen;
  color: $brightGreen;
}
.border.primary {
  border-color: $primary;
  color: $primary;
}
.border.primaryVariant {
  border-color: $primaryVariant;
  color: $primaryVariant;
}
.border.secondary {
  border-color: $secondary;
  color: $secondary;
}
.border.error {
  border-color: $error;
  color: $error;
}
.border.notification {
  border-color: $notification;
  color: $notification;
}
</style>
