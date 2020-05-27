<template>
  <div>
    <img v-show="selectedFile" :src="selectedFile" width="100" alt="" />
    <base-input-file @change="setFile" name="test-file-me" />
  </div>
</template>
<script>
import BaseInputFile from '../../BaseInput/File'
export default {
  components: {
    BaseInputFile
  },
  data: () => ({
    selectedFile: null
  }),
  methods: {
    setFile([base64, file]) {
      this.selectedFile = base64
      this.$nextTick(() => (this.ready = true))
    }
  }
}
</script>
