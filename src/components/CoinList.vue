<template>
  <div class="coinlist p-p-auto p-m-6">
    <DataTable :value="coins">
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
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { getCurrencyInformation } from "../services/CurrencyService";

export default defineComponent({
  name: "CoinList",
  props: {
    msg: String,
  },
  mounted() {
    const store = useStore();
    getCurrencyInformation()
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
    //const coins = computed(() => store.state.cryptoCoins);
    const coins = computed(() => store.state.currencyInformation);

    const formatCurrency = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumSignificantDigits: 3,
    });

    return {
      coins,
      formatCurrency,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.coinlist {
  display: table;
}
.coin {
  display: table;
  table-layout: fixed;
  width: 100%;
}
.img {
  vertical-align: middle;
}
</style>
