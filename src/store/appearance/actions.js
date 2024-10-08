import store from "../index.jsx";

import {
  _setBackgroundColor,
  _setColor,
  _setFontSize,
  _setBoxShadow,
  _setHover,
} from ".";

export const setBackgroundColor = (data) =>
  store.dispatch(_setBackgroundColor(data));
export const setColor = (data) => store.dispatch(_setColor(data));
export const setFontsize = (data) => store.dispatch(_setFontSize(data));
export const setBoxShadow = (data) => store.dispatch(_setBoxShadow(data));
export const setHover = (data) => store.dispatch(_setHover(data));
