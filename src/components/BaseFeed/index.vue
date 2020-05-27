<template>
  <section :class="$style.wrap" :style="customStyle">
    <h1 :class="$style.head">{{ head }}</h1>

    <p :class="$style.count">{{ countLabel }}</p>
  </section>
</template>

<script>
export default {
  name: 'BaseFeed',
  props: {
    head: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      default: 0
    },
    width: {
      type: Number,
      default: 0
    },
    vertical: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    customStyle() {
      return {
        width: this.width ? `${this.width}px` : 'auto',
        flexDirection: this.vertical ? 'column' : 'row'
      }
    },
    countLabel() {
      if (!this.count) return '0'

      const val = Number(this.count)

      if (val < 1000) return val.toString()
      if (val >= 1000 && val < 1000000) return (val / 1000).toString() + 'K'
      if (val >= 1000000) return (val / 1000000).toString() + 'M'

      return '0'
    }
  }
}
</script>

<style lang="scss" module>
.wrap {
  width: 56px;
  display: flex;
  align-items: center;
}

.head {
  color: rgba(20, 20, 15, 0.5);
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 16px;
  margin-top: 0;
  text-align: center;
}

.count {
  color: $deepBlue;
  font-weight: 600;
  margin: 0;
  text-align: center;
}
</style>
