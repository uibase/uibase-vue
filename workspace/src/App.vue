<template>
  <base-box type="white" padding="12px">
    <base-box-title>This is Title.</base-box-title>
    <div>
      <base-button>button</base-button>
    </div>
    <div>
      <base-button type="secondary" size="large">button secondary large</base-button>
    </div>
    <div>
      <base-button type="border" size="small">border small</base-button>
    </div>
    <template v-slot:footer>
      footer for base-box
    </template>
  </base-box>
</template>
<script>
import BaseButton from '../../src/vue/components/Button/button.ejs'
import BaseBox from '../../src/vue/components/Box/box.ejs'
import BaseBoxTitle from '../../src/vue/components/Box/box-title.ejs'
export default {
  components: { BaseButton, BaseBox, BaseBoxTitle },
  name: 'App'
}
</script>
