import Vue from "vue"
import App from "./App.vue"
import VueCompositionAPI from '@vue/composition-api'

import "../scss/main.scss"

Vue.use(VueCompositionAPI)


const vm = new Vue({
    render: h => h(App)
}).$mount('#app')
