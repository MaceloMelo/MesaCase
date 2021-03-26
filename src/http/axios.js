import Vue from "vue";
import axios from "axios";
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Content-Type';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'https://mgoogleplace.herokuapp.com';
const token = "418679173092-bblghab6rmf8umkugcrnfvpd1bc8hald.apps.googleusercontent.com"
axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios.create({
      baseURL: "https://reqres.in/api/",
    });
  },
});
