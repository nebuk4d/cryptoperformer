<template>
  <Header></Header>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/Header.vue";

import "primevue/resources/themes/vela-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css"; //primeflex

export default defineComponent({
  name: "App",
  components: { Header },
  setup() {},
});
</script>

<style lang="css">
:root {
  background-color: var(--surface-a);
  color: var(--text-color);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
