import { configureStore } from "@reduxjs/toolkit";
import reducers from "../reducers";

const store = configureStore({ reducer: reducers });

store.subscribe(() => {
  localStorage.setItem("isLoggedIn", store.getState().isLoggedIn);

  //log
  console.log("Store changed!", store.getState());
});

export default store;
