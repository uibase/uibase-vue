<template>
  <div>
    <p>{{ show ? 'ローディング表示中' : 'ローディング非表示中' }}</p>
    <p>{{ inline }}</p>
    <div>
      <base-input-radio-box v-model="inline" name="inline" value="true"
        >Inline: true</base-input-radio-box
      >
      <base-input-radio-box v-model="inline" name="inline" value="false"
        >Inline: false</base-input-radio-box
      >
    </div>
    <base-button @click="toShow">モーダル表示</base-button>
    <base-loading v-show="show" :inline="inline === 'true'" />
  </div>
</template>
<script>
import BaseButton from '../BaseButton'
import BaseInputRadioBox from '../BaseInput/RadioBox'
import BaseLoading from './index'

export default {
  components: {
    BaseLoading,
    BaseButton,
    BaseInputRadioBox
  },
  data: () => ({
    show: false,
    inline: 'true'
  }),
  methods: {
    toShow() {
      this.show = true
      setTimeout(() => {
        this.show = false
      }, 3000)
    }
  }
}
</script>
