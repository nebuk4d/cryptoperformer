import { CurrencyInformation } from "@/types/CurrencyInformation";
import { MarketCapHistory } from "@/types/MarketCapHistory";

export default {
  async fetchCurrencyInformation(context: any, payload: any) {
    const apiKey = context.rootGetters.apiKey;
    const response = await fetch(
      `https://api.nomics.com/v1/currencies/ticker?key=${apiKey}&interval=1d,30d&convert=USD&per-page=100&page=1`
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message ||
          "There was an error getting the currency information from API"
      );
      throw error;
    }

    context.commit("addCurrencyInformation", responseData);
  },
  async fetchMarketCapHistory(context: any, payload: any) {
    const apiKey = context.rootGetters.apiKey;
    const response = await fetch(
      `https://api.nomics.com/v1/market-cap/history?key=${apiKey}&start=${payload.start.toISOString()}&end=${payload.end.toISOString()}`
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message ||
          "There was an error getting the marketCap information from API"
      );
      throw error;
    }
    context.commit("addMarketCapHistory", payload);
  },
};
