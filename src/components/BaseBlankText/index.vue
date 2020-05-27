<template>
  <div v-html="blankText" />
</template>
<script>
export default {
  name: 'BaseBlankText',
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  computed: {
    blankText() {
      let str = this.text
      str = str.replace(/\r\n/g, '<br />')
      str = str.replace(/(\n|\r)/g, '<br />')
      return str
    }
  }
}
</script>
