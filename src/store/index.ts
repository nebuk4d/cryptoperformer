import { createStore } from "vuex";

export type CryptoCoin = {
  id: number;
  name: string;
  symbol: string;
  amount: number;
  value?: number;
};

export type State = {
  cryptoCoins: CryptoCoin[];
};

const state: State = {
  cryptoCoins: [],
};

const mutations = {
  addCryptoCoin(state: State, cryptoCoin: CryptoCoin) {
    console.log("add crypto to store");
    console.log(cryptoCoin.name);
    state.cryptoCoins.push(cryptoCoin);
    // localStorage.setItem("cryptoCoins", JSON.stringify(state));
  },
};

export default createStore({
  state,
  mutations,
});
