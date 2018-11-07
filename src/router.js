import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            component: () => import('./views/Nav.vue'),
        },{
            path: '/home',
            component: () => import('./views/Home.vue'),
        },
        {
            path: '/page',
            component: () => import('./views/Page.vue'),
            children: [{
                    path: '/',
                    component: () => import('./views/Environment/Page1.vue')
                },
                {
                    path: 'envpage1',
                    component: () => import('./views/Environment/Page1.vue')
                },
                {
                    path: 'elepage1',
                    component: () => import('./views/Ele/Page1.vue')
                },
                {
                    path: 'elepage2',
                    component: () => import('./views/Ele/Page2.vue')
                },
                {
                    path: 'elepage3',
                    component: () => import('./views/Ele/Page3.vue')
                },
                {
                    path: 'elepage4',
                    component: () => import('./views/Ele/Page4.vue')
                },
                {
                    path: 'elepage5',
                    component: () => import('./views/Ele/Page5.vue')
                },
                {
                    path: 'elepage6',
                    component: () => import('./views/Ele/Page6.vue')
                },
                {
                    path: 'elepage7',
                    component: () => import('./views/Ele/Page7.vue')
                },
                {
                    path: 'monpage1',
                    component: () => import('./views/Monitor/Page1.vue')
                },
                {
                    path: 'hydpage1',
                    component: () => import('./views/Hyd/Page1.vue')
                },
                {
                    path: 'watpage1',
                    component: () => import('./views/Water/Page1.vue')
                },
                {
                    path: 'sitpage1',
                    component: () => import('./views/WaterSit/Page1.vue')
                },
                {
                    path: 'swatpage1',
                    component: () => import('./views/SWater/Page1.vue')
                }]
        }
    ]
})
