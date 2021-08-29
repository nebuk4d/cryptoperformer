<template>
  <div class="card p-p-auto p-m-6">
    <Chart type="line" :data="chartData" :height="50"></Chart>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "MarketCapGraph",
  setup() {
    const store = useStore();

    const isLoading = ref(false);
    const error = ref(null);

    loadMarketCapHistory(new Date(2021, 4, 24), new Date());
    const marketCapHistory = computed(() => {
      return store.getters["currencyInfo/marketCapHistory"];
    });

    async function loadMarketCapHistory(start: Date, end: Date) {
      isLoading.value = true;
      try {
        await store.dispatch("currencyInfo/fetchMarketCapHistory", {
          start: start,
          end: end,
        });
      } catch (_error) {
        error.value =
          _error.message || "There was an error loading the marketcap";
      }
      isLoading.value = false;
    }

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
      marketCapHistory,
      loadMarketCapHistory,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
