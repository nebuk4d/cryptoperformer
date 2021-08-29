import { CoinHolding } from "@/types/CoinHolding";

export default {
  addCryptoCoin(state: any, cryptoCoin: CoinHolding) {
    console.log("add crypto to store");
    state.coinHolding.push(cryptoCoin);
  },
};
