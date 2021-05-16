import axios from "axios";

const API_KEY: string = process.env.API_KEY; //currently reading key from env

export default class CurrencyService {

    static getCurrencyInformation() {
        return axios.get(`https://api.nomics.com/v1/currencies/ticker?key=${ API_KEY }&interval=1d,30d&convert=USD&per-page=100&page=1`)
            .then(response => {
                console.log(response.data);
            });
    };
}