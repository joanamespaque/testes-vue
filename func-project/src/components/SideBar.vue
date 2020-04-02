<template>
  <div class="ma-12 pa-12 side_bar">
    <v-list>
      <v-tooltip right>
        <template v-slot:activator="{ on }">
          <v-list-item class="px-2" v-on="on">
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>
        </template>
        <span>Perfil | {{$store.state.usuario.nome}}</span>
      </v-tooltip>
    </v-list>

    <v-divider></v-divider>

    <v-list nav dense class="margin-style" v-for="item in items" :key="item.nome">
      <v-tooltip right>
        <template v-slot:activator="{ on }">
          <v-list-item link v-on="on" :to="item.to">
            <v-list-item-icon>
              <v-icon class="color-icon">{{item.icon}}</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </template>
        <span>{{item.tooltip}}</span>
      </v-tooltip>
    </v-list>
    <v-app></v-app>
  </div>
</template>
<script>
export default {
  name: "SideBar",
  data() {
    return {
      items: [
        {
          name: "home",
          to: "/",
          icon: "mdi-home",
          tooltip: "Início"
        },
        {
          name: "cadastro",
          to: "/cadastro",
          icon: "mdi-plus-box",
          tooltip: "Novo Cadastro"
        },
        {
          name: "funcionarios",
          to: "/funcionarios",
          icon: "mdi-badge-account-horizontal",
          tooltip: "Listar Funcionários"
        },
        {
          name: "departamentos",
          to: "/departamentos",
          icon: "mdi-view-list",
          tooltip: "Listar Departamentos"
        },
        {
          name: "tarefas",
          to: "/tarefas",
          icon: "mdi-clipboard-text",
          tooltip: "Suas Tarefas"
        }
      ]
    };
  }
};
</script>

<style scoped>
.margin-style {
  margin-left: 5px;
}
.color-icon {
  color: #2ca69a !important;
}
.side_bar {
  width: 65px;
  z-index: 1;
  top: 0;
  left: 0;
  float: left;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
}
</style>