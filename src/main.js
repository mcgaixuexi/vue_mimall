import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
// import mock from './mock/api'
// import env from './env'
// mock开关
const mock = false
if(mock){
  console.log(11);
  require('./mock/api')
  console.log(111);
}
// 根据前端跨域方式做调整 /a/b: /api/a/b => /a/b
// axios.defaults.baseURL = '/api'
// easy-mock平台模拟数据
axios.defaults.baseURL = ' https://www.easy-mock.com/mock/5eaa7d46d933d175e8596fd1/mimall'
axios.defaults.timeout = 8000
// 根据环境变量获取不同的请求地址
// axios.defaults.baseURL = env.baseURL
// 接口错误拦截
axios.interceptors.response.use(function (response) {
  let res = response.data
  console.log(res)
  if (res.status === 0) {
    return res
  } else if (res.status === 10) {
    window.location.href = '/#/login'
  } else {
    alert(res.msg)
  }
})
// Vue.use(axios, VueAxios)
Vue.prototype.axios = axios
Vue.prototype.VueAxios = VueAxios
// Vue.prototype.env = env
Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
