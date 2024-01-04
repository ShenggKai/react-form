import { configureStore } from "@reduxjs/toolkit";
import reducers from "./rootReducer";

const store = configureStore({ reducer: reducers });

store.subscribe(() => {
  localStorage.setItem("isLoggedIn", store.getState().user.isLoggedIn);

  //log
  console.log("Store changed!", store.getState());
});

export default store;
