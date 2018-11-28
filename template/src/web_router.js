/**
 * web vuerourter 配置文件
 */
import Router from 'vue-router'
const Index = () => import('./pages/index/index.vue')
Vue.use(Router)
export default new Router({
    //mode: 'history',
    routes: [{
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            component: Index
        },
    ]
})