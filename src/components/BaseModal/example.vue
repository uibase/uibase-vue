<template>
  <div>
    <p>{{ show ? 'モーダル表示中' : 'モーダル非表示中' }}</p>
    <base-button @click="show = true">モーダル表示</base-button>
    <base-modal v-if="show" @close="show = false">
      <template v-slot:header-title>タイトルです</template>
      <template v-slot:body>
        body is here
      </template>
    </base-modal>
  </div>
</template>
<script>
import BaseButton from '../BaseButton'
import BaseModal from './index'

export default {
  components: {
    BaseModal,
    BaseButton
  },
  data: () => ({
    show: false
  })
}
</script>
