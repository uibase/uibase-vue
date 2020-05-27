<template>
  <tr :class="header ? $style.table_header : ''">
    <slot />
  </tr>
</template>
<script>
export default {
  name: 'BaseTableRow',
  props: {
    header: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" module>
.table_header {
  width: 100%;
  height: 28px;
  font-size: 12px;
  color: $white;
  background-color: $primary;
  text-align: left;
  border-radius: 24px 0 0 24px;
}
.table_header th:first-child {
  border-radius: 100px 0 0 100px;
}
.table_header th:last-child {
  border-radius: 0 100px 100px 0;
}
</style>
