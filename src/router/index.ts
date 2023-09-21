import { createRouter, createWebHistory } from 'vue-router'
export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: () => import('@/pages/home/index.vue')
        },
        {
            path: '/login',
            component: () => import('@/pages/login/index.vue')
        },
        {
            path: '/time',
            component: () => import('@/pages/home/time.vue')
        },
        {
            path: '/people',
            component: () => import('@/pages/home/people.vue')
        },
        {
            path: '/',
            redirect:'/home'
        }
    ],
    scrollBehavior() {
        return {
            left: 0,
            top: 0
        }
    }
})