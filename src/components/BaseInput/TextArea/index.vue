<template>
  <div :class="customClass">
    <label :for="name" :class="$style.label">{{ label }}</label>
    <textarea
      :id="name"
      :class="$style.textarea"
      v-bind="$attrs"
      v-on="inputListeners"
    />
    <p v-if="!!error" :class="$style.error_txt">{{ error }}</p>
  </div>
</template>
<script>
import mixin from '../mixins'

export default {
  name: 'BaseInputTextArea',
  mixins: [mixin],
  inheritAttrs: false,
  props: {
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
     */
    error: {
      type: String,
      default: ''
    }
  },
  computed: {
    customClass() {
      return [
        this.$style.text_area,
        {
          [this.$style.error]: !!this.error
        }
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
.text_area {
  .textarea {
    display: block;
    width: 100%;
    font-size: 14px;
    padding: 8px;
    box-sizing: border-box;
    flex: 1;
    outline: none;
    background: #fff;
    border: 1px solid $borderColor;
    border-radius: $borderRadius;
    resize: vertical;
    @at-root .error .textarea {
      border-color: $errorBorder !important;
      background-color: $errorBg;
    }
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
}
</style>
