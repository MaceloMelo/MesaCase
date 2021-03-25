<template>
  <div class="mt-5">
    <b-container class="bv-example-row text-center">
      <b-row class="justify-content-center">
        <b-col col lg="4" md="auto">
          <b-card>
            <img width="100" alt="Vue logo" src="../assets/mesa-logo.png" />
            <b-form
              class="mt-4"
              @submit="onSubmit"
              @reset="onReset"
              v-if="show">
              <b-form-group
                id="input-group-1"
                label="Nome:"
                label-for="input-1">
                <b-form-input
                  id="input-1"
                  v-model="form.name"
                  type="text"
                  placeholder="Nome"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-2"
                label="Endereço de Email:"
                label-for="input-2"
              >
                <b-form-input
                  id="input-2"
                  v-model="form.email"
                  type="email"
                  placeholder="Email"
                  required
                ></b-form-input>
              </b-form-group>
              <b-form-group
                id="input-group-3"
                label="Senha:"
                label-for="input-3"
                autofocus="true"
              >
                <b-form-input
                  id="input-3"
                  type="password"
                  v-model="form.password"
                  placeholder="Senha"
                  required
                ></b-form-input>
              </b-form-group>
              <div class="mb-4">
                <div>
                  <b-alert v-model="alertaErro" variant="danger" dismissible>{{
                    msg
                  }}</b-alert>
                  <b-alert v-model="alertaConfir" variant="success" dismissible>{{
                    msg
                  }}</b-alert>
                </div>
                <router-link to="/login">Conecte-se</router-link>
              </div>
              <b-button class="mr-5" type="submit" variant="primary"
                >Cadastrar</b-button
              >
              <b-button type="reset" variant="danger">Limpar</b-button>
            </b-form>
          </b-card>
          <div></div>
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
        name: "",
        email: "",
        password: "",
      },
      msg: "",
      alertaErro: false,
      alertaConfir: false,
      show: true,
    };
  },
  methods: {
    ...mapActions(["Cadastrar"]),
    ...mapGetters(["token"]),
    async onSubmit(event) {
      event.preventDefault(),
        await this.$store.dispatch("Cadastrar", this.form);
      if (this.$store.getters.statusCode == 200 && this.$store.getters.token) {
        this.msg = "Tudo OK!.";
        this.alertaConfir = true;
        this.$router.push({ name: "dashboard" });
          } else if(navigator.online != true) {
          this.msg = "Opps! você estar sem conexão!";
          this.alertaErro = true;
      }else{
        this.msg = "Desculpe, não foi possivel efetuar cadastro.";
        this.alertaErro = true;
      }
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.name = "";
      this.form.email = "";
      this.form.password = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
