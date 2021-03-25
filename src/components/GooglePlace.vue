<template>
  <div class="GooglePlace">
    <div>
      <b-card class="text-center">
        <div class="text-light">
          <b-form>
            <b-input-group prepend="Seu local" class="mt-3">
              <b-form-input v-model="endercoUsuario"></b-form-input>
              <b-input-group-append>
                <b-button
                  @click.prevent="PegarLocalizacao"
                  type="text"
                  variant="info"
                  ><b-icon icon="geo-alt"></b-icon
                ></b-button>
                <b-button type="" @click.prevent="LimparLocal" variant=""
                  >Limpar</b-button>
                <b-button type="" @click.prevent="ProcurarLocal" variant="success"
                  >Buscar</b-button>
              </b-input-group-append>
            </b-input-group>
            <div class=" mt-3">
              <b-form-select
                v-model="SeletorLocal"
                :options="optionsLocal"
              ></b-form-select>
              <b-form-select
                v-model="SeletorDistancia"
                :options="optionsDistancia"
                size="sm"
                class="mt-3"
              ></b-form-select>
            </div>
          </b-form>
        </div>
        <div class="div-geral mt-3">
            <div class=" list-lugares">
              <b-list-group>
                <b-list-group-item>LISTA DE LUGARES</b-list-group-item>
              </b-list-group>
            <div class="col-12 mt-5">
              <ul class="list-unstyled" v-for="(place,index) in places" :key="index">
                <b-media tag="li">
                  <template #aside>
                    <b-img
                      :src="place.icon"
                      width="60"
                      alt="placeholder"
                    ></b-img>
                  </template>
                  <h5 class="mt-0 mb-1">{{ place.name }}</h5>
                  <p class="mb-0">
                    {{ place.vicinity }}
                  </p>
                </b-media>
              </ul>
            </div>
          </div>
          <div class="col-8">
            <GmapMap
              :center="{ lat: this.lat, lng: this.lng }"
              :zoom="13"
              map-type-id="terrain"
              style="width: 950px; height: 600px">
              <GmapMarker
                :key="index"
                v-for="(markers, index) in markers"
                :position="markers.position"
                :clickable="true"
                :draggable="false"
                @click="center = markers.position"
              />
            </GmapMap>
          </div>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: "GooglePlace",
  components: {},
  data() {
    return {
      SeletorDistancia: null,
      SeletorLocal: null,
      optionsLocal: [
        { value: "restaurant", text: "Restaurantes" },
        { value: "church", text: "Igreja" },
        { value: "hospital", text: "Hospital" },
        { value: "store", text: "Lojas" },
        { value: "school", text: "Escolas" },],
      optionsDistancia: [
        { value: "5000", text: "5 KM" },
        { value: "10000", text: "10 KM" },
        { value: "15000", text: "15 KM" },
        { value: "20000", text: "20 KM" },],
      lat: 0,
      lng: 0,
      places: [],
      markers: [],
      latResultado: {},
      lngResultado: {},
      endercoUsuario:'',
      key: "AIzaSyCWp0kqYKOImm0UsHz17vaRq4kHOwsnqI4",
    };
  },
  methods: {
  PegarLocalizacao() {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+this.lat+","+this.lng+"&key="+this.key+"").then(res =>{
          this.endercoUsuario = res.data.results
          let roots = this.endercoUsuario.map((e)=>{
           return e.formatted_address
         });
         this.endercoUsuario = roots.slice(0,1).toString()
        }).catch((err) => {
          console.log(err);
        });
      })
    },
async  ProcurarLocal() {
    await axios
        .get(
          "https://mgoogleplace.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" +
            this.lat +
            "," +
            this.lng +
            "&radius=" +
            this.SeletorDistancia +
            "&type=" +
            this.SeletorLocal +
            "&keyword=cruise&key=" +
            this.key
        )
        .then((res) => {
          this.places = res.data.results;
          this.places.forEach((place) => {
            this.latResultado = place.geometry.location.lat;
            this.lngResultado = place.geometry.location.lng;
            const resultadoLocais = {
              position: { lat: this.latResultado, lng: this.lngResultado },
            };
            this.markers.push(resultadoLocais);
            
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    LimparLocal(){
      this.SeletorLocal = '',
      this.SeletorDistancia = ''
      this.markers = [];
      this.places = [];
    },

  },
};
</script>
<style scoped>
.div-geral{
  display: inline-flex;
}

@media (max-width:769px) {
  .vue-map-container{
    width: 325px!important;
    margin-left: -8%;
    margin-top: 15%;
  }
  .div-geral{
  display: block;
  }
}
@media (min-width:1024px) {
.list-lugares{
      width: 500px;

}
}
</style>