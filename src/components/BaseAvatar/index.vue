<template>
  <div :class="$style.base_avatar" :style="styleObject">
    <img :class="$style.image" :src="showImage" />
  </div>
</template>
<script>
export default {
  name: 'BaseAvatar',
  props: {
    size: {
      type: String,
      default: '38px'
    },
    image: {
      type: String,
      default: ''
    }
  },
  computed: {
    styleObject() {
      const size = {
        width: this.size,
        height: this.size
      }
      return {
        backgroundImage: `url(${this.showImage})`,
        ...size
      }
    },
    showImage() {
      if (this.image) return this.image
      return '/img/anonymous.jpg'
    }
  }
}
</script>
<style lang="scss" module>
.base_avatar {
  border-radius: 50%;
  border: 1px solid #fff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  background: center center / cover no-repeat;
  overflow: hidden;
}
.image {
  display: block;
  width: 100%;
  opacity: 0;
}
</style>
