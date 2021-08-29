import { createStore } from "vuex";
import { CurrencyInformation } from "../types/CurrencyInformation";
import { MarketCapHistory } from "../types/MarketCapHistory";
import { CoinHolding } from "../types/CoinHolding";

import currencyInfoModule from "./currencyInfo/index";
import holdingsModule from "./holdings/index";

export type State = {
  coinHolding: CoinHolding[];
  currencyInformation: CurrencyInformation[];
  marketCapHistory: MarketCapHistory[];
};

export default createStore({
  modules: {
    currencyInfo: currencyInfoModule,
    holdings: holdingsModule,
  },
  state() {
    return {
      // TODO: to be removed if auth is introduced
      apiKey: "7f4ff5196402dc00723ba37573b376e5dd79b821",
    };
  },
  getters: {
    apiKey(state: any) {
      return state.apiKey;
    },
  },
});
