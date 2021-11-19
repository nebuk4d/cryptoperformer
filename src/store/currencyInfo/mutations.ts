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
  setCurrencyInformationTotalItems(state: any, total_items: number) {
    console.log("set total items of currencies to: " + total_items);
    state.currencyInformation_totalItems = total_items;
  },
  addMarketCapHistory(state: any, marketCapHistory: MarketCapHistory[]) {
    console.log("add marketcap history");
    state.marketCapHistory.push(...marketCapHistory);
  },
};
