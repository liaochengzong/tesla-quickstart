import Vue from 'vue'
import App from '@/App.vue'
/* app-only-begin */
Vue.config.productionTip = false
App.mpType = 'app'
/* app-only-end */
const app = new Vue(App)
app.$mount()
