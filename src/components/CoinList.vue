<template>
  <div class="coinlist">
    <ul>
      <li v-for="coin in coins" :key="coin.id" class="coin">
        <h3>{{ coin.name }}</h3>
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
    const coins = computed(() => store.state.cryptoCoins);

    return {
      coins,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
