import vueRouter from "vue-router"

import menber from "../components/tabar/menber.vue"
import home from "../components/tabar/home.vue"
import search from "../components/tabar/search.vue"
import shop from "../components/tabar/shop.vue"

export default new vueRouter({
  routes: [
    {path: "/", redirect: "/home"},
    {path: "/menber", component: menber},
    {path: "/home", component: home},
    {path: "/search", component: search},
    {path: "/shop", component: shop},
  ],
  linkActiveClass: "mui-active"   //自定义 选中路由 类
})