(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0c54":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"GooglePlace"},[a("div",[a("b-card",{staticClass:"text-center"},[a("div",{staticClass:"text-light"},[a("b-form",[a("b-input-group",{staticClass:"mt-3",attrs:{prepend:"Seu local"}},[a("b-form-input",{model:{value:t.endercoUsuario,callback:function(e){t.endercoUsuario=e},expression:"endercoUsuario"}}),a("b-input-group-append",[a("b-button",{attrs:{type:"text",variant:"info"},on:{click:function(e){return e.preventDefault(),t.PegarLocalizacao(e)}}},[a("b-icon",{attrs:{icon:"geo-alt"}})],1),a("b-button",{attrs:{type:"",variant:""},on:{click:function(e){return e.preventDefault(),t.LimparLocal(e)}}},[t._v("Limpar")]),a("b-button",{attrs:{type:"",variant:"success"},on:{click:function(e){return e.preventDefault(),t.ProcurarLocal(e)}}},[t._v("Buscar")])],1)],1),a("div",{staticClass:" mt-3"},[a("b-form-select",{attrs:{options:t.optionsLocal},model:{value:t.SeletorLocal,callback:function(e){t.SeletorLocal=e},expression:"SeletorLocal"}}),a("b-form-select",{staticClass:"mt-3",attrs:{options:t.optionsDistancia,size:"sm"},model:{value:t.SeletorDistancia,callback:function(e){t.SeletorDistancia=e},expression:"SeletorDistancia"}})],1)],1)],1),a("div",{staticClass:"div-geral mt-3"},[a("div",{staticClass:" list-lugares"},[a("b-list-group",[a("b-list-group-item",[t._v("LISTA DE LUGARES")])],1),a("div",{staticClass:"col-12 mt-5"},t._l(t.places,(function(e,r){return a("ul",{key:r,staticClass:"list-unstyled"},[a("b-media",{attrs:{tag:"li"},scopedSlots:t._u([{key:"aside",fn:function(){return[a("b-img",{attrs:{src:e.icon,width:"60",alt:"placeholder"}})]},proxy:!0}],null,!0)},[a("h5",{staticClass:"mt-0 mb-1"},[t._v(t._s(e.name))]),a("p",{staticClass:"mb-0"},[t._v(" "+t._s(e.vicinity)+" ")])])],1)})),0)],1),a("div",{staticClass:"col-8"},[a("GmapMap",{staticStyle:{width:"950px",height:"600px"},attrs:{center:{lat:this.lat,lng:this.lng},zoom:13,"map-type-id":"terrain"}},t._l(t.markers,(function(e,r){return a("GmapMarker",{key:r,attrs:{position:e.position,clickable:!0,draggable:!1},on:{click:function(a){t.center=e.position}}})})),1)],1)])])],1)])},o=[],s=a("1da1"),i=(a("96cf"),a("d81d"),a("d3b7"),a("25f0"),a("fb6a"),a("159b"),a("bc3a")),n=a.n(i),l={name:"GooglePlace",components:{},data:function(){return{SeletorDistancia:null,SeletorLocal:null,optionsLocal:[{value:"restaurant",text:"Restaurantes"},{value:"church",text:"Igreja"},{value:"hospital",text:"Hospital"},{value:"store",text:"Lojas"},{value:"school",text:"Escolas"}],optionsDistancia:[{value:"5000",text:"5 KM"},{value:"10000",text:"10 KM"},{value:"15000",text:"15 KM"},{value:"20000",text:"20 KM"}],lat:0,lng:0,places:[],markers:[],latResultado:{},lngResultado:{},endercoUsuario:"",key:"AIzaSyCWp0kqYKOImm0UsHz17vaRq4kHOwsnqI4"}},methods:{PegarLocalizacao:function(){var t=this;navigator.geolocation.getCurrentPosition((function(e){t.lat=e.coords.latitude,t.lng=e.coords.longitude,n.a.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+t.lat+","+t.lng+"&key="+t.key).then((function(e){t.endercoUsuario=e.data.results;var a=t.endercoUsuario.map((function(t){return t.formatted_address}));t.endercoUsuario=a.slice(0,1).toString()})).catch((function(t){console.log(t)}))}))},ProcurarLocal:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,n.a.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+t.lat+","+t.lng+"&radius="+t.SeletorDistancia+"&type="+t.SeletorLocal+"&keyword=cruise&key="+t.key).then((function(e){t.places=e.data.results,t.places.forEach((function(e){t.latResultado=e.geometry.location.lat,t.lngResultado=e.geometry.location.lng;var a={position:{lat:t.latResultado,lng:t.lngResultado}};t.markers.push(a)}))})).catch((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},LimparLocal:function(){this.SeletorLocal="",this.SeletorDistancia="",this.markers=[],this.places=[]}}},c=l,u=(a("2761"),a("2877")),m=Object(u["a"])(c,r,o,!1,null,"f49f7bd8",null);e["default"]=m.exports},"0c7c":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"dashboard"}},[a("app-navbar"),a("GooglePlace")],1)},o=[],s=a("0c54"),i={name:"Dashboard",components:{GooglePlace:s["default"]}},n=i,l=a("2877"),c=Object(l["a"])(n,r,o,!1,null,null,null);e["default"]=c.exports},"25f0":function(t,e,a){"use strict";var r=a("6eeb"),o=a("825a"),s=a("d039"),i=a("ad6d"),n="toString",l=RegExp.prototype,c=l[n],u=s((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),m=c.name!=n;(u||m)&&r(RegExp.prototype,n,(function(){var t=o(this),e=String(t.source),a=t.flags,r=String(void 0===a&&t instanceof RegExp&&!("flags"in l)?i.call(t):a);return"/"+e+"/"+r}),{unsafe:!0})},2761:function(t,e,a){"use strict";a("d1f8")},"4fcd":function(t,e,a){"use strict";a("ebda")},"578a":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-5"},[r("b-container",{staticClass:"bv-example-row text-center"},[r("b-row",{staticClass:"justify-content-center"},[r("b-col",{attrs:{col:"",lg:"4",md:"auto"}},[r("b-card",[r("img",{attrs:{width:"100",alt:"Vue logo",src:a("771f")}}),t.show?r("b-form",{staticClass:"mt-4",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)},reset:t.onReset}},[r("b-form-group",{attrs:{id:"input-group-1",label:"Endereço de Email:","label-for":"input-1"}},[r("b-form-input",{attrs:{id:"input-1",type:"email",placeholder:"Email",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),r("b-form-group",{attrs:{id:"input-group-2",label:"Senha:","label-for":"input-2",autofocus:"true"}},[r("b-form-input",{attrs:{id:"input-2",type:"password",placeholder:"Senha",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),r("div",{staticClass:"mb-3 mt-2"},[r("b-alert",{attrs:{variant:"danger",dismissible:""},model:{value:t.alertaErro,callback:function(e){t.alertaErro=e},expression:"alertaErro"}},[t._v(t._s(t.msg))]),r("b-alert",{attrs:{variant:"success",dismissible:""},model:{value:t.alertaConfir,callback:function(e){t.alertaConfir=e},expression:"alertaConfir"}},[t._v(t._s(t.msg))]),r("router-link",{attrs:{to:"/cadastro"}},[t._v("Cadastre-se")])],1),r("b-button",{staticClass:"mr-5",attrs:{type:"submit",variant:"primary"}},[t._v("Entrar")]),r("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Limpar")])],1):t._e()],1),r("div")],1)],1)],1)],1)},o=[],s=a("1da1"),i=a("5530"),n=(a("96cf"),a("2f62")),l={name:"Login",data:function(){return{form:{email:"",password:""},msg:"",alertaErro:!1,alertaConfir:!1,show:!0}},methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(n["b"])(["ListarUsuarios","Logar"])),Object(n["d"])(["token"])),{},{onSubmit:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("Logar",t.form);case 2:200==t.$store.getters.statusCode&&t.$store.state.token?(t.msg="Tudo OK!",t.alertaConfir=!0,t.$router.push({name:"dashboard"})):1!=navigator.online?(t.msg="Opps! você estar sem conexão!",t.alertaErro=!0):(t.msg="Desculpe, verifique suas credenciais",t.alertaErro=!0);case 3:case"end":return e.stop()}}),e)})))()},onReset:function(t){var e=this;t.preventDefault(),this.form.email="",this.form.password="",this.show=!1,this.$nextTick((function(){e.show=!0}))}})},c=l,u=a("2877"),m=Object(u["a"])(c,r,o,!1,null,null,null);e["default"]=m.exports},7377:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-5"},[r("b-container",{staticClass:"bv-example-row text-center"},[r("b-row",{staticClass:"justify-content-center"},[r("b-col",{attrs:{col:"",lg:"4",md:"auto"}},[r("b-card",[r("img",{attrs:{width:"100",alt:"Vue logo",src:a("771f")}}),r("h1",[t._v("Atualize seus dados")]),t.show?r("b-form",{on:{submit:t.onSubmit,reset:t.onReset}},[r("b-form-group",{attrs:{id:"input-group-1",label:"Nome:","label-for":"input-1"}},[r("b-form-input",{attrs:{id:"input-1",placeholder:"Nome"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}},[t._v(t._s(t.nameUsuario))])],1),r("b-form-group",{attrs:{id:"input-group-2",label:"Email:","label-for":"input-2"}},[r("b-form-input",{attrs:{id:"input-2",type:"email",placeholder:"Email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}},[t._v(t._s(t.emailUsuario))])],1),r("b-form-group",{attrs:{id:"input-group-3",label:"Senha:","label-for":"input-3"}},[r("b-form-input",{attrs:{id:"input-3",type:"text",placeholder:"Senha"},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),r("b-alert",{attrs:{variant:"danger",dismissible:""},model:{value:t.alertaErro,callback:function(e){t.alertaErro=e},expression:"alertaErro"}},[t._v(t._s(t.msg))]),r("b-alert",{attrs:{variant:"success",dismissible:""},model:{value:t.alertaconfir,callback:function(e){t.alertaconfir=e},expression:"alertaconfir"}},[t._v(t._s(t.msg))]),r("b-button",{staticClass:"mr-5",attrs:{type:"submit",variant:"primary"}},[t._v("Salvar")]),r("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Limpar")])],1):t._e()],1)],1)],1)],1)],1)},o=[],s=a("1da1"),i=a("5530"),n=(a("b0c0"),a("96cf"),a("2f62")),l={data:function(){return{form:{email:"",name:"",password:""},nameUsuario:"",emailUsuario:"",msg:"",alertaconfir:!1,alertaErro:!1,show:!0}},mounted:function(){localStorage.getItem("nomeLocal")&&localStorage.getItem("nomeLocalCadastro")?localStorage.getItem("emailLocal")&&localStorage.getItem("emailLocalCadastro")?(localStorage.removeItem("emailLocal"),localStorage.removeItem("emailLocalCadastro"),localStorage.removeItem("nomeLocal"),localStorage.removeItem("nomeLocalCadastro")):this.emailUsuario=JSON.parse(localStorage.getItem("nomeLocal")||localStorage.getItem("emailLocalCadastro")):this.nameUsuario=JSON.parse(localStorage.getItem("emailLocal")||localStorage.getItem("emailLocalCadastro"))},methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(n["b"])(["Atualizar"])),Object(n["c"])(["token"])),{},{onSubmit:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.preventDefault(),a.next=3,e.$store.dispatch("Atualizar",e.form);case 3:200==e.$store.getters.statusCode?(e.msg="Dados atalizados.",e.alertaconfir=!0,e.$router.push({name:"perfil"})):(console.log(e.form),e.msg="Desculpe, não foi possivel Atualizar seus dados.",e.alertaErro=!0);case 4:case"end":return a.stop()}}),a)})))()},onReset:function(t){var e=this;t.preventDefault(),this.form.email="",this.form.name="",this.form.password="",this.show=!1,this.$nextTick((function(){e.show=!0}))}})},c=l,u=a("2877"),m=Object(u["a"])(c,r,o,!1,null,null,null);e["default"]=m.exports},"771f":function(t,e,a){t.exports=a.p+"img/mesa-logo.71007257.png"},ad6d:function(t,e,a){"use strict";var r=a("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ad72:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-5"},[r("b-container",{staticClass:"bv-example-row text-center"},[r("b-row",{staticClass:"justify-content-center"},[r("b-col",{attrs:{col:"",lg:"4",md:"auto"}},[r("b-card",[r("img",{attrs:{width:"100",alt:"Vue logo",src:a("771f")}}),t.show?r("b-form",{staticClass:"mt-4",on:{submit:t.onSubmit,reset:t.onReset}},[r("b-form-group",{attrs:{id:"input-group-1",label:"Nome:","label-for":"input-1"}},[r("b-form-input",{attrs:{id:"input-1",type:"text",placeholder:"Nome",required:""},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),r("b-form-group",{attrs:{id:"input-group-2",label:"Endereço de Email:","label-for":"input-2"}},[r("b-form-input",{attrs:{id:"input-2",type:"email",placeholder:"Email",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),r("b-form-group",{attrs:{id:"input-group-3",label:"Senha:","label-for":"input-3",autofocus:"true"}},[r("b-form-input",{attrs:{id:"input-3",type:"password",placeholder:"Senha",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),r("div",{staticClass:"mb-4"},[r("div",[r("b-alert",{attrs:{variant:"danger",dismissible:""},model:{value:t.alertaErro,callback:function(e){t.alertaErro=e},expression:"alertaErro"}},[t._v(t._s(t.msg))]),r("b-alert",{attrs:{variant:"success",dismissible:""},model:{value:t.alertaConfir,callback:function(e){t.alertaConfir=e},expression:"alertaConfir"}},[t._v(t._s(t.msg))])],1),r("router-link",{attrs:{to:"/login"}},[t._v("Conecte-se")])],1),r("b-button",{staticClass:"mr-5",attrs:{type:"submit",variant:"primary"}},[t._v("Cadastrar")]),r("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Limpar")])],1):t._e()],1),r("div")],1)],1)],1)],1)},o=[],s=a("1da1"),i=a("5530"),n=(a("b0c0"),a("96cf"),a("2f62")),l={data:function(){return{form:{name:"",email:"",password:""},msg:"",alertaErro:!1,alertaConfir:!1,show:!0}},methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(n["b"])(["Cadastrar"])),Object(n["c"])(["token"])),{},{onSubmit:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.preventDefault(),a.next=3,e.$store.dispatch("Cadastrar",e.form);case 3:200==e.$store.getters.statusCode&&e.$store.getters.token?(e.msg="Tudo OK!.",e.alertaConfir=!0,e.$router.push({name:"dashboard"})):1!=navigator.online?(e.msg="Opps! você estar sem conexão!",e.alertaErro=!0):(e.msg="Desculpe, não foi possivel efetuar cadastro.",e.alertaErro=!0);case 4:case"end":return a.stop()}}),a)})))()},onReset:function(t){var e=this;t.preventDefault(),this.form.name="",this.form.email="",this.form.password="",this.show=!1,this.$nextTick((function(){e.show=!0}))}})},c=l,u=a("2877"),m=Object(u["a"])(c,r,o,!1,null,null,null);e["default"]=m.exports},bb51:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("div",[r("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),r("router-link",{attrs:{to:"/login"}},[t._v("Login")])],1),r("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),r("h1",[t._v("Case Atividades")]),r("b-container",[r("div",{staticClass:"atividades"},[r("b-list-group",{},[r("b-list-group-item",[r("b-icon",{attrs:{icon:"check-circle-fill",variant:"success"}}),t._v("VUE CLI")],1),r("b-list-group-item",[r("b-icon",{attrs:{icon:"check-circle-fill",variant:"success"}}),t._v("BOOTSTRAP")],1),r("b-list-group-item",[r("b-icon",{attrs:{icon:"check-circle-fill",variant:"success"}}),t._v("ROUTER")],1),r("b-list-group-item",[r("b-icon",{attrs:{icon:"check-circle-fill",variant:"success"}}),t._v("AXIOS")],1),r("b-list-group-item",[r("b-icon",{attrs:{icon:"check-circle-fill",variant:"success"}}),t._v("VUEX")],1),r("b-list-group-item",[r("b-icon",{attrs:{icon:"check-circle-fill",variant:"success"}}),t._v("ROUTER beforeEach (Proteção de rotas)")],1)],1),r("b-list-group",{},[r("b-list-group-item",[r("b-icon",{attrs:{icon:"check-circle-fill",variant:"success"}}),t._v("PERFIL")],1),r("b-list-group-item",[r("b-icon",{attrs:{icon:"check-circle-fill",variant:"success"}}),t._v("LOGOUT")],1),r("b-list-group-item",[r("b-icon",{attrs:{icon:"check-circle-fill",variant:"success"}}),t._v("AUTENTICAÇÃO COM API REST(https://regres.in)")],1),r("b-list-group-item",[r("b-icon",{attrs:{icon:"check-circle-fill",variant:"success"}}),t._v("BUSCA DE LOCAIS COM API REST(https://maps.google.com/place)")],1),r("b-list-group-item",[r("b-icon",{attrs:{icon:"check-circle-fill",variant:"success"}}),t._v("LISTAGEM DE LOCAIS EM FORMA DE LISTA")],1),r("b-list-group-item",[r("b-icon",{attrs:{icon:"check-circle-fill",variant:"success"}}),t._v("LISTAGEM DE LOCAIS EM FORMA DE MAPA")],1)],1),r("b-list-group",{},[r("b-list-group-item",[r("b-icon",{attrs:{icon:"check-circle-fill",variant:"success"}}),t._v("TRATAMENTOS DE ERROS")],1),r("b-list-group-item",[r("b-icon",{attrs:{icon:"check-circle-fill",variant:"success"}}),t._v("DOCKER E DOCKER COMPOSE")],1),r("b-list-group-item",[r("b-icon",{attrs:{icon:"check-circle-fill",variant:"success"}}),t._v("REPOSITÓRIO GITHUB")],1),r("b-list-group-item",[r("b-icon",{attrs:{icon:"check-circle-fill",variant:"success"}}),t._v("DEPOLY HEROKU")],1),r("b-list-group-item",[r("b-icon",{attrs:{icon:"x-circle-fill",variant:"danger"}}),t._v("SALVAR EM FAVORITOS")],1),r("b-list-group-item",[r("b-icon",{attrs:{icon:"x-circle-fill",variant:"danger"}}),t._v("AVALIAR COM RATING E COMENTARIOS ")],1)],1)],1)])],1)},o=[],s={name:"Home",components:{}},i=s,n=(a("4fcd"),a("2877")),l=Object(n["a"])(i,r,o,!1,null,"c2e5edee",null);e["default"]=l.exports},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},d1f8:function(t,e,a){},d81d:function(t,e,a){"use strict";var r=a("23e7"),o=a("b727").map,s=a("1dde"),i=s("map");r({target:"Array",proto:!0,forced:!i},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},ebda:function(t,e,a){},fb6a:function(t,e,a){"use strict";var r=a("23e7"),o=a("861d"),s=a("e8b5"),i=a("23cb"),n=a("50c4"),l=a("fc6a"),c=a("8418"),u=a("b622"),m=a("1dde"),p=m("slice"),f=u("species"),d=[].slice,b=Math.max;r({target:"Array",proto:!0,forced:!p},{slice:function(t,e){var a,r,u,m=l(this),p=n(m.length),v=i(t,p),g=i(void 0===e?p:e,p);if(s(m)&&(a=m.constructor,"function"!=typeof a||a!==Array&&!s(a.prototype)?o(a)&&(a=a[f],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return d.call(m,v,g);for(r=new(void 0===a?Array:a)(b(g-v,0)),u=0;v<g;v++,u++)v in m&&c(r,u,m[v]);return r.length=u,r}})}}]);
//# sourceMappingURL=about.cf654fdf.js.map