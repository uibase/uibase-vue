import Vue from 'vue'
import BaseUi from '@/main'
import App from './App'

Vue.use(BaseUi)

new Vue({
  render: (h) => h(App)
}).$mount('#app')
