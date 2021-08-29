<template>
  <div>
    <market-cap-graph></market-cap-graph>
    <coin-list></coin-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CoinList from "../components/currencyInfo/CoinList.vue";
import MarketCapGraph from "../components/currencyInfo/MarketCapGraph.vue";

export default defineComponent({
  name: "CoinInfo",
  components: {
    CoinList,
    MarketCapGraph,
  },
  setup() {},
});
</script>

<style></style>
