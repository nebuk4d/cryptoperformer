<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <NewCoinModal />
  <CoinList msg="This is the coinlist" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CoinList from "./components/CoinList.vue";
import NewCoinModal from "./components/NewCoinModal.vue";

import "primevue/resources/themes/vela-blue/theme.css"       //theme
import "primevue/resources/primevue.min.css"                 //core css
import "primeicons/primeicons.css"                           //icons

export default defineComponent({
  name: "App",
  components: {
    CoinList,
    NewCoinModal,
  },
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
