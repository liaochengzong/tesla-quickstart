/**
 * weex 入口文件 
 */
import weexUtil from './mixins/weexUtil'
import Vue from 'vue';
import weex from 'weex-vue-render';
Vue.mixin(weexUtil)
weex.init(Vue);


