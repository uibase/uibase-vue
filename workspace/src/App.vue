<template>
  <div>
    <base-box type="white" class="box-container">
      <base-header>
        <template v-slot:logo>Logo</template>
        <template v-slot:utilities>utility Area</template>
      </base-header>
    </base-box>
    <base-box type="white" padding="12px">
      <base-box-title>This is Title.</base-box-title>
      <base-icon name="ub-xmark" color="deepRed" />
      <base-icon name="ub-arrow-down" color="deepRed" />
      <div>
        <base-button>button</base-button>
      </div>
      <div>
        <base-button type="secondary" size="large"
          >button secondary large</base-button
        >
      </div>
      <base-number-budge>10</base-number-budge>
      <base-router-link to="/">リンクだよ</base-router-link>
      <base-sidebar-list-item to="/" exact>テスト</base-sidebar-list-item>
      <base-sidebar-list-item to="/test">テストその2</base-sidebar-list-item>
      <div>
        <base-button type="border" size="small">border small</base-button>
      </div>
      <template v-slot:footer>
        footer for base-box
      </template>
    </base-box>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style type="text/css" scoped>
.box-container {
  height: 599px;
}
</style>
