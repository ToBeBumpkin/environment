import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    // mode: 'history',
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
                },
                {
                    path: 'secpage1',
                    component: () => import('./views/Second/Page1.vue')
                },
                {
                    path: 'secpage2',
                    component: () => import('./views/Second/Page2.vue')
                },
                {
                    path: 'secpage3',
                    component: () => import('./views/Second/Page3.vue')
                },
                {
                    path: 'secpage4',
                    component: () => import('./views/Second/Page4.vue')
                },
                {
                    path: 'secpage5',
                    component: () => import('./views/Second/Page5.vue')
                },
                {
                    path: 'secpage6',
                    component: () => import('./views/Second/Page6.vue')
                },
                {
                    path: 'secpage7',
                    component: () => import('./views/Second/Page7.vue')
                },
                {
                    path: 'secpage8',
                    component: () => import('./views/Second/Page8.vue')
                },
                {
                    path: 'secpage9',
                    component: () => import('./views/Second/Page9.vue')
                },
                {
                    path: 'secpage10',
                    component: () => import('./views/Second/Page10.vue')
                },
                {
                    path: 'secpage11',
                    component: () => import('./views/Second/Page11.vue')
                },
                {
                    path: 'secpage12',
                    component: () => import('./views/Second/Page12.vue')
                },
                {
                    path: 'secpage13',
                    component: () => import('./views/Second/Page13.vue')
                },
                {
                    path: 'secpage14',
                    component: () => import('./views/Second/Page14.vue')
                },
                {
                    path: 'secpage15',
                    component: () => import('./views/Second/Page15.vue')
                },
                {
                    path: 'secpage16',
                    component: () => import('./views/Second/Page16.vue')
                },
                {
                    path: 'secpage17',
                    component: () => import('./views/Second/Page17.vue')
                },
                {
                    path: 'secpage18',
                    component: () => import('./views/Second/Page18.vue')
                },
                {
                    path: 'secpage19',
                    component: () => import('./views/Second/Page19.vue')
                }]
        }
    ]
})
