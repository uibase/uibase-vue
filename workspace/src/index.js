import Vue from 'vue'
import App from './App'
import test from '../../src/vue/components/Button/button.ejs'

console.log('this is test!!!------', test)
// Vue.use(UiBase)

new Vue({
  render: (h) => h(App)
}).$mount('#app')
