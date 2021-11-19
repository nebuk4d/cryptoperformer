import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
  namespaced: true,
  state() {
    return {
      currencyInformation: [],
      currencyInformation_totalItems: 0,
      marketCapHistory: [],
    };
  },
  mutations,
  getters,
  actions,
};
