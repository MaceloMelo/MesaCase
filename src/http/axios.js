import Vue from 'vue';
import axios from 'axios';


Vue.use({
    install(Vue){
        Vue.prototype.$http = axios.create({
            baseURL:'https://reqres.in/api/'
        }),
        Vue.prototype.$httpGoogle = axios.create({
            baseURL:'https://maps.googleapis.com/maps/api/geocode/json?'
        })
    }
})
/* const GuardarToken = token =>{
    Vue.prototype.$http.headers.common['Authorization'] = token
} */