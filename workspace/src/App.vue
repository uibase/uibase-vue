<template>
  <div :class="$style.app">
    <base-header :class="$style.header">
      <template v-slot:logo>
        <div style="margin: 0px 8px; font-weight: bold;">
          UI Base Components. Test
        </div>
      </template>
    </base-header>
    <div :class="$style.container">
      <base-sidebar :class="$style.sidebar" :routes="routes">
        <template v-slot:top>
          <base-box :class="$style.sidebarBox" type="white" padding="8px">
            User Name.
          </base-box>
        </template>
      </base-sidebar>
      <div :class="$style.body">
        <h1>テスト</h1>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      routes: [
        {
          name: 'Top Page',
          icon: 'ub-xmark',
          to: '/',
          exact: true
        },
        {
          name: 'Page A',
          to: '/a',
          exact: true
        },
        {
          name: 'Title',
          togglable: true,
          children: [
            {
              name: 'Title Page A',
              to: '/title-page-a',
              exact: true
            },
            {
              name: 'Title Page B',
              to: '/title-page-b',
              exact: true
            }
          ]
        },
        {
          name: 'Page B',
          to: '/b',
          exact: true
        },
        {
          name: 'Page C',
          to: '/c',
          exact: true
        },
        {
          name: 'Page D',
          to: '/d',
          exact: true
        },
        {
          name: 'Page E',
          to: '/e',
          exact: true
        },
        {
          name: 'Page F',
          to: '/f',
          exact: true
        },
      ]
    }
  }
}
</script>
<style module>
.header {
  width: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
}
.sidebar {
  overflow-y: scroll;
}
.container {
  margin-top: 50px;
  height: calc(100vh - 50px);
  display: flex;
  align-items: stretch;
}
.body {
  flex: 1;
}
.sidebarBox {
  margin: 8px;
}
</style>
