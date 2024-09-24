import store from "..";
import { _setActiveTab } from ".";

export const setActiveData = (data) => {
  store.dispatch(_setActiveTab(data));
};
