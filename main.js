import Vue from "vue"
import vueRouter from "vue-router"
import router from "./src/js/router/router"
import App from "./com.vue"
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import "./src/css/MUI/css/mui.css"
import "./src/css/MUI/css/icons-extra.css"

Vue.use(MintUI)
Vue.use(vueRouter)

Vue.component("my-swiper", MintUI.Swipe)
Vue.component("my-swipeItem", MintUI.SwipeItem)

console.log(MintUI)

let vm = new Vue({
  el: "#app",
  render(c){
    return c(App)
  },
  router
})