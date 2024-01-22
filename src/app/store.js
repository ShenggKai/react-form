import { configureStore } from "@reduxjs/toolkit";
import reducers from "./rootReducer";

const store = configureStore({ reducer: reducers });

store.subscribe(() => {
  localStorage.setItem("isLoggedIn", store.getState().user.isLoggedIn);
});

export default store;
