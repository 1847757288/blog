import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

let g={
	baseUrl:'http://129.204.240.85:2002/',
	loadTimeOut:4000
}
Vue.prototype.$g=g

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
