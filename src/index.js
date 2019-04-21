import 'babel-polyfill'
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import App from './App.vue'

// Components
import Skills from './components/Skills.vue'
import Presentation from './components/Presentation.vue'
import ContactButtons from './components/ContactButtons.vue'
import WorkExperience from './components/WorkExperience.vue'
import Education from './components/Education.vue'

Vue.use(Vuetify)

Vue.component('resume-skills', Skills)
Vue.component('resume-presentation', Presentation)
Vue.component('resume-contact-buttons', ContactButtons)
Vue.component('resume-experience', WorkExperience)
Vue.component('resume-education', Education)

new Vue({
  el: '#app',
  render: h => h(App)
})