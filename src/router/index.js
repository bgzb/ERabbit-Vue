import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('@/views/Layout/index.vue'),
        children:[
            {
                path: '',
                component: () => import('@/views/Home/index.vue'),
            },
            {
                path: 'category',
                component: () => import('@/views/Category/index.vue'),
            }
        ]
    },
    {
        path: '/login',
        component: () => import('@/views/Login/index.vue'),
    }
]

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
)

export default router