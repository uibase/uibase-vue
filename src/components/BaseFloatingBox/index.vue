<template>
  <transition
    :name="$style.floating_box"
    :enter-class="$style.floating_box_enter"
    :enter-active-class="$style.floating_box_enter_active"
    :enter-to-class="$style.floating_box_enter_to"
    :leave-class="$style.floating_box_leave"
    :leave-active-class="$style.floating_box_leave_active"
    :leave-to-class="$style.floating_box_leave_to"
    @leave="closing"
    appear="appear"
  >
    <base-box
      v-bind="$attrs"
      :class="[$style.floating_box, $style[position]]"
      v-on="$listeners"
      type="white"
    >
      <slot />
    </base-box>
  </transition>
</template>
<script>
import BaseBox from '../BaseBox/index'
export default {
  name: 'BaseFloatingBox',
  components: { BaseBox },
  inheritAttrs: true,
  props: {
    closable: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: 'relative'
    }
  },
  mounted() {
    setTimeout(() => {
      if (this.closable) {
        document.addEventListener('click', this.closeByWindowClick)
      }
    }, 400)
  },
  destroyed() {
    if (this.closable) {
      document.removeEventListener('click', this.closeByWindowClick)
    }
  },
  methods: {
    closing(el, done) {
      setTimeout(() => {
        done()
      }, 400)
    },
    closeByWindowClick(evt) {
      const closestElement = evt.target.closest(`.${this.$style.floating_box}`)
      if (!closestElement) {
        this.$emit('close')
      }
    }
  }
}
</script>
<style lang="scss" module>
.floating_box {
  transition: 0.4s;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.floating_box_enter,
.floating_box_leave_to {
  opacity: 0;
  top: -10px;
}

.floating_box_enter,
.floating_box_leave_to {
  opacity: 0;
}

.floating_box_enter_to {
  opacity: 1;
  top: 0;
  .floating_box_bg {
    opacity: 1;
  }
}

.floating_box_enter_to {
  opacity: 1;
}

.floating_box_leave {
  opacity: 1;
  top: 0;
}

.floating_box_leave {
  opacity: 1;
}

.floating_box_leave_active {
  transition: 0.4s;
}
</style>
