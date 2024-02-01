import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: require('@/screens/Home').default
    }, {
        path: '/tasks',
        name: 'tasks',
        component: require('@/screens/Tasks').default
    }, {
        path: '/messages',
        name: 'messages',
        component: require('@/screens/Messages').default
    }, {
        path: '/library',
        name: 'library',
        component: require('@/screens/Library').default
    }, {
        path: '/logs',
        name: 'logs',
        component: require('@/screens/Logs').default
    }, {
        path: '/operators',
        name: 'operators',
        component: require('@/screens/Modenero/Operators').default
    }, {
        path: '*',
        redirect: '/'
    }]
})
