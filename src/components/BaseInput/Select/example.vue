<template>
  <div>
    <p>{{ selected }}</p>
    <base-input-select
      v-model="selected"
      :options="items"
      :reduce="(name) => name.id"
      name="base-input-select-example"
      select-label="name"
    />
  </div>
</template>
<script>
import BaseInputSelect from './index'
export default {
  components: {
    BaseInputSelect
  },
  data: () => ({
    selected: '',
    items: [
      {
        name: 'Apple',
        id: 1
      },
      {
        name: 'Microsoft',
        id: 2
      },
      {
        name: 'Adobe',
        id: 3
      }
    ]
  })
}
</script>
