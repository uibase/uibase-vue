<script>
export default {
  name: 'BaseIcon',
  props: {
    size: {
      type: String,
      default: '32px'
    },
    color: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      required: true
    }
  },
  computed: {
    customStyle() {
      return {
        width: this.size,
        height: this.size
      }
    },
    className() {
      return this.color ? this.$style[this.color] : []
    }
  },
  render(h) {
    const style = {
      width: this.size,
      height: this.size
    }
    const className = this.color ? this.$style[this.color] : []
    return h(`icon-${this.name}`, {
      class: className,
      style,
      on: { ...this.$listeners },
      attrs: { ...this.$attrs }
    })
  }
}
</script>
<style lang="scss" module>
.black {
  fill: #140F0F;
}
.brightRed {
  fill: #FF6F61;
}
.pastelRed {
  fill: #FF7D7D;
}
.darkRed {
  fill: #512B2B;
}
.deepRed {
  fill: #D9072D;
}
.redLight {
  fill: #fff9f8;
}
.grayLight {
  fill: #F1F1F1;
}
.grayUltraLight {
  fill: #F1F1F1;
}
.blackLight {
  fill: #333;
}
.blackTrans50 {
  fill: #898787;
}
.blackTrans40 {
  fill: #a19f9f;
}
.blackTrans30 {
  fill: #B9B7B7;
}
.blackTrans10 {
  fill: #E7E7E7;
}
.deepBlue {
  fill: #0F4C81;
}
.brightGreen {
  fill: #38CC8E;
}
.primary {
  fill: $primary;
}
.primaryVariant {
  fill: $primaryVariant;
}
.secondary {
  fill: $secondary;
}
.error {
  fill: $error;
}
.notification {
  fill: $notification;
}
.white {
  fill: #fff;
}
</style>
