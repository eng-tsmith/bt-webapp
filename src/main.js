// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Views
import HomeView from './components/Home'
import BandView from './components/Band'
import SektView from './components/Sekt'
import DinnerView from './components/Dinner'
import PartyView from './components/Party'
import DJView from './components/DJ'
import GallerieView from './components/Gallerie'
import KontaktView from './components/Kontakt'
import ImpressumView from './components/Impressum'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter)

const routes = [
  { path: '/', component: HomeView },
  { path: '/band', component: BandView },
  { path: '/sektempfang', component: SektView },
  { path: '/dinnermusik', component: DinnerView },
  { path: '/tanzpartymusik', component: PartyView },
  { path: '/dj', component: DJView },
  { path: '/gallerie', component: GallerieView },
  { path: '/kontakt', component: KontaktView },
  { path: '/impressum', component: ImpressumView }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
