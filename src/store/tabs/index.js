import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTab: localStorage.getItem("tab") || "for-you",
};

const tab = createSlice({
  name: "tab",
  initialState,
  reducers: {
    _setActiveTab: (state, action) => {
      state.activeTab = action.payload;
      localStorage.setItem("tab", action.payload);
    },
  },
});

export const { _setActiveTab } = tab.actions;
export default tab.reducer;
