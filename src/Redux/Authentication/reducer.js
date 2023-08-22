import {
  GET_LOGIN_REQUEST_USER,
  GET_LOGIN_REQUEST_USER_FAILURE,
  GET_LOGIN_REQUEST_USER_SUCCESS,
  GET_SIGNUP_REQUEST_USER,
  GET_SIGNUP_REQUEST_USER_FAILURE,
  GET_SIGNUP_REQUEST_USER_SUCCESS,
} from "./actiontype";

const initialState = {
  isLoading: false,
  isError: false,
  name: "",
  token: "",
  message: "",
  typeofuser: "",
  signup_msg: "",
  usertoken: "",
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_LOGIN_REQUEST_USER:
      return { ...state, isLoading: true };
    case GET_LOGIN_REQUEST_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        token: payload?.token,
        usertoken:payload?.token,
        name: payload?.name,
        message: payload?.message,
        typeofuser: payload?.usertype,
      };
    case GET_LOGIN_REQUEST_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    ////////////////////signup case////////////////
    case GET_SIGNUP_REQUEST_USER:
      return {
        ...state,
        isLoading: true,
      };
    case GET_SIGNUP_REQUEST_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        signup_msg: payload?.message,
      };
    case GET_SIGNUP_REQUEST_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};
