import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import VueAnalytics from 'vue-analytics';

import Machines from '../src/components/Machines'
import SingleMachine from '../src/components/SingleMachine'
import Main from '../src/components/Main'
import Challenges from '../src/components/Challenges'
import NotFound from '../src/components/NotFound'

Vue.config.productionTip = false

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: 'G-QD6QZ6D0GX'
});

Vue.use(VueAxios, axios)
Vue.use(VueRouter)

const routes = [  
  { path: '/machines', component: Machines, name: "machines" },
  { path: '/machines/:name', component: SingleMachine, name: "single" },
  { path: '/challenges', component: Challenges, name:"challenges" },
  { path: '/', component: Main, name:"home"  },
  { path: '*', component: NotFound}
]

const router = new VueRouter({  
  routes // short for `routes: routes`
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
