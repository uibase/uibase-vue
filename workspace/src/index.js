import Vue from 'vue'
import App from './App'
import IconUbXmark from '../../src/vue/components/Icon/icon-ubXmark.ejs'
import IconArrowDown from '../../src/vue/components/Icon/icon-ubArrowDown.ejs'
import BaseButton from '../../src/vue/components/Button/button.ejs'
import BaseBox from '../../src/vue/components/Box/box.ejs'
import BaseBoxTitle from '../../src/vue/components/Box/box-title.ejs'
import BaseIcon from '../../src/vue/components/Icon/icon.ejs'
import BaseHeader from '../../src/vue/components/Header/header.ejs'
import BaseNumberBudge from '../../src/vue/components/NumberBudge/numberBudge.ejs'

Vue.component('BaseRouterLink', {
  template: `<a href="javascript: void(0);" @click.prevent="click"><slot /></a>`,
  props: {
    to: {
      type: [String, Object],
      required: true
    }
  },
  methods: {
    click() {
      console.log('button clicked', this.to)
    }
  }
})

Vue.component('BaseButton', BaseButton)
Vue.component('BaseBox', BaseBox)
Vue.component('BaseBoxTitle', BaseBoxTitle)
Vue.component('BaseIcon', BaseIcon)
Vue.component('BaseHeader', BaseHeader)
Vue.component('BaseNumberBudge', BaseNumberBudge)
Vue.component('IconUbXmark', IconUbXmark)
Vue.component('IconUbArrowDown', IconArrowDown)

new Vue({
  render: (h) => h(App)
}).$mount('#app')
