<template>
  <div class="card p-p-auto p-m-6">
    <Chart type="line" :data="chartData" height="50"></Chart>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { getMarketCapHistory } from "../services/CurrencyService";
import { useStore } from "vuex";

export default defineComponent({
  name: "MarketCapGraph",
  mounted() {
    const store = useStore();
    getMarketCapHistory(new Date(2021, 4, 24), new Date())
      .then((currencyInformation) => {
        console.log(currencyInformation);
        store.commit("addCurrencyInformation", currencyInformation);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  setup() {
    const store = useStore();
    const market_cap = computed(() => store.state.currencyInformation);

    const chartData = ref({
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
      chartData,
      market_cap,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
