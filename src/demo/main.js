import Vue from 'vue'
Vue.config.devtools = true

import App from './App.vue'
new Vue({
    el: '#app',
    render: h => h(App)
})
