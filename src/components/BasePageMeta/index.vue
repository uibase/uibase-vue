<template>
  <div>
    <div :class="$style.page_meta_top">
      <p :class="$style.page_meta_text">並び順</p>
      <base-input-select
        v-model="selected"
        :options="orderOptions"
        :class="$style.select"
        :clearable="false"
        @input="input"
        name="order"
      />
      <p :class="$style.page_meta_count">
        {{ totalCount }}件中 {{ currentMinCount }}〜{{ currentMaxCount }}件表示
      </p>
    </div>
    <hr :class="$style.page_meta_line" />
  </div>
</template>

<script>
import formControlMixin from '../../mixins/formControlMixin'
import BaseInputSelect from '../BaseInput/Select/index'
export default {
  name: 'BasePageMeta',
  components: { BaseInputSelect },
  mixins: [formControlMixin],
  model: {
    prop: 'selected',
    event: 'input'
  },
  props: {
    selected: {
      type: [String, Number],
      required: true
    },
    orderOptions: {
      type: Array,
      required: true
    },
    totalCount: {
      type: Number,
      required: true
    },
    currentMinCount: {
      type: Number,
      required: true
    },
    currentMaxCount: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" module>
.page_meta_top {
  display: flex;
  align-items: baseline;
  font-size: 14px;
}

.page_meta_text {
  margin-right: 8px;
}

.page_meta_count {
  margin-left: auto;
}

.page_meta_line {
  height: 1px;
  border: none;
  background-color: rgba(20, 20, 15, 0.3);
}
.select {
  width: 150px;
}
</style>
