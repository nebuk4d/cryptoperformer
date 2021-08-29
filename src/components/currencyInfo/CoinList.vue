<template>
  <table class="coinlist">
    <thead>
      <th>Rank</th>
      <th>Logo</th>
      <th>Name</th>
      <th>Symbol</th>
      <th>Price</th>
      <th>24h %</th>
      <th>7d %</th>
      <th>Marketcap</th>
      <th>Volume 24h</th>
      <th>Circulating Supply</th>
      <th>Last 7 days</th>
    </thead>
    <tbody>
      <tr v-for="currency in currencies" :key="currency.id">
        <td>{{ currency.rank }}</td>
        <td><img :src="currency.logo_url" width="24" height="24" /></td>
        <td>{{ currency.name }}</td>
        <td>{{ currency.symbol }}</td>
        <td>{{ formatCurrency.format(currency.price) }}</td>
        <td>{{ currency["1d"].price_change_pct }}</td>
        <td>{{ currency["7d"].price_change_pct }}</td>
        <td>{{ formatCurrency.format(currency.market_cap) }}</td>
        <td>{{ currency["7d"].volume }}</td>
        <td>{{ currency.circulating_supply }}</td>
        <td>
          <!-- for now only use this static sparkline as placeholder - to be generated later -->
          <img
            src="https://nomics.com/images/sparkline/assets/BTC-USD-1d.svg"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "CoinList",
  setup() {
    const store = useStore();

    const isLoading = ref(false);
    const error = ref(null);

    loadCurrencies();

    const currencies = computed(() => {
      return store.getters["currencyInfo/currencyInformation"];
    });

    const formatCurrency = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumSignificantDigits: 3,
    });

    async function loadCurrencies() {
      isLoading.value = true;
      try {
        await store.dispatch("currencyInfo/fetchCurrencyInformation");
      } catch (_error) {
        error.value =
          _error.message || "There was an error loading the currencies";
      }
      isLoading.value = false;
    }

    return {
      currencies,
      formatCurrency,
      loadCurrencies,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.coinlist {
  display: table;
  table-layout: auto;
  width: 100%;
}
th {
  text-align: left;
}
.img {
  vertical-align: middle;
}
</style>
