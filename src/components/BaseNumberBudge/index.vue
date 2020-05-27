<template>
  <div :class="$style.notification">
    <slot />
  </div>
</template>
<script>
export default {
  name: 'BaseNumberBudge'
}
</script>
<style lang="scss" module>
.notification {
  display: inline-block;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  padding: 3px 5px;
  background: #ff3b31;
  font-size: 10px;
  color: #ffffff;
  line-height: 1;
}
</style>
