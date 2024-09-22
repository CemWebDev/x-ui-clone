import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import appearance from "./appearance";


const store = configureStore({
  reducer: {
    auth,
    appearance,
  },
});

export default store;
