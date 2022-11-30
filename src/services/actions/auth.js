import { api } from "../../utils/api";
export const REGISTER_PENDING = "REGISTER_PENDING";
export const REGISTER_FULFILED = "REGISTER_FULFILED";
export const REGISTER_FAILED = "REGISTER_FAILED";
export const LOGIN_PENDING = "LOGIN_PENDING";
export const LOGIN_FULFILED = "LOGIN_FULFILED";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT_PENDING = "LOGOUT_PENDING";
export const LOGOUT_FULFILED = "LOGOUT_FULFILED";
export const LOGOUT_FAILED = "LOGOUT_FAILED";
export const CLEAR_LOCALSTORAGE = "CLEAR_LOCALSTORAGE";
export const SET_TOKEN = "SET_TOKEN";
export const GET_USER_PENDING = "GET_USER_PENDING";
export const GET_USER_FULFILED = "GET_USER_FULFILED";
export const GET_USER_FAILED = "GET_USER_FAILED";
export const UPDATE_USER_PENDING = "UPDATE_USER_PENDING";
export const UPDATE_USER_FULFILED = "UPDATE_USER_FULFILED";
export const UPDATE_USER_FAILED = "UPDATE_USER_FAILED";

export const registerAction = (email, password, name) => {
  return function (dispatch) {
    dispatch({
      type: REGISTER_PENDING,
    });
    api
      .register(email, password, name)
      .then((res) => {
        dispatch({
          type: REGISTER_FULFILED,
          payload: res,
        });
      })
      .then(() => {
        dispatch({
          type: SET_TOKEN,
        });
      })
      .catch((err) => {
        dispatch({
          type: REGISTER_FAILED,
          payload: err,
        });
        console.log(err);
      });
  };
};

export const loginAction = (email, password) => {
  return function (dispatch) {
    dispatch({
      type: LOGIN_PENDING,
    });
    api
      .login(email, password)
      .then((res) => {
        dispatch({
          type: LOGIN_FULFILED,
          payload: res,
        });
      })
      .then(() => {
        dispatch({
          type: SET_TOKEN,
        });
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_FAILED,
          payload: err,
        });
        console.log(err);
      });
  };
};

export const logoutAction = (token) => {
  return function (dispatch) {
    dispatch({
      type: LOGOUT_PENDING,
    });
    api
      .logout(token)
      .then((res) => {
        dispatch({
          type: LOGOUT_FULFILED,
          payload: res,
        });
      })
      .then(() => {
        dispatch({
          type: CLEAR_LOCALSTORAGE,
        });
      })
      .catch((err) => {
        dispatch({
          type: LOGOUT_FAILED,
          payload: err,
        });
        console.log(err);
      });
  };
};

export const getUserAction = (token) => {
  return function (dispatch) {
    dispatch({
      type: GET_USER_PENDING,
    });
    api
      .getUser(token)
      .then((res) => {
        if (res) {
          dispatch({
            type: GET_USER_FULFILED,
            payload: res,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: GET_USER_FAILED,
          payload: err,
        });
        console.log(err);
      });
  };
};

export const updateUserAction = (token, email, password, name) => {
    return function (dispatch) {
        dispatch({
            type: UPDATE_USER_PENDING
        })
        api
        .updateUser(token, email, password, name)
        .then((res) => {
            dispatch({
                type: UPDATE_USER_FULFILED,
                payload: res
            })
        })
        .catch((err) => {
            dispatch({
                type: UPDATE_USER_FAILED,
                payload: err
            })
            console.log(err);
        })
    }
};
