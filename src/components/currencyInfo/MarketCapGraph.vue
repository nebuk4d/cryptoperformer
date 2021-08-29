<template>
  <div>
    <canvas id="chart" width="100%" height="300"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import Chart from "chart.js";

export default defineComponent({
  name: "MarketCapGraph",
  setup() {
    const store = useStore();

    const isLoading = ref(false);
    const error = ref(null);

    // loadMarketCapHistory(new Date(2021, 4, 24), new Date());
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

    // test chart.js
    onMounted(() => {
      const chartData = {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "First Dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: "#42A5F5",
          },
        ],
      };

      const canvas: HTMLCanvasElement = document.getElementById(
        "chart"
      ) as HTMLCanvasElement;
      const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");

      if (ctx instanceof CanvasRenderingContext2D) {
        const chart: Chart = new Chart(ctx, {
          type: "line",
          data: chartData,
        });
        chart.render();
      } else {
        console.log(
          "Can't create chart. There was an error getting the context of canvas."
        );
      }
    });

    return {
      marketCapHistory,
      loadMarketCapHistory,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
