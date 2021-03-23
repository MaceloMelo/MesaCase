import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import './http/axios'
import router from "./router";
import store from "./store/store"
import navbar from "./components/Navbar.vue"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false;
Vue.component('app-navbar',navbar)

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
