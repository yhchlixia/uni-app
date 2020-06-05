import Vue from 'vue'
import App from './App'
import axios from 'axios'
import components from './index.module.js'
import api from "./api"
// import inputCheck from 'pages/components/input-check.vue';

Vue.config.productionTip = false
Vue.use(components);
Vue.use(api);
// Vue.component("input-check", inputCheck);
axios.defaults.basePath = './'
Vue.prototype.axios = axios;
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
