import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "./http/axios";
import router from "./router";
import store from "./store/store";
import navbar from "./components/Navbar.vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCWp0kqYKOImm0UsHz17vaRq4kHOwsnqI4",
    libraries: "places",
  },
});

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;
Vue.component("app-navbar", navbar);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
