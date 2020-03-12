import Vue from 'vue'
import App from './App.vue'
// Tornar o componente global:
// import ComponenteTeste from "./componentes/ComponenteTeste.vue";
// Vue.component("ComponenteTeste", ComponenteTeste);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// renderizacao de template

// const vm = new Vue({
//   el: "#app",
//   render(createElement){
//     return createElement(App);
//   },
//   components:{
//     App
//   }
// });

//monta o template após 2 segundos
// setTimeout(() => {
//   vm.$mount('#app')
// }, 2000);