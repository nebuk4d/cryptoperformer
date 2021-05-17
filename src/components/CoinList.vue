<template>
  <div class="coinlist">
    <ul>
      <li v-for="coin in coins" :key="coin.id" class="coin">
        <h3>{{ coin.currency }}</h3>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "CoinList",
  props: {
    msg: String,
  },
  setup() {
    const store = useStore();
    //const coins = computed(() => store.state.cryptoCoins);
    const coins = computed(() => store.state.currencyInformation);

    return {
      coins,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
