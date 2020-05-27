<script>
export default {
  name: 'BaseDigit',
  props: {
    num: {
      type: [String, Number],
      require: true
    }
  },
  render() {
    if (typeof this.num === 'string') {
      return this._v(parseInt(this.num).toLocaleString())
    }
    return this._v(this.num.toLocaleString())
  }
}
</script>
