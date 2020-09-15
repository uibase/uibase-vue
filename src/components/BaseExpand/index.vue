<template>
  <section :class="[$style.expand, { [$style.expand_open]: state }]">
    <base-spacer size="l">
      <div :class="$style.expand_title">
        <h1 v-if="title" :class="$style.expand_title_text">{{ title }}</h1>
        <div v-if="$slots.title" :class="$style.expand_title_area">
          <slot name="title"></slot>
        </div>
        <base-icon
          :class="$style.expand_arrow"
          @click="state = !state"
          name="arrow-down"
          size="14px"
          color="blackTrans40"
        />
      </div>
      <div :class="$style.expand_content">
        <slot />
      </div>
    </base-spacer>
  </section>
</template>
<script>
import BaseSpacer from '../BaseSpacer'
import BaseIcon from '../BaseIcon'
export default {
  name: 'BaseExpand',
  components: {
    BaseSpacer,
    BaseIcon
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    open: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      state: this.$props.open
    }
  }
}
</script>
<style lang="scss" module>
.expand {
  background: #fff;
  border-radius: $boxBorderRadius;
}
.expand_title {
  display: flex;
  align-items: center;
}
.expand_title_area {
  flex: 1;
}
.expand_title_text {
  font-size: 14px;
  color: #0F4C81;
  flex: 1;
  margin: 0;
}
.expand_arrow {
  transition: 0.3s;
  cursor: pointer;
}
.expand_open .expand_arrow {
  transform: rotate(180deg);
}
.expand_content {
  max-height: 0;
  overflow: hidden;
  transition: 0.3s;
}
.expand_open .expand_content {
  padding-top: 16px;
  max-height: 1200px;
  overflow: inherit;
}
</style>
