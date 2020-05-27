<template>
  <th v-if="header" :class="$style.col_header"><slot /></th>
  <td v-else :class="$style.col"><slot /></td>
</template>
<script>
export default {
  name: 'BaseTableCol',
  props: {
    header: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" module>
.col {
  font-size: 14px;
  padding: 16px;
  border-bottom: 1px solid $blackTrans10;
}
.col_header {
  font-size: 12px;
  padding: 8px 16px;
}
</style>
