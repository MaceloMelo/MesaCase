<template>
  <div class="Navbar">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand to="/">HOME</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
             <!--  <b-button size="sm" class="my-2 my-sm-0 mr-3" to="/login" type="submit">LOGIN</b-button>
              <b-button size="sm" class="my-2 my-sm-0" to="/cadastro" type="submit">CADASTRE-SE</b-button> -->
              <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
            <template #button-content>
              <em><b-avatar :size="30"></b-avatar><em>{{email}}</em></em>
            </template>
          <b-dropdown-item href="#">Perfil</b-dropdown-item>
          <b-dropdown-item href="#">Favoritos</b-dropdown-item>
          <b-dropdown-item @click="logout" >logout</b-dropdown-item>
          </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState} from 'vuex'
export default {
  name: "Navbar",
    data() {
      return {
          email:'',
      }
    },
       mounted() {
    if (localStorage.getItem('emailLocal')) {
      try {
        this.email = JSON.parse(localStorage.getItem('emailLocal'));
      } catch(e) {
        localStorage.removeItem('emailLocal');
      }
    }
  },
  methods:{
    ...mapState(['SetToken']),
    logout() {
    localStorage.removeItem('emailLocal');
    localStorage.removeItem('tokenLocal');
    this.$router.push({name: 'login'}) 
    this.$store.commit('SetToken',null)
    this.$router.push({name: 'login'})
  },
    
  }
};
</script>
