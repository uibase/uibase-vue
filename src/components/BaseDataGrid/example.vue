<template>
  <base-data-grid
    :column-defs="columnDefs"
    :row-data="rowData"
    @cell-clicked="click"
    style="width: 500px; height: 500px;"
  />
</template>
<script>
import BaseDataGrid from '../BaseDataGrid/index'
export default {
  components: { BaseDataGrid },
  data() {
    return {
      columnDefs: null,
      rowData: null
    }
  },
  beforeMount() {
    this.columnDefs = [
      { headerName: 'Make', field: 'make', checkboxSelection: true },
      { headerName: 'Model', field: 'model' },
      { headerName: 'Price', field: 'price' }
    ]

    fetch('https://api.myjson.com/bins/15psn9')
      .then((result) => result.json())
      .then((rowData) => (this.rowData = rowData))
  },
  methods: {
    click(evt) {
      console.log(evt)
    }
  }
}
</script>
