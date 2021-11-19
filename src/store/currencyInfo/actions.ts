import { CurrencyInformation } from "@/types/CurrencyInformation";
import { MarketCapHistory } from "@/types/MarketCapHistory";

export default {
  async fetchCurrencyInformation(
    context: any,
    payload: { per_pages: number; page: number }
  ) {
    const apiKey = context.rootGetters.apiKey;
    const response = await fetch(
      `https://api.nomics.com/v1/currencies/ticker?key=${apiKey}&interval=1d,7d,30d&convert=USD&per-page=${payload.per_pages}&page=${payload.page}`
    );

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message ||
          "There was an error getting the currency information from API"
      );
      throw error;
    }

    console.log(
      response.headers.forEach((header) => {
        console.log(header);
      })
    );
    console.log(response.headers.get("X-Pagination-Total-Items"));

    context.commit(
      "setCurrencyInformationTotalItems",
      response.headers.get("X-Pagination-Total-Items")
    );
    context.commit("addCurrencyInformation", responseData);
  },
  async fetchCurrencySparkline(
    context: any,
    payload: { start: Date; end: Date }
  ) {
    const apiKey = context.rootGetters.apiKey;
    const response = await fetch(
      `https://api.nomics.com/v1/currencies/sparkline?key=${apiKey}&ids=BTC,ETH,XRP&start=${payload.start.toISOString()}&end=${payload.end.toISOString()}`
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
  async fetchMarketCapHistory(
    context: any,
    payload: { start: Date; end: Date }
  ) {
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
