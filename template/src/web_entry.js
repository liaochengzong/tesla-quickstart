/**
 * web 入口文件
 */
import weexUtil from './mixins/weexUtil'
import Web from './Web.vue'
import router from './web_router'
import {navigator} from 'tesla-native-js'

// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.

Vue.mixin(weexUtil)
new Vue(Vue.util.extend({
    el: '#root',
    router
}, Web));

