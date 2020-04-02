<template>
  <div>
    <v-app id="inspire">
      <v-row justify="center">
        <v-col lg="auto">
          <v-btn
            @click="changeCadastro('f'), selected = 'f'"
            :class="{active: selected == 'f', desactive: selected == 'd'}"
          >Cadastro Funcionário</v-btn>
        </v-col>
        <v-col md="auto">
          <v-btn
            @click="changeCadastro('d'),  selected = 'd'"
            :class="{active: selected == 'd', desactive: selected == 'f'}"
          >Cadastro Departamento</v-btn>
        </v-col>
      </v-row>
    </v-app>
    <div class="buttons"></div>
    <transition mode="out-in">
      <CadastroFuncionario v-if="cadastrofunc === true && cadastrodep === false" />
      <CadastroDepartamento v-else-if="cadastrofunc === false && cadastrodep === true" />
    </transition>
  </div>
</template>

<script>
import CadastroFuncionario from "@/components/CadastroFuncionario.vue";
import CadastroDepartamento from "@/components/CadastroDepartamento.vue";
export default {
  name: "Cadastro",
  data() {
    return {
      selected: "f",
      cadastrofunc: true,
      cadastrodep: false
    };
  },
  components: {
    CadastroFuncionario,
    CadastroDepartamento
  },
  methods: {
    changeCadastro(tipo) {
      if (tipo === "f") {
        this.cadastrofunc = true;
        this.cadastrodep = false;
      } else {
        this.cadastrodep = true;
        this.cadastrofunc = false;
      }
    }
  }
};
</script>

<style>
.active {
  background-color: #37ada2 !important;
}

#inspire {
  width: 550px;
  margin: 0 auto;
  height: 70px !important;
  margin-top: 20px;
}

.desactive {
  color: grey !important;
}

h1 {
  text-align: center;
}

h3 {
  margin-top: 10px;
}

.buttons {
  float: right;
  margin-top: 10px;
}

.v-form {
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
}
</style>