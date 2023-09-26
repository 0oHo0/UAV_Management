import { createRouter, createWebHistory } from 'vue-router'
export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/index',
            component: () => import('@/components/pages/index.vue'),
        },
        {
            path: '/home',
            component: () => import('@/components/pages/home/index.vue'),
        },
        {
            path: '/login',
            component: () => import('@/components/pages/login.vue'),
        },
        {
            path: '/time',
            component: () => import('@/components/pages/home/time.vue'),
        },
        {
            path: '/people',
            component: () => import('@/components/pages/home/people.vue'),
        },
        {
            path: '/',
            redirect: '/login'
        }
    ],
    scrollBehavior() {
        return {
            left: 0,
            top: 0
        }
    }
})