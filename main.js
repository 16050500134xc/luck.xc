import Vue from 'vue'
import App from './App'
import store from './store'
import Json from './Json' //测试用数据
import Tools from './static/js/tools.js'//工具函数
Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$json = Json
Vue.prototype.$tools = Tools
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
