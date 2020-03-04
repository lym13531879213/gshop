//入口js
import Vue from 'vue'
import App from './App'
import router from './router/index'
import './assets/foot/iconfont.css'


new Vue({
  el:'#app',
  render:c=>c(App),
  router
})