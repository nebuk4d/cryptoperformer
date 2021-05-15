<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <NewCoinModal />
  <CoinList msg="This is the coinlist" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CoinList from "./components/CoinList.vue";
import NewCoinModal from "./components/NewCoinModal.vue";

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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
