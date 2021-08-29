import { CurrencyInformation } from "@/types/CurrencyInformation";
import { MarketCapHistory } from "@/types/MarketCapHistory";

export default {
  addCurrencyInformation(
    state: any,
    currencyInformation: CurrencyInformation[]
  ) {
    console.log("add currency info");
    state.currencyInformation.push(...currencyInformation);
  },
  addMarketCapHistory(state: any, marketCapHistory: MarketCapHistory[]) {
    console.log("add marketcap history");
    state.marketCapHistory.push(...marketCapHistory);
  },
};
