import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: "",
    statusCode: "",
    usuario: {
      name: "",
      email: "",
      password: "",
    },
  },
  getters: {
    usuario(state) {
      return state.usuario;
    },
    token(state) {
      return state.token;
    },
    statusCode(state) {
      return state.statusCode;
    },
  },
  mutations: {
    SetUsuario(state, usuario) {
      state.usuario = usuario;
    },
    SetToken(state, token) {
      state.token = token;
    },
    StatusCode(state, statusCode) {
      state.statusCode = statusCode;
    },
  },
  actions: {
    async Logar({ commit }, payload) {
      await Vue.prototype.$http
        .post("login", payload)
        .then((res) => {
          commit("SetUsuario", payload);
          localStorage.setItem("emailLocal", JSON.stringify(payload.email));
          commit("SetToken", res.data.token);
          localStorage.setItem("tokenLocal", JSON.stringify(res.data.token));
          commit("StatusCode", res.status);
        })
        .catch((error) => {
          console.log("Erro ao logar" + error);
        });
    },
    async Cadastrar({ commit }, payload) {
      await Vue.prototype.$http
        .post("register", payload)
        .then((res) => {
          commit("SetToken", res.data.token);
          localStorage.setItem("tokenLocal", JSON.stringify(res.data.token));
          commit("SetUsuario", payload);
          localStorage.setItem("emailLocalCadastro", JSON.stringify(payload.email));
          localStorage.setItem("nomeLocalCadastro", JSON.stringify(payload.name));
          commit("StatusCode", res.status);
        })
        .catch((error) => {
          console.log("Erro ao Cadastrar" + error);
        });
    },
    async Atualizar({ commit }, payload) {
      await Vue.prototype.$http
        .put("user/2", payload)
        .then((res) => {
          commit("SetToken", res.data.token);
          commit("SetUsuario", payload);
          localStorage.setItem("emailLocal", JSON.stringify(payload.email));
          localStorage.setItem("nomeLocal", JSON.stringify(payload.name));
          commit("StatusCode", res.status);
        })
        .catch((error) => {
          console.log("Erro ao Cadastrar" + error);
        });
    },
    
  },
});
