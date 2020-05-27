import validator from 'simple-valid'

export default {
  model: {
    prop: 'inputs',
    event: 'input'
  },
  computed: {
    error() {
      return (name) => {
        return typeof this.errors[name] !== 'undefined' &&
          this.errors[name].length > 0
          ? this.errors[name][0]
          : ''
      }
    }
  },
  methods: {
    input() {
      this.$emit('input', this.inputs)
    },
    submit() {
      console.log('submit')
      this.errors = {}
      const hasError = this.updateAndCheckHasError()

      if (hasError) {
        this.$emit('error', this.errors)
      } else {
        this.$emit('submit', this.inputs)
      }
    },
    /**
     * エラーを外から設定
     * @public
     * @param errors
     */
    setError(errors) {
      console.log(errors)
      this.errors = errors
    },
    /**
     * update validation from parent
     */
    updateAndCheckHasError() {
      const errors = (() => {
        if (this.validateCondition !== undefined) {
          return validator.execute(
            this.inputs,
            this.validateCondition.tests,
            this.validateCondition.messages
          )
        } else {
          return false
        }
      })()
      if (errors && errors.has()) {
        this.errors = errors.all()
        this.errorsObject = errors
        return true
      }
      return false
    }
  }
}
