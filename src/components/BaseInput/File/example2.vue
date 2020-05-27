<template>
  <div>
    <img v-show="selectedFile" :src="selectedFile" width="300" alt="" />
    <base-input-file @change="setFile" name="test-file-me-2" reset />
  </div>
</template>
<script>
import axios from 'axios'
import BaseInputFile from '../../BaseInput/File'

export default {
  components: {
    BaseInputFile
  },
  data: () => ({
    selectedFile: null,
    token: ''
  }),
  methods: {
    setFile([base64, file]) {
      const formData = new FormData()
      formData.append('attachment', file)
      /**
       * モックサーバーに画像を送信
       */
      return axios
        .post('http://httpbin.org/anything', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then((response) => {
          this.selectedFile = response.data.files.attachment
        })
    }
  }
}
</script>
