import axios from "axios";
import { AxiosResponse } from "axios";
import { CurrencyInformation } from "./CurrencyInformation";

const API_KEY: string = process.env.CUR_API_KEY; //currently reading key from env

export default class CurrencyService {
  static getCurrencyInformation(): Promise<CurrencyInformation[]> {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `https://api.nomics.com/v1/currencies/ticker?key=${API_KEY}&interval=1d,30d&convert=USD&per-page=100&page=1`
        )
        .then((response) => {
          return Promise.resolve(
            CurrencyService.extractCurrencyInformation(response)
          );
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  private static extractCurrencyInformation(
    response: AxiosResponse
  ): CurrencyInformation[] {
    return response.data;
  }
}
