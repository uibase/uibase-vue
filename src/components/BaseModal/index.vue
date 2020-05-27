<template>
  <transition
    :name="$style.modal"
    :enter-class="$style.modal_enter"
    :enter-active-class="$style.modal_enter_active"
    :enter-to-class="$style.modal_enter_to"
    :leave-class="$style.modal_leave"
    :leave-active-class="$style.modal_leave_active"
    :leave-to-class="$style.modal_leave_to"
    @leave="closing"
    appear="appear"
  >
    <div :class="customClass">
      <section :class="$style.modal_content" :style="modalWidth">
        <div :class="$style.modal_content_header">
          <h1 :class="$style.modal_content_header_title">
            <slot name="header-title"></slot>
          </h1>
          <div
            :class="$style.modal_content_header_close"
            @click.prevent.stop="$emit('close')"
          >
            <base-icon name="x" size="20" color="deepBlue" />
          </div>
        </div>
        <div :class="$style.modal_content_body" :style="minHeight">
          <div :class="$style.modal_content_body_inner">
            <slot name="body"></slot>
          </div>
        </div>
        <div v-if="this.$slots.footer" :class="$style.modal_content_footer">
          <slot name="footer"></slot>
        </div>
      </section>
      <div :class="$style.modal_bg"></div>
    </div>
  </transition>
</template>
<script>
import BaseIcon from '../BaseIcon'
export default {
  name: 'BaseModal',
  components: {
    BaseIcon
  },
  props: {
    position: {
      type: String,
      default: 'center',
      validator: (value) => [undefined, 'center', 'top'].indexOf(value)
    },
    width: {
      type: String,
      default: '800px'
    },
    height: {
      type: String,
      default: 'auto'
    }
  },
  computed: {
    customClass() {
      return [this.$style.modal, this.$style[`modal_position_${this.position}`]]
    },
    minHeight() {
      return {
        'min-height': this.height
      }
    },
    modalWidth() {
      return {
        width: this.width
      }
    }
  },
  methods: {
    closing(el, done) {
      setTimeout(() => {
        done()
      }, 400)
    }
  }
}
</script>
<style lang="scss" module>
.modal {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.modal_position_top {
  margin-top: 32px;
}
.modal_position_center {
  align-items: center;
}

.modal_content {
  position: relative;
  top: 0;
  background: #fff;
  z-index: 1001;
  display: grid;
  max-height: 90%;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  grid-template:
    'modal-header' auto
    'modal-body' 1fr
    'modal-footer' auto / 1fr;
  transition: 0.4s;
  transition-delay: 0.2s;
}

.modal_content_header {
  grid-area: modal-header;
  height: 52px;
  line-height: 52px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  position: relative;
}
.modal_content_header_close {
  position: absolute;
  top: 4px;
  left: 16px;
  cursor: pointer;
}
.modal_content_header_title {
  padding: 0;
  margin: 0;
  text-align: center;
  font-size: 16px;
  color: $primary;
}

.modal_content_body {
  grid-area: modal-body;
  overflow-y: scroll;
}

.modal_content_body_inner {
  height: 100%;
}

.modal_content_footer {
  grid-area: modal-footer;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal_bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  transition: 0.4s;
}

.modal_enter .modal_content,
.modal_leave_to .modal_content {
  opacity: 0;
  top: -10px;
}

.modal_enter .modal_bg,
.modal_leave_to .modal_bg {
  opacity: 0;
}

.modal_enter_to .modal_content {
  opacity: 1;
  top: 0;
  .modal_bg {
    opacity: 1;
  }
}

.modal_enter_to .modal_bg {
  opacity: 1;
}

.modal_leave .modal_content {
  opacity: 1;
  top: 0;
}

.modal_leave .modal_bg {
  opacity: 1;
}

.modal_leave_active .modal_content {
  transition: 0.4s;
}
</style>
