<template>
  <div :class="$style.notification" v-on="$listeners">
    <base-number-budge v-if="num" :class="$style.number">
      {{ num }}
    </base-number-budge>
    <BaseIcon :class="$style.icon" :color="color" name="bell" size="30px" />
  </div>
</template>
<script>
import BaseNumberBudge from '../BaseNumberBudge'
import BaseIcon from '../BaseIcon'
export default {
  name: 'BaseIconNotification',
  components: {
    BaseNumberBudge,
    BaseIcon
  },
  props: {
    color: {
      type: String,
      default: 'deepBlue'
    },
    num: {
      type: [Number, String],
      default: 0
    }
  }
}
</script>
<style lang="scss" module>
.notification {
  position: relative;
  user-select: none;
}
.number {
  position: absolute;
  top: 0px;
  left: 15px;
}
</style>
