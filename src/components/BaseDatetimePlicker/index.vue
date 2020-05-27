<script type="text/jsx">
import DatePicker from 'vue-ctk-date-time-picker'
export default {
  name: 'BaseDatetimePicker',
  components: {
    DatePicker
  },
  render(h) {
    return h('date-picker', {
      attrs: this.$attrs,
      on: this.$listeners,
      scopedSlots: this.$scopedSlots
    })
  }
}
</script>
<style lang="scss" module></style>
