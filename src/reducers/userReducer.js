import * as actions from "../actions/actionTypes";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") || "false",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOGIN:
      return {
        ...state,
        isLoggedIn: "true",
      };

    case actions.LOGOUT:
      return {
        ...state,
        isLoggedIn: "false",
      };

    default:
      return state;
  }
};

export default userReducer;
