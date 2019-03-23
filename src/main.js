import Vue from 'vue'
import App from './App.vue'
import createRouter from './router.js'

export default function createApp() {
    return new Vue({
        router: createRouter(),
        render: createElement => createElement(App)
    })
}