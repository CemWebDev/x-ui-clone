import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  backgroundColor: {
    name: "dark",
    primary: "#000",
    secondary: "#202327",
  },
  color: {
    primary: "#3b82f6",
    textColor: "#e7e9ea",
    textColorSecondary: "rgb(113, 118, 123)",
  },
  fontSize: 16,
};

const loadTheme = () => {
  const savedTheme = localStorage.getItem("appearance");
  if (savedTheme) {
    return JSON.parse(savedTheme);
  }
  return initialState;
};

const appearance = createSlice({
  name: "appearance",
  initialState: loadTheme,
  reducers: {
    _setBackgroundColor: (state, action) => {
      state.backgroundColor = action.payload;
      localStorage.setItem("appearance", JSON.stringify(state));
    },
    _setColor: (state, action) => {
      state.color = action.payload;
      localStorage.setItem("appearance", JSON.stringify(state));
    },
    _setFontSize: (state, action) => {
      state.fontSize = action.payload;
      localStorage.setItem("appearance", JSON.stringify(state));
    },
  },
});

export const { _setBackgroundColor, _setColor, _setFontSize } =
  appearance.actions;

export default appearance.reducer;
