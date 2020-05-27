<template>
  <ag-grid-vue
    v-bind="$attrs"
    v-on="$listeners"
    class="ag-theme-balham ag-theme-base-grid"
  />
</template>
<script>
import { AgGridVue } from 'ag-grid-vue'
export default {
  name: 'BaseDataGrid',
  components: { AgGridVue }
}
</script>
<style lang="scss" module>
:global {
  .ag-theme-balham.ag-theme-base-grid {
    .ag-header {
      background: $deepBlue;
      color: $white;
    }
  }
}
</style>
