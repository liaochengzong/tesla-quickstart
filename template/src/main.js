import Vue from 'vue'
import App from '@/App.vue'
import miniprogramUtil from './mixins/miniprogramUtil'
/* app-only-begin */
Vue.config.productionTip = false
App.mpType = 'app'
/* app-only-end */
Vue.mixin(miniprogramUtil)
const app = new Vue(App)
app.$mount()
