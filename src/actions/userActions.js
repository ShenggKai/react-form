import * as actions from "./actionTypes";

export const userLogin = () => ({
  type: actions.LOGIN,
});

export const userLogout = () => ({
  type: actions.LOGOUT,
});
