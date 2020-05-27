<template>
  <div>
    <div :style="{ display: 'flex' }">
      <div :style="{ 'margin-right': '16px' }">
        <base-input-field
          v-model.number="maxFileSize"
          label="maxFileSize"
          name="maxFileeSize"
        >
          <template v-slot:append>MB</template>
        </base-input-field>
      </div>
      <div>
        <base-input-field
          v-model.number="maxRect.height"
          label="maxRect.height"
          name="maxRectHeight"
        >
          <template v-slot:append>px</template>
        </base-input-field>
        <br />
        <base-input-field
          v-model.number="maxRect.width"
          label="maxRect.width"
          name="maxRectWidth"
        >
          <template v-slot:append>px</template>
        </base-input-field>
      </div>
    </div>
    <hr />
    <img v-show="selectedFile" :src="selectedFile" width="300" alt="" />

    <base-input-file
      :max-file-size="maxFileSize"
      :max-rect="maxRect"
      :error="errorTxt"
      @change="setFile"
      @error="getError"
      name="test-file-me-3"
    />
    <hr />
    <p>Error Condition</p>
    <pre>
      <code>{{error}}</code>
    </pre>
  </div>
</template>
<script>
import axios from 'axios'
import BaseInputField from '../Field/index'
import BaseInputFile from './index'

export default {
  components: {
    BaseInputField,
    BaseInputFile
  },
  data: () => ({
    selectedFile: null,
    token: '',
    error: null,
    errorTxt: '',
    maxRect: {
      height: 100,
      width: 100
    },
    maxFileSize: 1
  }),
  methods: {
    getError(error) {
      this.selectedFile = null
      this.errorTxt = 'エラーが発生しています！'
      this.error = error
    },
    setFile([base64, file]) {
      // 初期化
      this.selectedFile = null
      this.error = null
      this.errorTxt = ''
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
