// eslint-disable-next-line import/no-webpack-loader-syntax
import '!vue-style-loader!css-loader!sass-loader!./src/assets/css/base.scss'
import Vue from 'vue'

Vue.component('nuxt-link', {
  props: ['to'],
  methods: {
    log() {
      console.log(this.to)
    }
  },
  template:
    '<a href="#" @click.prevent="log()" v-on="$listeners"><slot>NuxtLink</slot></a>'
})
