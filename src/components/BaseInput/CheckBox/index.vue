<template>
  <label :class="[$style.checkbox, { [$style.with_box]: withBox }]"
    ><input
      v-model="isChecked"
      :class="$style.check"
      v-bind="$attrs"
      :value="myValue"
      v-on="inputListeners"
      type="checkbox"
    /><span :class="$style.label"
      ><span :class="$style.box"></span><slot
    /></span>
  </label>
</template>
<script>
export default {
  name: 'BaseInputCheckBox',
  inheritAttrs: false,
  model: {
    prop: 'checked',
    event: 'input'
  },
  props: {
    value: {
      type: [String, Number],
      default: ''
    },
    checked: {
      type: [Boolean, Array],
      required: true
    },
    withBox: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      initialChecked: this.$props.checked
    }
  },
  computed: {
    isChecked: {
      get() {
        if (Array.isArray(this.checked)) {
          return this.checked.includes(this.value)
        } else {
          return this.checked
        }
      },
      set(value) {
        if (Array.isArray(this.checked)) {
          const checked = [...this.checked]
          if (value) {
            checked.push(this.value)
          } else {
            checked.splice(checked.indexOf(this.value), 1)
          }
          this.$emit('input', checked)
        } else {
          this.$emit('input', value)
        }
        return value
      }
    },
    myValue() {
      if (Array.isArray(this.checked)) {
        return this.value
      } else {
        return this.initialChecked
      }
    },
    inputListeners() {
      const events = { input: () => {} }
      return Object.assign({}, this.$listeners, events)
    }
  }
}
</script>
<style lang="scss" module>
.checkbox {
  display: block;
  font-size: 14px;
  cursor: pointer;
  &.with_box {
    padding: 16px;
    border-radius: 4px;
    background: #fff;
  }
  .box {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    margin-right: 14px;
    border: 2px solid #b3b1b1;
    background: #fff;
    border-radius: 4px;
    vertical-align: middle;
    box-sizing: border-box;
    vertical-align: middle;
    &:before {
      content: '';
      display: block;
      width: 12px;
      height: 6px;
      border-left: 3px solid #54a7dc;
      border-bottom: 3px solid #54a7dc;
      opacity: 0;
      transition: all 0.1s linear;
      transform: rotate(-90deg) translate(2px, -2px);
    }
  }
  .check {
    display: none;
    &:checked {
      + .label {
        font-weight: bold;
        .box {
          &:before {
            opacity: 1;
            transform: rotate(-45deg) translate(2px, -2px);
          }
        }
      }
    }
  }
}
</style>
