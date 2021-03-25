<template>
  <div class="mt-5">
    <b-container class="bv-example-row text-center">
      <b-row class="justify-content-center">
        <b-col col lg="4" md="auto">
          <b-card>
            <img width="100" alt="Vue logo" src="../assets/mesa-logo.png" />
            <h1>Atualize seus dados</h1>
             <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group 
            id="input-group-1" 
            label="Nome:" 
            label-for="input-1">
                <b-form-input
                id="input-1"
                v-model="form.name"
                placeholder="Nome"
                >{{nameUsuario}}</b-form-input>
            </b-form-group>
            <b-form-group
                id="input-group-2"
                label="Email:"
                label-for="input-2">
                <b-form-input
                id="input-2"
                v-model="form.email"
                type="email"
                placeholder="Email"
                >{{emailUsuario}}</b-form-input>
            </b-form-group>
            <b-form-group
                id="input-group-3"
                label="Senha:"
                label-for="input-3">
                <b-form-input
                id="input-3"
                v-model="form.password"
                type="text"
                placeholder="Senha"
                ></b-form-input>
            </b-form-group>
            <b-alert v-model="alertaErro" variant="danger" dismissible>{{
                    msg
                  }}</b-alert>
                  <b-alert v-model="alertaconfir" variant="success" dismissible>{{
                    msg
                  }}</b-alert>
            <b-button type="submit" class="mr-5" variant="primary">Salvar</b-button>
            <b-button type="reset" variant="danger">Limpar</b-button>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          password: '',
        },
         nameUsuario: '',
        emailUsuario: '',
        msg:'',
        alertaconfir : false,
        alertaErro : false,
        show: true
      }
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
    ...mapActions(["Atualizar"]),
    ...mapGetters(["token"]),
    async onSubmit(event) {
      event.preventDefault(),
        await this.$store.dispatch("Atualizar", this.form);
      if (this.$store.getters.statusCode == 200) {
        this.msg = "Dados atalizados.";
        this.alertaconfir = true;
        this.$router.push({ name: "perfil" });
          } else {
            console.log(this.form);
        this.msg = "Desculpe, não foi possivel Atualizar seus dados.";
        this.alertaErro = true;
      }
    },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.password = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>