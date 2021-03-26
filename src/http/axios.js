import Vue from "vue";
import axios from "axios";
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'https://mgoogleplace.herokuapp.com';
Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: "https://reqres.in/api/",
    });
  },
});
