import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import App from './App.vue'
import Routes from './routes'

// Components
import ResumeContainer from './components/resume/ResumeContainer.vue'

Vue.use(VueRouter)
Vue.use(Vuetify)

const router = new VueRouter({
  routes: Routes
});

Vue.component('resume-container', ResumeContainer)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})