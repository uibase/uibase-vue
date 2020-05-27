<template>
  <div :class="customClass">
    <label v-if="label" :class="$style.label" :for="name">{{ label }}</label>
    <div :class="$style.select_input_area">
      <div v-if="this.$slots.prepend" :class="$style.select_input_prepend">
        <slot name="prepend" />
      </div>
      <v-select
        :id="name"
        v-bind="$attrs"
        :label="selectLabel"
        :selected="selected"
        @input="(value) => $emit('input', value)"
      />
      <div v-if="this.$slots.append" :class="$style.select_input_append">
        <slot name="append" />
      </div>
    </div>
    <p v-if="error !== true && !!error" :class="$style.error_txt">
      {{ error }}
    </p>
  </div>
</template>
<script>
import VSelect from 'vue-select'
export default {
  name: 'BaseInputSelect',
  components: {
    VSelect
  },
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    /**
     * prependおよびappendの見た目を指定できます
     */
    selected: {
      type: String,
      default: ''
    },
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
    selectLabel: {
      type: String
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
     */
    error: {
      type: [String, Boolean],
      default: ''
    }
  },
  computed: {
    customClass() {
      return [
        this.$style.select,
        {
          [this.$style.has_prepend]: !!this.$slots.prepend,
          [this.$style.has_append]: !!this.$slots.append,
          [this.$style.error]: !!this.error
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

.select_input_area {
  height: 38px;
  display: flex;
  align-items: center;
}

.error .select_input_area {
  border-color: $errorBorder;
}

.divide_none .select_input_area {
  border-top: 0;
  border-bottom: 0;
  border-right: 0;
}

.select_input_prepend,
.select_input_append {
  font-size: 13px;
  line-height: 0;
  height: 38px;
  box-sizing: border-box;
  padding: 0 8px;
  border: 1px solid $borderColor;
  display: flex;
  align-items: center;
}

.error .select_input_prepend,
.error .select_input_append {
  background-color: $errorBg;
  border-color: $errorBorder;
}

.select_input_prepend {
  border-right: 0;
  border-radius: $borderRadius 0 0 $borderRadius;
}

.none .select_input_prepend,
.none_divide .select_input_prepend,
.none_inset .select_input_prepend {
  border: 0;
}

.error.none .select_input_prepend,
.error.none_divide .select_input_prepend,
.error.none_inset .select_input_prepend {
  background: none;
}

.select_input_append {
  border-left: 0;
  border-radius: 0 $borderRadius $borderRadius 0;
}

.none .select_input_append,
.divide_none .select_input_append,
.inset_none .select_input_append {
  border: 0;
}

.error.none .select_input_append,
.error.divide_none .select_input_append,
.error.inset_none .select_input_append {
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

.select {
  :global {
    .v-select {
      flex: 1;
    }
    .vs__dropdown-toggle {
      height: 38px;
      font-size: 14px;
      box-sizing: border-box;
      outline: none;
      background: #fff;
      border: 1px solid $borderColor;
      border-radius: $borderRadius;
    }
  }
}

.error :global .vs__dropdown-toggle {
  border-color: $errorBorder !important;
  background-color: $errorBg;
}

.divide.has_prepend :global .vs__dropdown-toggle,
.divide_inset.has_prepend :global .vs__dropdown-toggle,
.divide_none.has_prepend :global .vs__dropdown-toggle {
  border-left: 1px solid $borderColor;
  border-radius: 0 $borderRadius $borderRadius 0;
}

.divide.has_append :global .vs__dropdown-toggle {
  border-right: 1px solid $borderColor;
  border-radius: $borderRadius 0 0 $borderRadius;
}

.divide.has_append.has_prepend :global .vs__dropdown-toggle {
  border-right: 1px solid $borderColor;
  border-left: 1px solid $borderColor;
  border-radius: 0;
}
.inset.has_prepend :global .vs__dropdown-toggle,
.inset_divide.has_prepend :global .vs__dropdown-toggle,
.inset_none.has_prepend :global .vs__dropdown-toggle {
  border-left: 0;
  border-radius: 0 $borderRadius $borderRadius 0;
}
.inset.has_append :global .vs__dropdown-toggle {
  border-right: 0;
  border-radius: $borderRadius 0 0 $borderRadius;
}
.inset.has_append.has_prepend :global .vs__dropdown-toggle {
  border-right: 0;
  border-left: 0;
  border-radius: 0;
}
.divide_inset.has_append :global .vs__dropdown-toggle {
  border-left: 1px solid $borderColor;
  border-right: 0;
  border-radius: $borderRadius 0 0 $borderRadius;
}
.divide_inset.has_append.has_prepend :global .vs__dropdown-toggle {
  border-left: 1px solid $borderColor;
  border-right: 0;
  border-radius: 0;
}
.divide_none.has_append :global .vs__dropdown-toggle {
  border-right: 1px solid $borderColor;
  border-radius: $borderRadius;
}
.divide_none.has_append.has_prepend :global .vs__dropdown-toggle {
  border-right: 1px solid $borderColor;
  border-radius: 0 $borderRadius $borderRadius 0;
}
.inset_divide.has_append :global .vs__dropdown-toggle {
  border-radius: $borderRadius 0 0 $borderRadius;
}
.inset_divide.has_append.has_prepend :global .vs__dropdown-toggle {
  border-radius: 0;
}
.inset_none.has_append :global .vs__dropdown-toggle {
  border-radius: $borderRadius;
}
.inset_none.has_append.has_prepend :global .vs__dropdown-toggle {
  border-radius: 0 $borderRadius $borderRadius 0;
}
.none_divide.has_append :global .vs__dropdown-toggle {
  border-radius: $borderRadius 0 0 $borderRadius;
}
.none_inset.has_append :global .vs__dropdown-toggle {
  border-right: 0;
  border-radius: $borderRadius 0 0 $borderRadius;
}
</style>
