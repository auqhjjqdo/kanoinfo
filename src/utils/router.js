import VueRouter from 'vue-router'


const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            redirect: '/nav'
        },
        {
            path: '/nav',
            name: 'navigation',
            component: () => import(/* webpackChunkName:"kano"*/ '@/views/navigation'),
            meta: {
                title: '导航'
            }
        },
        {
            path: '/dynamic',
            name: 'dynamic',
            component: () => import(/* webpackChunkName:"kano"*/ '@/views/dynamic'),
            meta: {
                title: '动态'
            }
        },
        {
            path: '/calendar',
            name: 'calendar',
            component: () => import(/* webpackChunkName:"kano"*/ '@/views/calendar'),
            meta: {
                title: '日历'
            }
        },
        {
            path: '/resource',
            name: 'resource',
            component: () => import(/* webpackChunkName:"kano"*/ '@/views/resource'),
            meta: {
                title: '资源'
            }
        },
        {
            path: '/about',
            name: 'about',
            component: () => import(/* webpackChunkName:"kano"*/ '@/views/about'),
            meta: {
                title: '关于'
            }
        }
    ]
})

router.beforeEach((to, from, next) => {
    const title = process.env.VUE_APP_SITE_TITLE
    document.title = `${to.meta.title} - ${title}` || title
    next()
})

export default router
