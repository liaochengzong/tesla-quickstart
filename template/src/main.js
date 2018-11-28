import Vue from 'vue'
import MiniProgram from './MiniProgram'

Vue.config.productionTip = false
MiniProgram.mpType = 'app'

const app = new Vue(MiniProgram)
app.$mount()
