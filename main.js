import Vue from 'vue'
import App from './App'
import components from './index.module.js'
// import inputCheck from 'pages/components/input-check.vue';

Vue.config.productionTip = false
Vue.use(components);
// Vue.component("input-check", inputCheck);

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
