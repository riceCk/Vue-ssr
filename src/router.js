import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import home from './components/home.vue'
import about from './components/about.vue'
import show from './components/show.vue'

export default function () {
    return new VueRouter({
        mode: 'history',
        routes: [
            {
                path: '/',
                component: home
            },
            {
                path: '/about',
                component: about
            },
            {
                path: '/show',
                component: show
            }
        ]
    })
}