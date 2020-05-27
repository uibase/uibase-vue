<template>
  <h2 :class="$style.title"><slot /></h2>
</template>
<script>
export default {
  name: 'BaseBoxTitle'
}
</script>
<style lang="scss" module>
.title {
  font-size: 18px;
  margin: 0 0 20px 0;
}
</style>
