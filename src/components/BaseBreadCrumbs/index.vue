<template>
  <div :class="$style.base_bread_crumbs">
    <div
      v-for="(dist, i) in distance"
      :key="dist.name"
      :class="
        dist.is_home
          ? $style.base_bread_crumbs_home
          : $style.base_bread_crumbs_text
      "
    >
      <nuxt-link
        :class="[
          $style.base_bread_crumbs_link,
          { [$style.base_bread_crumbs_no_link]: !dist.href }
        ]"
        :to="dist.href"
      >
        <template v-if="dist.is_home"
          ><base-icon
            :class="$style.icon"
            size="12px"
            color="blackTrans40"
            name="home"
          />&nbsp;&nbsp;{{ dist.name }}</template
        >
        <template v-else>{{ dist.name }}</template>
      </nuxt-link>
      <base-icon
        v-if="i + 1 !== distance.length"
        :class="$style.base_bread_crumbs_arrow"
        name="arrow-right"
        size="8px"
      />
    </div>
  </div>
</template>
<script>
import BaseIcon from '../BaseIcon'
export default {
  name: 'BaseBreadCrumbs',
  components: {
    BaseIcon
  },
  inheritAttrs: false,
  props: {
    distance: {
      type: Array,
      required: true
    }
  }
}
</script>
<style lang="scss" module>
.base_bread_crumbs {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 12px;
  &_text {
    display: flex;
    align-items: center;
  }
  &_home {
    display: flex;
    align-items: center;
    color: #0F4C81;
  }
  &_arrow {
    margin: 0 8px;
  }
  &_link {
    display: inline-block;
    color: #0F4C81;
    text-decoration: none;
  }
  &_no_link {
    display: inline-block;
    color: $baseFont;
    text-decoration: none;
    cursor: default;
  }
}
.icon {
  vertical-align: top;
}
</style>
