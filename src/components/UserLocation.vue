<template>
  <div class="UserLocation">
      <div>
        <b-card class="text-center">
            <div class=" text-light">
            <b-form >
             <b-input-group prepend="Endereço" class="mt-3">
                <b-form-input  v-model="Coordenadas"></b-form-input>
                <b-input-group-append>
                <b-button @click.prevent="PegarLocalizacao" type="text" variant="info"><b-icon  icon="geo-alt"></b-icon></b-button>
                <b-button type="" @click.prevent="BuscarLocal" variant="info">Buscar</b-button>
                </b-input-group-append>
            </b-input-group>
            <div class="mt-3">
                <b-form-select v-model="SeletorLocal" :options="optionsLocal"></b-form-select>
                <b-form-select v-model="SeletorDistancia" :options="optionsDistancia" size="sm" class="mt-3"></b-form-select>
                <div class="mt-3">Selected: <strong>{{ SeletorDistancia }}</strong></div>
              </div>
            </b-form>
            </div>
            <div ref="map"></div>
        </b-card>
        </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios"
export default {
  name: "UserLocation",
  components: {
  },
  data() {
      return {
        SeletorDistancia:null,
        SeletorLocal: null,
        optionsLocal: [
          { value: 'restaurant', text: 'Restaurantes' },
        ],
        optionsDistancia: [
          { value: '5', text: '5 KM' },
          { value: '10', text: '10 KM' },
          { value: '15', text: '15 KM' },
          { value: '20', text: '20 KM' },
        ],
        lat:0,
        lng:0,
        key: 'AIzaSyD4URhpJZCaikNltDvrWDuOjcg9tc_oJ8s',
      }

    },
    computed:{
      Coordenadas(){
        return `${this.lat},${this.lng}`;
      }
    },
    methods:{
      PegarLocalizacao(){
        navigator.geolocation.getCurrentPosition( posicao=>{
            this.lat = posicao.coords.latitude
            this.lng = posicao.coords.longitude
        }),
        error =>{
          console.log("Erro na localização" + error);
        }
      },
    async  BuscarLocal(){
        const URL = `https://mgoogleplace.herokuapp.com/https://mgoogleplace.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.lat},${this.lng}&type=${this.SeletorLocal}&radius${this.SeletorDistancia*1000}&key=${this.key}`;

       await axios.get(URL).then((res=>{
          console.log(res.data);
        })).catch((err=>{
          console.log(err);
        }))
      }
    }
}
</script>
