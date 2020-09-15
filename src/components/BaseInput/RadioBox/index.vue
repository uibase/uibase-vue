<template>
  <label :class="$style.radio_box" :style="{ height: height }"
    ><input
      :class="$style.radio"
      v-bind="$attrs"
      :value="value"
      :checked="checked === value"
      v-on="inputListeners"
      type="radio"/><span :class="$style.label"
      ><span :class="$style.circle"></span><slot></slot></span
  ></label>
</template>
<script>
export default {
  name: 'BaseInputRadioBox',
  inheritAttrs: false,
  model: {
    prop: 'checked',
    event: 'input'
  },
  props: {
    value: {
      type: [Number, String],
      default: ''
    },
    checked: {
      type: [Boolean, String],
      default: false
    },
    height: {
      type: String,
      default: '38px'
    }
  },
  computed: {
    inputListeners() {
      return Object.assign({}, this.$listeners, {
        input: (event) => {
          this.$emit('input', event.target.value)
        }
      })
    }
  }
}
</script>
<style lang="scss" module>
.radio_box {
  display: flex;
  padding: 0 8px;
  border-radius: 4px;
  background: #fff;
  font-size: 14px;
  align-items: center;
  border: 1px solid #E7E7E7;
  box-sizing: border-box;
  .circle {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    margin-right: 4px;
    border: 2px solid rgba(20, 15, 15, 0.3);
    border-radius: 50%;
    vertical-align: middle;
    box-sizing: border-box;
    &:before {
      content: '';
      display: block;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #81260F;
      opacity: 0;
      transition: all 0.1s linear;
    }
  }
  .radio {
    display: none;
    &:checked {
      + .label {
        font-weight: bold;
        .circle {
          &:before {
            opacity: 1;
          }
        }
      }
    }
  }
}
</style>
