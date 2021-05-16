<template>
  <div class="newcoinmodal">
    <label>Coin Name</label>
    <InputText v-model="coinName" name="coinName" type="text" />
    <label>Coin Symbol</label>
    <InputText v-model="coinSymbol" name="coinSymbol" type="text" />
    <label>Coin Amount</label>
    <InputText v-model="coinAmount" name="coinAmount" type="number" />
    <Button icon="pi pi-check" iconPos="right" class="p-button" label="Add New Crypto Coin" @click="addNewCryptoCoin" />
  </div>
  <Button icon="pi pi-search" iconPos="right" class="p-button" label="Get Crypto Currencies" @click="getCryptoCurrencies" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { CryptoCoin } from "../store/index";
import CurrencyService from "../services/CurrencyService"

export default defineComponent({
  name: "NewCoinModal",
  props: {
    msg: String,
  },
  setup() {
    const store = useStore();
    const coinName = ref<string>("");
    const coinSymbol = ref<string>("");
    const coinAmount = ref<number>(0);

    function addNewCryptoCoin() {
      console.log("Add new crypto");
      const cryptoCoin: CryptoCoin = {
        id: Date.now(),
        name: coinName.value,
        symbol: coinSymbol.value,
        amount: coinAmount.value,
      };
      store.commit("addCryptoCoin", cryptoCoin);
    }

    function getCryptoCurrencies() {
      const cryptoCurrencies = CurrencyService.getCurrencyInformation();
      console.log(cryptoCurrencies);
    }

    return {
      coinName,
      coinSymbol,
      coinAmount,
      addNewCryptoCoin,
      getCryptoCurrencies,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
</style>
