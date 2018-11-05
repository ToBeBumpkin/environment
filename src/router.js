import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: () => import('./views/Home.vue'),
        },
        {
            path: '/Page',
            component: () => import('./views/Page.vue'),
            children: [{
                    path: '/',
                    component: () => import('./views/Environment/Page1.vue')
                },
                {
                    path: 'envpage1',
                    component: () => import('./views/Environment/Page1.vue')
                }]
        }
    ]
})
