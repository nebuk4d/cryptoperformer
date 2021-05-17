import { createStore } from "vuex";
import { CurrencyInformation } from "../services/CurrencyInformation";

export type CryptoCoin = {
  id: number;
  name: string;
  symbol: string;
  amount: number;
  value?: number;
};

export type State = {
  cryptoCoins: CryptoCoin[];
  currencyInformation: CurrencyInformation[];
};

const state: State = {
  cryptoCoins: [],
  currencyInformation: [],
};

const mutations = {
  addCryptoCoin(state: State, cryptoCoin: CryptoCoin) {
    console.log("add crypto to store");
    state.cryptoCoins.push(cryptoCoin);
    // localStorage.setItem("cryptoCoins", JSON.stringify(state));
  },
  addCurrencyInformation(
    state: State,
    currencyInformation: CurrencyInformation[]
  ) {
    console.log("add currency info");
    state.currencyInformation.push(...currencyInformation);
  },
};

export default createStore({
  state,
  mutations,
});
