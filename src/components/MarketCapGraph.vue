<template>
  <div class="card p-p-auto p-m-6">
    <Chart type="line" :data="basicData" height="50"></Chart>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { MarketCapHistory } from "../services/MarketCapHistory";
import { getMarketCapHistory } from "../services/CurrencyService";

export default defineComponent({
  name: "MarketCapGraph",
  mounted() {},
  setup() {
    var marketCapHistory: MarketCapHistory[] = [];

    getMarketCapHistory(new Date(2021, 4, 24), new Date())
      .then((currencyInformation) => {
        console.log(currencyInformation);
        marketCapHistory = currencyInformation;
      })
      .catch((error) => {
        console.log(error);
      });

    const basicData = ref({
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "First Dataset",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: "#42A5F5",
        },
      ],
    });

    return {
      marketCapHistory,
      basicData,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
