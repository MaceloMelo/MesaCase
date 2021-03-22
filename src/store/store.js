import  Vue  from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        usuarios:{},
        token:'',
        statusCode:'',
        usuario:{
            email:'',
            password:'',
        }
    },
    getters:{
        usuarios(state){
            return state.usuarios
        },
        usuario(state){
            return state.usuario
        },
        token(state){
            return state.token
        },
        statusCode(state){
            return state.statusCode
        },


        
    },
    mutations:{
        ListUsuarios(state,usuarios){
            state.usuarios = usuarios
        },
        SetUsuario(state,usuario){
            state.usuario = usuario
        },
        SetToken(state,token){
            state.token = token
        },
        StatusCode(state,statusCode){
            state.statusCode = statusCode
        },



 
    },
    actions:{
        async ListarUsuarios({commit}){
            await Vue.prototype.$http.get('users.json').then(response => {
                const data = response.data
                commit('ListUsuarios',data.usuarios)
            }).catch((error)=>{
                console.log("Erro ao listar"+error);
            })
        },
        async  Logar({commit},payload){
            await Vue.prototype.$http.post('login',payload).then(res => {
                commit('SetUsuario',payload)
                localStorage.setItem('emailLocal',JSON.stringify(payload.email))
                commit('SetToken',res.data.token)
                localStorage.setItem('tokenLocal',JSON.stringify(res.data.token))
                commit('StatusCode',res.status)
            }).catch((error)=>{
                console.log("Erro ao logar" + error);
            })

        },
        async  Cadastrar({commit},payload){
            await  Vue.prototype.$http.post('register',payload).then(res => {
                commit('SetToken',res.data.token)
                localStorage.setItem('tokenLocal',JSON.stringify(res.data.token))
                commit('SetUsuario',payload)
                commit('StatusCode',res.status)
            }).catch((error)=>{
                console.log("Erro ao Cadastrar" + error);

            })

        }, 
      

    },



})
