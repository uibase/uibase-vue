<template>
  <div>
    <p>{{ value }}</p>
    <base-input-text-area v-model="value" name="test-text-area" />
  </div>
</template>
<script>
import BaseInputTextArea from './index'
export default {
  components: {
    BaseInputTextArea
  },
  data: () => ({
    value: ''
  })
}
</script>
