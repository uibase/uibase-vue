<template>
  <div :class="customClass">
    <label v-if="label" :class="$style.label" :for="name">{{ label }}</label>
    <div :class="$style.form_input_area">
      <div v-if="this.$slots.prepend" :class="$style.form_input_prepend">
        <slot name="prepend" />
      </div>
      <input
        :id="name"
        :class="[$style.form_input, $style[`align_${textAlign}`]]"
        v-bind="$attrs"
        v-on="inputListeners"
      />
      <div v-if="this.$slots.append" :class="$style.form_input_append">
        <slot name="append" />
      </div>
    </div>
    <p v-if="error !== true && !!error" :class="$style.error_txt">
      {{ error }}
    </p>
  </div>
</template>
<script>
import mixin from '../mixins'
export default {
  name: 'BaseInputField',
  mixins: [mixin],
  inheritAttrs: false,
  props: {
    /**
     * prependおよびappendの見た目を指定できます
     */
    look: {
      type: String,
      default: 'inset',
      validator: (value) =>
        [
          '',
          'inset',
          'divide',
          'none',
          'inset_divide',
          'inset_none',
          'divide_inset',
          'divide_none',
          'none_divide',
          'none_inset'
        ].indexOf(value)
    },
    /**
     * ラベルを指定できます
     */
    label: {
      type: String,
      default: ''
    },
    /**
     * 要素の名前を指定します
     */
    name: {
      type: String,
      required: true
    },
    /**
     * エラー時の文言を指定するとエラー表示になります
     * Booleanでtrueを渡すと、単純にエラーのカラーリングになります
     */
    error: {
      type: [String, Boolean],
      default: ''
    },
    /**
     * 背景の色を透明にするかどうかのフラグ
     */
    trans: {
      type: Boolean,
      default: false
    },
    textAlign: {
      type: [String],
      default: 'left'
    }
  },
  computed: {
    customClass() {
      return [
        this.$style.form,
        {
          [this.$style.has_prepend]: !!this.$slots.prepend,
          [this.$style.has_append]: !!this.$slots.append,
          [this.$style.error]: !!this.error,
          [this.$style.transparent]: this.trans
        },
        this.$style[this.look]
      ]
    }
  }
}
</script>
<style lang="scss" module>
$borderColor: #e5e5e5;
$errorBorder: #b4251d;
$errorBg: #fff9f8;
$borderRadius: 4px;

.form_input_area {
  height: 38px;
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 4px;
}
.transparent .form_input_area {
  background: transparent;
}
.transparent .form_input_area .form_input {
  background: #fff;
}

.error .form_input_area {
  border-color: $errorBorder;
}

.divide_none .form_input_area {
  border-top: 0;
  border-bottom: 0;
  border-right: 0;
}

.form_input {
  height: 38px;
  display: block;
  width: 100%;
  font-size: 14px;
  padding: 8px;
  box-sizing: border-box;
  flex: 1;
  outline: none;
  background: transparent;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
}

.error .form_input {
  border-color: $errorBorder !important;
  background-color: $errorBg !important;
}
.divide.has_prepend .form_input,
.divide_inset.has_prepend .form_input,
.divide_none.has_prepend .form_input {
  border-left: 1px solid #e5e5e5;
  border-radius: 0 4px 4px 0;
}
.divide.has_append .form_input {
  border-right: 1px solid #e5e5e5;
  border-radius: 4px 0 0 4px;
}
.divide.has_append.has_prepend .form_input {
  border-right: 1px solid #e5e5e5;
  border-left: 1px solid #e5e5e5;
  border-radius: 0;
}
.inset.has_prepend .form_input,
.inset_divide.has_prepend .form_input,
.inset_none.has_prepend .form_input {
  border-left: 0;
  border-radius: 0 4px 4px 0;
}
.inset.has_append .form_input {
  border-right: 0;
  border-radius: 4px 0 0 4px;
}
.inset.has_append.has_prepend .form_input {
  border-right: 0;
  border-left: 0;
  border-radius: 0;
}
.divide_inset.has_append .form_input {
  border-left: 1px solid #e5e5e5;
  border-right: 0;
  border-radius: 4px 0 0 4px;
}
.divide_inset.has_append.has_prepend .form_input {
  border-left: 1px solid #e5e5e5;
  border-right: 0;
  border-radius: 0;
}
.divide_none.has_append .form_input {
  border-right: 1px solid #e5e5e5;
  border-radius: 4px;
}
.divide_none.has_append.has_prepend .form_input {
  border-right: 1px solid #e5e5e5;
  border-radius: 0 4px 4px 0;
}
.inset_divide.has_append .form_input {
  border-radius: 4px 0 0 4px;
}
.inset_divide.has_append.has_prepend .form_input {
  border-radius: 0;
}
.inset_none.has_append .form_input {
  border-radius: 4px;
}
.inset_none.has_append.has_prepend .form_input {
  border-radius: 0 4px 4px 0;
}
.none_divide.has_append .form_input {
  border-radius: 4px 0 0 4px;
}
.none_inset.has_append .form_input {
  border-right: 0;
  border-radius: 4px 0 0 4px;
}
.form_input_prepend,
.form_input_append {
  font-size: 13px;
  line-height: 0;
  height: 38px;
  box-sizing: border-box;
  padding: 0 8px;
  border: 1px solid #e5e5e5;
  display: flex;
  align-items: center;
}

.error .form_input_prepend,
.error .form_input_append {
  background-color: #fff9f8;
  border-color: #b4251d;
}

.form_input_prepend {
  border-right: 0;
  border-radius: 4px 0 0 4px;
}

.none .form_input_prepend,
.none_divide .form_input_prepend,
.none_inset .form_input_prepend {
  border: 0;
}
.error.none .form_input_prepend,
.error.none_divide .form_input_prepend,
.error.none_inset .form_input_prepend {
  background: none;
}
.form_input_append {
  border-left: 0;
  border-radius: 0 4px 4px 0;
}

.none .form_input_append,
.divide_none .form_input_append,
.inset_none .form_input_append {
  border: 0;
}
.error.none .form_input_append,
.error.divide_none .form_input_append,
.error.inset_none .form_input_append {
  background: none;
}

.label {
  font-size: 12px;
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
}

.error_txt {
  font-size: 12px;
  margin: 8px 0;
  color: #b4251d;
}
.align_left {
  text-align: left;
}
.align_right {
  text-align: right;
}
</style>
