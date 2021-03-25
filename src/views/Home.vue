<template>
  <div class="home">
    <div>
      <router-link to="/">Home</router-link> |
          <router-link to="/login">Login</router-link> 
    </div>
    <img alt="Vue logo" src="../assets/logo.png" />
    <h1>Case Atividades</h1>
      <b-container >
        <div class="atividades">
        <b-list-group class="">
        <b-list-group-item><b-icon icon="check-circle-fill" variant="success"></b-icon>VUE CLI</b-list-group-item>
        <b-list-group-item><b-icon icon="check-circle-fill" variant="success"></b-icon>BOOTSTRAP</b-list-group-item>
        <b-list-group-item><b-icon icon="check-circle-fill" variant="success"></b-icon>ROUTER</b-list-group-item>
        <b-list-group-item><b-icon icon="check-circle-fill" variant="success"></b-icon>AXIOS</b-list-group-item>
        <b-list-group-item><b-icon icon="check-circle-fill" variant="success"></b-icon>VUEX</b-list-group-item>
        <b-list-group-item><b-icon icon="check-circle-fill" variant="success"></b-icon>ROUTER beforeEach (Proteção de rotas)</b-list-group-item>
      </b-list-group>
        <b-list-group class="">
        <b-list-group-item><b-icon icon="check-circle-fill" variant="success"></b-icon>PERFIL</b-list-group-item>
          <b-list-group-item><b-icon icon="check-circle-fill" variant="success"></b-icon>LOGOUT</b-list-group-item>
        <b-list-group-item><b-icon icon="check-circle-fill" variant="success"></b-icon>AUTENTICAÇÃO COM API REST(https://regres.in)</b-list-group-item>
        <b-list-group-item><b-icon icon="check-circle-fill" variant="success"></b-icon>BUSCA DE LOCAIS COM API REST(https://maps.google.com/place)</b-list-group-item>
        <b-list-group-item><b-icon icon="check-circle-fill" variant="success"></b-icon>LISTAGEM DE LOCAIS EM FORMA DE LISTA</b-list-group-item>
        <b-list-group-item><b-icon icon="check-circle-fill" variant="success"></b-icon>LISTAGEM DE LOCAIS EM FORMA DE MAPA</b-list-group-item>
      </b-list-group>
        <b-list-group class="">
        <b-list-group-item><b-icon icon="check-circle-fill" variant="success"></b-icon>TRATAMENTOS DE ERROS</b-list-group-item>
          <b-list-group-item><b-icon icon="check-circle-fill" variant="success"></b-icon>DOCKER E DOCKER COMPOSE</b-list-group-item>
        <b-list-group-item><b-icon icon="check-circle-fill" variant="success"></b-icon>REPOSITÓRIO GITHUB</b-list-group-item>
        <b-list-group-item><b-icon icon="check-circle-fill" variant="success"></b-icon>DEPOLY HEROKU</b-list-group-item>
        <b-list-group-item><b-icon icon="x-circle-fill" variant="danger"></b-icon>SALVAR EM FAVORITOS</b-list-group-item>
        <b-list-group-item><b-icon icon="x-circle-fill" variant="danger"></b-icon>AVALIAR COM RATING E COMENTARIOS
        </b-list-group-item>
      </b-list-group>
      </div>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Home",
  components: {},
};
</script>
<style scoped>
@media (min-width:1024px){
  .atividades{
    display:inline-flex
  }
}
@media (max-width:1024px){
  .atividades{
    display:block
  }
}
</style>