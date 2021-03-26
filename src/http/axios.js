import Vue from "vue";
import axios from "axios";
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: "https://reqres.in/api/",
    });
  },
});
