<template>
  <div>
    <base-input-rich-text :content="content" @update="update" />
    <code class="code">{{ content }}</code>
  </div>
</template>
<script>
import BaseInputRichText from './index'
export default {
  components: {
    BaseInputRichText
  },
  data() {
    return {
      content: '<p>content</p>'
    }
  },
  methods: {
    update({ json, html }) {
      console.log(html)
      this.content = html
    }
  }
}
</script>
<style scoped>
.code {
  display: block;
  background: #eee;
  padding: 16px;
  margin: 8px 0;
}
</style>
