import Vue from "vue"
import App from './App'
import IconUbXmark from '../../src/vue/components/Icon/icon-ubXmark.ejs'
import IconArrowDown from '../../src/vue/components/Icon/icon-ubArrowDown.ejs'
import BaseButton from '../../src/vue/components/Button/button.ejs'
import BaseBox from '../../src/vue/components/Box/box.ejs'
import BaseBoxTitle from '../../src/vue/components/Box/box-title.ejs'
import BaseIcon from '../../src/vue/components/Icon/icon.ejs'
import BaseHeader from '../../src/vue/components/Header/header.ejs'
import BaseNumberBudge from '../../src/vue/components/NumberBudge/numberBudge.ejs'
import BaseSidebarListItem from '../../src/vue/components/Sidebar/sidebar-list-item.ejs'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{ path: '/', component: App }]

const router = new VueRouter({ routes })

// Vue.component('BaseRouterLink', {
//   template: `<router-link to="/"><slot /></router-link>`
// })

Vue.component('BaseRouterLink', {
  render(h) {
    return h('router-link', {
      attrs: this.$attrs,
      on: {
        ...this.$listeners
      },
    }, this.$slots.default)
  }
})

Vue.component('BaseButton', BaseButton)
Vue.component('BaseBox', BaseBox)
Vue.component('BaseBoxTitle', BaseBoxTitle)
Vue.component('BaseIcon', BaseIcon)
Vue.component('BaseHeader', BaseHeader)
Vue.component('BaseNumberBudge', BaseNumberBudge)
Vue.component('BaseSidebarListItem', BaseSidebarListItem)
Vue.component('IconUbXmark', IconUbXmark)
Vue.component('IconUbArrowDown', IconArrowDown)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
