<template>
  <div class="newcoinmodal">
    <label>Coin Name</label>
    <input v-model="coinName" name="coinName" type="text" />
    <label>Coin Symbol</label>
    <input v-model="coinSymbol" name="coinSymbol" type="text" />
    <label>Coin Amount</label>
    <input v-model="coinAmount" name="coinAmount" type="number" />
    <button label="Add New Crypto Coin" @click="addNewCryptoCoin" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { CoinHolding } from "../../types/CoinHolding";

export default defineComponent({
  name: "NewCoinModal",
  setup() {
    const store = useStore();
    const coinName = ref<string>("");
    const coinSymbol = ref<string>("");
    const coinAmount = ref<number>(0);

    function addNewCryptoCoin() {
      console.log("Add new crypto");
      const cryptoCoin: CoinHolding = {
        id: Date.now(),
        name: coinName.value,
        symbol: coinSymbol.value,
        amount: coinAmount.value,
      };
      store.commit("addCryptoCoin", cryptoCoin);
    }

    return {
      coinName,
      coinSymbol,
      coinAmount,
      addNewCryptoCoin,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped></style>
