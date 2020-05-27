<template>
  <transition
    :name="$style.loader"
    :enter-class="$style.loader_enter"
    :enter-active-class="$style.loader_enter_active"
    :enter-to-class="$style.loader_enter_to"
    :leave-class="$style.loader_leave"
    :leave-active-class="$style.loader_leave_active"
    :leave-to-class="$style.loader_leave_to"
    appear="appear"
  >
    <div
      v-bind="$attrs"
      :class="[$style.loader_wrapper, { [$style.inline]: inline }]"
      v-on="$listeners"
    >
      <div :class="$style.loader"></div>
    </div>
  </transition>
</template>
<script>
export default {
  name: 'BaseLoading',
  inheritAttrs: false,
  props: {
    /**
     * インラインで表示するかどうかを変更します
     */
    inline: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" module>
$bg-color: rgba(95, 253, 255, 0.2);
$border-width: 0.5em;
$main-color: #5dcaff;

.loader_wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1002;
  &.inline {
    position: static;
    display: inline-block;
    width: auto;
    height: auto;
    background: transparent;
    vertical-align: middle;
    .loader {
      margin: auto;
    }
  }
}
.loader,
.loader:after {
  border-radius: 50%;
  width: 5em;
  height: 5em;
}
.loader {
  margin: 60px auto;
  font-size: 10px;
  position: relative;
  text-indent: -9999em;
  border-top: $border-width solid $bg-color;
  border-right: $border-width solid $bg-color;
  border-bottom: $border-width solid $bg-color;
  border-left: $border-width solid $main-color;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation: load8 1.1s infinite linear;
  animation: load8 1.1s infinite linear;
}

:global {
  @-webkit-keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes load8 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
}

.loader {
  // Transition
  &_enter,
  &_leave_to {
    opacity: 0;
  }
  &_enter_to {
    opacity: 1;
  }

  &_leave {
    opacity: 1;
  }

  &_leave_active,
  &_enter_active {
    transition: 0.4s;
  }
}
</style>
