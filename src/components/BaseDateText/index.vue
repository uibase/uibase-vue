<script>
import dayjs from 'dayjs'
export default {
  name: 'BaseDateText',
  props: {
    date: {
      type: [String, Number],
      required: true
    },
    format: {
      type: String,
      default: 'YYYY/MM/DD'
    }
  },
  computed: {
    displayDate() {
      return dayjs(this.date).format(this.format)
    }
  },
  render() {
    return this._v(this.displayDate)
  }
}
</script>
