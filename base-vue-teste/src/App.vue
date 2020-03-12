<template>
  <div>
    <div id="app">{{mensagem}}</div>
    <div>
      <ComponenteTeste/>
      <!-- <componente-teste></componente-teste> -->
    </div>
  </div>
</template>

<script>
import ComponenteTeste from "./components/ComponenteTeste.vue";

export default {
  data(){
    return{
      mensagem: "testando mensagem"
    };
  },
  components:{
    ComponenteTeste
  }
};
</script>

<style>

</style>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
