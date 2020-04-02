<template>
  <div id="app">
    <v-row id="app-row" no-gutters>
      <v-col class="side">
        <SideBar v-show="$store.state.login"></SideBar>
      </v-col>
      <v-col>
        <div>
          <main id="main">
            <transition mode="out-in">
              <router-view />
            </transition>
          </main>
        </div>
      </v-col>
    </v-row>
    <Footer />
  </div>
</template>

<script>
// import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import SideBar from "@/components/SideBar.vue";

export default {
  components: {
    // Header,
    Footer,
    SideBar
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

body,
ul,
li,
h1,
h2,
p {
  padding: 0px;
  margin: 0px;
}

ul {
  list-style: none;
}

body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: rgb(87, 87, 87);
}

a {
  color: #345;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#main {
  flex: 1;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s;
}

.v-enter {
  transform: translateX(-10px);
  opacity: 0;
}

.v-leave-to {
  transform: translateX(10px);
}

.v-text-field--solo-inverted.v-input--is-focused
  > .v-input__control
  > .v-input__slot
  input {
  caret-color: aqua;
}
.side {
  width: 65px !important;
  max-width: 65px !important;
}
#app-row .col {
  padding-top: 0px !important;
  height: 100%;
}
button {
  color: white !important;
}
</style>
