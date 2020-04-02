import Vue from "vue";
import Vuex from "vuex";
// import { api } from "@/services.js";
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
    usuario: {
      id: "",
      nome: "Usuário de Teste",
      email: "",
      senha: "",
      confirmaSenha: "",
      celular: "",
      genero: "",
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
    usuario_tarefas: null,
    rules: {
      required: v => v ? !!v || 'Esse campo deve ser preenchido.' : true,
      email: v => v ? /.+@.+\..+/.test(v) || 'O e-mail deve ser válido.' : true
    }
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.login = payload;
    },
    UPDATE_USUARIO(state, payload) {
      state.usuario = Object.assign(state.usuario, payload);
    },
    UPDATE_USUARIO_TAREFAS(state, payload) {
      state.usuario_tarefas = payload;
    },
    ADD_USUARIO_TAREFAS(state, payload) {
      state.usuario_tarefas.unshit(payload);
    }
  },
  // actions: {
  //   getUsuarioTarefas(context) {
  //     api
  //       .get(`/tarefa?id_funcionario=${context.state.usuario.id}`)
  //       .then(response => {
  //         context.commit("UPDATE_USUARIO_TAREFAS", response.data);
  //       });
  //   },
  //   getUsuario(context, payload) {
  //     return api.get(`/usuario/${payload}`).then(response => {
  //       context.commit("UPDATE_USUARIO", response.data);
  //       context.commit("UPDATE_LOGIN", true);
  //     });
  //   },
  //   criarUsuario(context, payload) {
  //     context.commit("UPDATE_USUARIO", { id: payload.email });
  //     return api.post("/usuario", payload);
  //   },
  //   deslogarUsuario(context) {
  //     context.commit("UPDATE_USUARIO",{
  //       id: "",
  //       nome: "",
  //       email: "",
  //       senha: "",
  //       celular: "",
  //       genero: "",
  //       admin: "",
  //       cpf: "",
  //       rg: "",
  //       id_depto: "",
  //       data_nascimento: "",
  //       salario: "",
  //       endereco: {
  //         cep: "",
  //         rua: "",
  //         numero: "",
  //         bairro: "",
  //         cidade: "",
  //         estado: "",
  //       },
  //     });
  //     context.commit("UPDATE_LOGIN", false);
  //   }
  // }
});