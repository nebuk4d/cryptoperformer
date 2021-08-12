import axios from "axios";
import { CurrencyInformation } from "./CurrencyInformation";
import { MarketCapHistory } from "./MarketCapHistory";
import { CurrencyPriceHistory } from "./CurrencyPriceHistory";

const API_KEY: string = process.env.CUR_API_KEY; //currently reading key from env

export function getCurrencyInformation(): Promise<CurrencyInformation[]> {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `https://api.nomics.com/v1/currencies/ticker?key=${API_KEY}&interval=1d,30d&convert=USD&per-page=100&page=1`
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export function getMarketCapHistory(
  start: Date,
  end: Date
): Promise<MarketCapHistory[]> {
  return axios
    .get(
      `https://api.nomics.com/v1/market-cap/history?key=${API_KEY}&start=${start.toISOString()}&end=${end.toISOString()}`
    )
    .then((response) => {
      return response.data;
    });
}

export function getCurrencyPriceHistory(
  currencies: string = "BTC,ETH",
  start: Date,
  end: Date
): Promise<CurrencyPriceHistory[]> {
  return new Promise((resolve, reject) => {
    axios
      .get(
        `curl "https://api.nomics.com/v1/currencies/sparkline?key=${API_KEY}&ids=${currencies}&start=${start.toISOString()}&end=${end.toISOString()}"`
      )
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
