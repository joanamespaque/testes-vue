import Vue from "vue";
import Vuex from "vuex";
import {
  api
} from "@/services.js";
Vue.use(Vuex);

export default new Vuex.Store({
  data() {
    return {
      allowSpaces: false
    }
  },
  strict: true,
  state: {
    login: true,
    departamento: {
      id: "",
      nome: ""
    },
    funcionario: {
      id: "",
      nome: "",
      email: "",
      senha: "",
      confirmaSenha: "",
      celular: "",
      admin: "",
      cpf: "",
      rg: "",
      id_depto: "",
      data_nascimento: "",
      salario: "",
      cep: "",
      rua: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: "",

    },
    funcionario_tarefas: null,
    rules: {
      required: v => v ? !!v || 'Esse campo deve ser preenchido.' : true,
      email: v => v ? /.+@.+\..+/.test(v) || 'O e-mail deve ser válido.' : true,
    }
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_FUNCIONARIO(state, payload) {
      state.funcionario = Object.assign(state.funcionario, payload);
    },
    UPDATE_DEPARTAMENTO(state, payload) {
      state.funcionario = Object.assign(state.departamento, payload);
    },
    UPDATE_FUNCIONARIO_TAREFAS(state, payload) {
      state.funcionario_tarefas = payload;
    },
    ADD_FUNCIONARIO_TAREFAS(state, payload) {
      state.funcionario_tarefas.unshit(payload);
    }
  },

  actions: {
    getfuncionario(context, payload) {
      return api.get(`/funcionario/${payload}`).then(response => {
        context.commit("UPDATE_FUNCIONARIO", response.data);
        context.commit("UPDATE_LOGIN", true);
      });
    },
    criarfuncionario(context, payload) {
      api.get('/funcionario').then(response => {
        context.commit("UPDATE_FUNCIONARIO", {
          id: (response.data[response.data.length - 1].id + 1)
        });
      });
      console.log("entrou no criar");
      return api.post("/funcionario", payload);
    },
    deslogarfuncionario(context) {
      context.commit("UPDATE_FUNCIONARIO", {
        id: "",
        nome: "",
        email: "",
        senha: "",
        celular: "",
        admin: "",
        cpf: "",
        rg: "",
        id_depto: "",
        data_nascimento: "",
        salario: "",
        endereco: {
          cep: "",
          rua: "",
          numero: "",
          bairro: "",
          cidade: "",
          estado: "",
        },
      });
      context.commit("UPDATE_LOGIN", false);
    }
  }
});