<template>
  <div class="newcoinmodal">
    <label>Coin Name</label>
    <InputText v-model="coinName" name="coinName" type="text" />
    <label>Coin Symbol</label>
    <InputText v-model="coinSymbol" name="coinSymbol" type="text" />
    <label>Coin Amount</label>
    <InputText v-model="coinAmount" name="coinAmount" type="number" />
    <Button
      icon="pi pi-check"
      iconPos="right"
      class="p-button"
      label="Add New Crypto Coin"
      @click="addNewCryptoCoin"
    />
  </div>
  <Button
    icon="pi pi-search"
    iconPos="right"
    class="p-button"
    label="Get Crypto Currencies"
    @click="updateCurrencyInformation"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { CryptoCoin } from "../store/index";
import { getCurrencyInformation } from "../services/CurrencyService";

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

    function updateCurrencyInformation() {
      console.log("updateCurrencyInfo button was pressed");
      getCurrencyInformation()
        .then((currencyInformation) => {
          console.log(currencyInformation);
          store.commit("addCurrencyInformation", currencyInformation);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return {
      coinName,
      coinSymbol,
      coinAmount,
      addNewCryptoCoin,
      updateCurrencyInformation,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped></style>
