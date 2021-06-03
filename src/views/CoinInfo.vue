<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <NewCoinModal />
  <MarketCapGraph></MarketCapGraph>
  <CoinList msg="This is the coinlist" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CoinList from "../components/CoinList.vue";
import NewCoinModal from "../components/NewCoinModal.vue";
import MarketCapGraph from "../components/MarketCapGraph.vue";

export default defineComponent({
  name: "CoinInfo",
  components: {
    CoinList,
    NewCoinModal,
    MarketCapGraph,
  },
  setup() {},
});
</script>

<style lang="css"></style>
