<script type="text/jsx">
export default {
  name: 'BaseButton',
  props: {
    /**
     * ボタンの幅を指定します。
     * 幅の指定がない場合は、autoになります
     */
    width: {
      type: String,
      default: 'auto'
    },
    display: {
      type: String,
      default: 'inline-block',
      validator: (value) =>
        [undefined, 'inline-block', 'inline-flex', 'flex', 'block'].indexOf(
          value
        )
    },
    /**
     * `nuxt-link` のリンク先を指定できます
     */
    to: {
      type: [String, Object],
      default: ''
    },
    /**
     * リンク先を指定できます。`to`が指定されている場合はそちらが優先されます
     */
    href: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'primary',
      validator: (value) =>
        [
          undefined,
          'primary',
          'secondary',
          'undone',
          'border',
          'border2'
        ].indexOf(value)
    },
    byLabel: {
      type: Boolean,
      default: false
    }
  },
  render(h) {
    const className = [
      this.$style.button,
      this.$style[this.type],
      this.$style[this.color]
    ];
    const displays = {
      'inline-block': 'inline-flex',
      'inline-flex': 'inline-flex',
      block: 'flex',
      flex: 'flex'
    }
    const style = {
      display: displays[this.display],
      width: this.width
    }
    if (this.byLabel) {
      return h('label', {
        attrs: { ...this.$attrs },
        on: { ...this.$listeners },
        class: className,
        style,
      }, this.$slots.default)
    }
    if (!this.to && this.href) {
      return h('a', {
        attrs: { ...this.$attrs },
        on: { ...this.$listeners },
        class: className,
        style,
      }, this.$slots.default)
    }
    if (!this.to && !this.href) {
      return h('button', {
        attrs: { ...this.$attrs },
        on: { ...this.$listeners },
        class: className,
        style,
      }, this.$slots.default)
    }
    return h('nuxt-link', {
      attrs: { ...this.$attrs },
      on: { ...this.$listeners },
      props: {
        to: this.to
      },
      class: className,
      style,
    }, this.$slots.default)
  }
}
</script>
<style lang="scss" module>
.btn_wrapper {
  display: inline-block;
}
.button {
  border: 0;
  background: none;
  cursor: pointer;
  transition: 0.3s;
  display: inline-flex;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  height: 38px;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  text-align: center;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  border-radius: $buttonBorderRadius;
  box-sizing: border-box;
  outline: none;
  vertical-align: bottom;
  font-family: sans-serif;
  &.border {
    background: #fff;
    border: 2px solid $buttonColorPrimary;
    color: $buttonColorPrimary;
    &:hover {
      opacity: 0.8;
    }
  }
  &.border2 {
    background: #fff;
    border: 2px solid $buttonColorSecondary;
    color: $buttonColorSecondary;
    &:hover {
      opacity: 0.8;
    }
  }
  &.primary {
    background: $buttonColorPrimary;
    &:hover {
      opacity: 0.8;
    }
  }
  &.secondary {
    background: $buttonColorSecondary;
    color: $white;
    &:hover {
      opacity: 0.8;
    }
  }
  &.undone {
    background: #fff;
    color: $buttonColorUndone;
  }
}
</style>
