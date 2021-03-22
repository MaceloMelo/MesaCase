<template>
  <div class="mt-5">
    <b-container class="bv-example-row text-center" >
        <b-row class="justify-content-center">
            <b-col  col lg="4" md="auto">
                <b-card >
                        <img width="100" alt="Vue logo" src="../assets/mesa-logo.png" />
                    <b-form class="mt-4" @submit.prevent="onSubmit" @reset="onReset" v-if="show">
                    <b-form-group
                        id="input-group-1"
                        label="Endereço de Email:"
                        label-for="input-1">
                        <b-form-input
                        id="input-1"
                        v-model="form.email"
                        type="email"
                        placeholder="Email"
                        required
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group id="input-group-2" label="Senha:" label-for="input-2" autofocus="true">
                        <b-form-input
                        id="input-2" type="password"
                        v-model="form.password"
                        placeholder="Senha"
                        required
                        ></b-form-input>
                    </b-form-group>
                    <div class="mb-3 mt-2">
                        <b-alert v-model="alertaErro" variant="danger" dismissible>{{msg}}</b-alert>
                      <router-link to="/cadastro">Cadastre-se</router-link>
                    </div>
                    <b-button class="mr-5" type="submit" variant="primary">Entrar</b-button>
                    <b-button type="reset" variant="danger">Limpar</b-button>
                    </b-form>
                </b-card>
                <div>
                </div>
            </b-col>
        </b-row>
    </b-container>
  </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import { mapState } from 'vuex'
  export default {
      name: "Login",
    data() {
      return {
        form: {
          email:'',
          password:'',
        },
        msg:'',
        alertaErro: false,
        show: true
      }
    },
    methods: {
      ...mapActions(['ListarUsuarios','Logar']),
      ...mapState(['token']),
     async onSubmit() {
       await this.$store.dispatch('Logar',this.form)
        if(this.$store.getters.statusCode == 200 && this.$store.state.token){
            this.$router.push({name: 'dashboard'}) 
          }else{
            this.msg = 'Desculpe, verifique suas credenciais'
            this.alertaErro = true
        }
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.password = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },
      ListagemUsuarios() {
          this.ListarUsuarios()
      }

    }
  }
</script>