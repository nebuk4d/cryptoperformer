<template>
  <table class="coinlist">
    <thead>
      <th>Rank</th>
      <th>Logo</th>
      <th>Name</th>
      <th>Symbol</th>
      <th>Marketcap</th>
      <th>Price</th>
    </thead>
    <tbody>
      <tr v-for="currency in currencies" :key="currency.id">
        <td>{{ currency.rank }}</td>
        <td><img :src="currency.logo_url" width="30" height="30" /></td>
        <td>{{ currency.name }}</td>
        <td>{{ currency.symbol }}</td>
        <td>{{ formatCurrency.format(currency.market_cap) }}</td>
        <td>{{ formatCurrency.format(currency.price) }}</td>
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
  table-layout: fixed;
  width: 100%;
}
.img {
  vertical-align: middle;
}
</style>
