<template>
  <div :class="customClass">
    <base-button :type="type" :for="name" by-label="by-label"
      ><slot v-if="!fileName">ファイルを選択する</slot
      >{{ fileName }}</base-button
    ><input
      v-if="ready"
      :id="name"
      :class="$style.file_input"
      v-bind="$attrs"
      :disabled="!!disabled"
      @change="onSelectImage"
      type="file"
    />
    <p v-if="!!error" :class="$style.error_text">{{ error }}</p>
  </div>
</template>
<script>
import validate from 'simple-valid'
import BaseButton from '../../BaseButton'

// バリデーションにルール設定
validate.addRule(
  'contains',
  [
    (value, params) => {
      return !params.includes(value)
    }
  ],
  'アップロードできないファイルです'
)

export default {
  name: 'BaseInputFile',
  components: {
    BaseButton
  },
  inheritAttrs: false,
  props: {
    /**
     * ラベルを指定できます
     */
    label: {
      type: String,
      default: ''
    },
    /**
     * 要素の名前を指定します
     */
    name: {
      type: String,
      required: true
    },
    /**
     * エラー時の文言を指定するとエラー表示になります
     */
    error: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'primary',
      validator: (value) =>
        [undefined, 'primary', 'secondary', 'undone', 'border'].indexOf(value)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    reset: {
      type: Boolean,
      default: false
    },
    extensions: {
      type: Array,
      default: () => ['png', 'jpeg', 'jpg', 'gif']
    },
    /**
     * メガバイトで指定
     */
    maxFileSize: {
      type: Number,
      default: null
    },
    maxRect: {
      type: Object,
      default: null
    }
  },
  data: () => ({
    file: null,
    base64: null,
    file_name: '',
    ready: true
  }),
  computed: {
    fileName() {
      return this.file_name
    },
    customClass() {
      return [
        this.$style.file,
        {
          [this.$style.error]: !!this.error
        }
      ]
    }
  },
  methods: {
    onSelectImage(evt) {
      const files = evt.target.files || evt.dataTransfer.files
      this.file = files[0]
      this.createFile(files[0])
      this.file_name = files[0].name
    },
    isImage(ext = '') {
      return ['jpg', 'jpeg', 'png', 'giff', 'tiff', 'bmp'].includes(
        ext.toLowerCase()
      )
    },
    getExtension(name) {
      return name
        .split('.')
        .slice(-1)[0]
        .toLowerCase()
    },
    /**
     * @private
     */
    check(file, extension, image) {
      const test = {}
      const values = {}
      // ファイルサイズチェック
      if (this.maxFileSize) {
        const fileSize = this.maxFileSize * 1000000
        test.filesize = `max:${fileSize}`
        values.filesize = file.size
      }
      if (this.extensions) {
        const extensions = this.extensions.join(',')
        test.extensions = `contains:${extensions}`
        //
        values.extensions = extension
      }
      if (image && this.maxRect) {
        const height = this.maxRect.height
        const width = this.maxRect.width
        test.height = `max:${height}`
        test.width = `max:${width}`

        values.width = image.width
        values.height = image.height
      }
      return validate.execute(values, test)
    },
    resetData() {
      this.file_name = ''
      this.base64 = ''
      this.file = ''
      this.ready = false
      this.$nextTick(() => (this.ready = true))
    },
    createFileEvent(file, base64, extension, image = null) {
      const errors = this.check(file, extension, image)
      if (errors.has()) {
        this.$emit('error', errors.all())
        this.resetData()
      } else {
        this.$emit('change', [this.base64, this.file])
        /**
         * @property {array} base64, fileObject
         */
        if (this.reset) {
          this.resetData()
        }
      }
    },
    createFile(file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        this.base64 = e.target.result
        const extension = this.getExtension(file.name)
        /**
         * load Image if it's image
         */
        if (this.isImage(extension)) {
          const image = new Image()
          image.src = this.base64
          image.onload = (evt) => {
            this.createFileEvent(file, e.target.result, extension, evt.path[0])
          }
        } else {
          this.createFileEvent(file, e.target.result, extension)
        }
      }
      reader.readAsDataURL(file)
    }
  }
}
</script>
<style lang="scss" module>
$borderColor: #e5e5e5;
$errorBorder: #b4251d;
$errorBg: #fff9f8;
$borderRadius: 4px;
.file {
  .file_input {
    display: none;
  }
}
.error_text {
  font-size: 12px;
  color: $deepRed;
}
</style>
