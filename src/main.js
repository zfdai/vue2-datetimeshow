// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
// ajax配置
import axiosConfig from './config/axios_config.js'
axiosConfig.init();
// 公共css
import './assets/scss/common/_reset.scss'
import './assets/scss/common/_style.scss'
// 饿了么
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI);
// 字体库
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
