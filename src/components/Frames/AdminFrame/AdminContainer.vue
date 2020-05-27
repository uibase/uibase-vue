<template>
  <div :class="[$style.area_body, $style[bg]]">
    <div v-if="breadCrumbs" :class="$style.bread_crumbs">
      <base-bread-crumbs :distance="breadCrumbs" />
    </div>
    <div v-if="title" :class="$style.title_area">
      <h1 :class="$style.title">{{ title }}</h1>
      <div v-if="$slots.util" :class="$style.util">
        <slot name="util" />
      </div>
    </div>
    <section :class="[$style.container, { [$style.wide]: wide }]">
      <div :class="$style.content">
        <slot name="default" /><slot name="content" />
      </div>
    </section>
  </div>
</template>
<script>
import BaseBreadCrumbs from '../../BaseBreadCrumbs/index'
export default {
  name: 'BaseAdminContainer',
  components: { BaseBreadCrumbs },
  props: {
    breadCrumbs: {
      type: Array,
      default: null
    },
    title: {
      type: [String, Number],
      default: ''
    },
    wide: {
      type: Boolean,
      default: false
    },
    bg: {
      type: String,
      default: 'grayLight',
      validator: (value) => ['white', 'grayLight'].includes(value)
    }
  }
}
</script>
<style lang="scss" module>
.container {
  margin: 20px 32px;
  max-width: 1000px;
  min-width: 1000px;
  padding-bottom: 120px;
}
.container.wide {
  max-width: none;
}
.bread_crumbs {
  padding: 8px 32px;
  background: $white;
}

.title_area {
  display: flex;
  padding: 16px 32px;
  align-items: center;
  min-width: 1000px;
  background-color: $containerHeaderBackgroundColor;
  border-bottom: 1px solid $blackTrans10;
  margin: 0 0 23px 0;
}
.title {
  font-size: 28px;
  color: $containerHeaderColor;
  margin: 0 16px 0 0;
}
.util {
  flex: 1;
}
.area_body {
  overflow-y: scroll;
  grid-area: main;
}
.grayLight {
  background: $grayLight;
}
.white {
  background: $white;
}
</style>
