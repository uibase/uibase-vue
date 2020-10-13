import Vue from 'vue'
import UiBase from '../.uiBase'
import App from './App'

Vue.use(UiBase)

new Vue({
  render: (h) => h(App)
}).$mount('#app')
