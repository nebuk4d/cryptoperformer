<template>
  <div class="coinlist p-p-auto p-m-6">
    <DataTable :value="currencies">
      <template #empty>
        <ProgressSpinner />
      </template>
      <Column sortable header="Rank" field="rank"></Column>
      <Column header="Logo" field="logo_url">
        <template #body="{ data }">
          <img :src="data.logo_url" width="30" height="30" />
        </template>
      </Column>
      <Column sortable header="Name" field="name"></Column>
      <Column header="Symbol" field="symbol" style="min-width: 14rem"></Column>
      <Column sortable header="Marketcap" dataType="numeric">
        <template #body="{ data }">
          {{ formatCurrency.format(data.market_cap) }}
        </template>
      </Column>
      <Column sortable header="Price" field="price" dataType="numeric">
        <template #body="{ data }">
          {{ formatCurrency.format(data.price) }}
        </template></Column
      >
    </DataTable>
  </div>
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
}
.currencies {
  display: table;
  table-layout: fixed;
  width: 100%;
}
.img {
  vertical-align: middle;
}
</style>
