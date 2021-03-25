<template>
  <div class="Navbar">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand to="/">HOME</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <template #button-content>
                <em
                  ><b-avatar :size="30"></b-avatar><em>{{ nameUsuario }}{{emailUsuario}}</em></em
                >
              </template>
              <b-dropdown-item to="/perfil">Perfil</b-dropdown-item>
              <b-dropdown-item href="#">Favoritos</b-dropdown-item>
              <b-dropdown-item @click="logout">logout</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
export default {
  name: "Navbar",
  data() {
    return {
      nameUsuario: "",
      emailUsuario: "",
    };
  },
  mounted() {

if(!localStorage.getItem("nomeLocal") || !localStorage.getItem("nomeLocalCadastro")) {
  this.nameUsuario = JSON.parse(localStorage.getItem("emailLocal") || localStorage.getItem("emailLocalCadastro"));
}else if( !localStorage.getItem("emailLocal") || !localStorage.getItem("emailLocalCadastro")){
  this.emailUsuario = JSON.parse(localStorage.getItem("nomeLocal") || localStorage.getItem("emailLocalCadastro"));
}else{
  localStorage.removeItem("emailLocal");
  localStorage.removeItem("emailLocalCadastro");
  localStorage.removeItem("nomeLocal")
  localStorage.removeItem("nomeLocalCadastro")
}

  },
  methods: {
    ...mapState(["SetToken"]),
    logout() {
      localStorage.removeItem("emailLocal");
      localStorage.removeItem("emailLocalCadastro");
      localStorage.removeItem("nomeLocal");
      localStorage.removeItem("nomeLocalCadastro");
      localStorage.removeItem("tokenLocal");
      this.$router.push({ name: "login" });
      this.$store.commit("SetToken", null);
      this.$router.push({ name: "login" });
    },
  },
};
</script>
