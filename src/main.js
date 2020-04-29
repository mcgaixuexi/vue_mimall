import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import env from './env'

// 根据前端跨域方式做调整 /a/b: /api/a/b => /a/b
// axios.defaults.baseURL = 'api'
axios.defaults.timeout = 8000
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL
// 接口错误拦截
axios.interceptors.response.use(function (response) {
  const res = response.data
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) {
    window.location.href = '/#/login'
  } else {
    alert(res.msg)
  }
})
// Vue.use(axios, VueAxios)
Vue.prototype.axios = axios
Vue.prototype.VueAxios = VueAxios
Vue.prototype.env = env
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
