<template>
  <div :class="[$style.area_body, $style[bg]]">
    <div :class="$style.header">
      <div v-if="breadCrumbs" :class="$style.bread_crumbs">
        <base-bread-crumbs :distance="breadCrumbs" />
      </div>
      <div v-if="title" :class="$style.title_area">
        <h1 :class="$style.title">{{ title }}</h1>
        <div v-if="$slots.util" :class="$style.util">
          <slot name="util" />
        </div>
      </div>
    </div>
    <article :class="[$style.main]" :style="mainGridControl">
      <slot name="default" />
      <slot name="content" />
    </article>
    <div v-if="$slots.footer" :class="$style.footer">
      <slot name="footer" />
    </div>
  </div>
</template>
<script>
import BaseBreadCrumbs from '../../BaseBreadCrumbs/index'
export default {
  name: 'BaseAdminGridContainer',
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
    mainGridMode: {
      type: [Boolean, Object],
      default: false
    },
    padding: {
      type: String,
      default: '20px 32px'
    },
    bg: {
      type: String,
      default: 'grayLight',
      validator: (value) => ['white', 'grayLight'].includes(value)
    }
  },
  computed: {
    mainGridControl() {
      let styles = {}
      if (this.mainGridMode) {
        styles.display = 'grid'
        styles['overflow-y'] = 'hidden'
        if (typeof this.mainGridMode === 'object') {
          styles = { ...styles, ...this.mainGridMode }
        } else {
          styles['grid-template-rows'] = '1fr'
          styles['grid-template-columns'] = '1fr'
        }
      }
      return styles
    }
  }
}
</script>
<style lang="scss" module>
.container {
  margin: 20px 32px;
  padding-bottom: 120px;
}
.bread_crumbs {
  height: 30px;
  padding: 0 32px;
  background: $white;
  display: flex;
  align-items: center;
}

.title_area {
  display: flex;
  padding: 0px 32px;
  height: 50px;
  align-items: center;
  background-color: $containerHeaderBackgroundColor;
  border-bottom: 1px solid $blackTrans10;
  margin: 0;
}
.title {
  font-size: 20px;
  color: $containerHeaderColor;
  margin: 0 16px 0 0;
}
.util {
  flex: 1;
}
.area_body {
  overflow-y: hidden;
  grid-area: main;
  display: grid;
  grid-auto-rows: minmax(min-content, max-content);
  grid-template:
    'header' auto
    'main' 1fr
    'footer' auto / 1fr;
}
.header {
  grid-area: header;
}
.main {
  grid-area: main;
  overflow-y: scroll;
}
.footer {
  grid-area: footer;
  padding: 8px 32px;
  border-top: 1px solid $blackTrans10;
  background: $containerFooterBackgroundColor;
}
.grayLight {
  background: $grayLight;
}
.white {
  background: $white;
}
</style>
