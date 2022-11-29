import { api } from "../../utils/api";
export const REGISTER_PENDING = 'REGISTER_PENDING';
export const REGISTER_FULFILED = 'REGISTER_FULFILED';
export const REGISTER_FAILED = 'REGISTER_FAILED';
export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_FULFILED = 'LOGIN_FULFILED';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGOUT_PENDING = 'LOGOUT_PENDING';
export const LOGOUT_FULFILED = 'LOGOUT_FULFILED';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';
export const CLEAR_LOCALSTORAGE = 'CLEAR_LOCALSTORAGE';
export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';
export const SET_REFRESH_TOKEN = 'SET_REFRESH_TOKEN';

export const registerAction = (email, password, name) => {
    return function(dispatch) {
        dispatch({
            type: REGISTER_PENDING
        })
        api.register(email, password, name)
        .then((res) => {
            dispatch({
                type: REGISTER_FULFILED,
                payload: res,
            });
        })
        .catch((err) => {
            dispatch({
                type: REGISTER_FAILED,
                payload: err
            });
            console.log(err);
        })
    }
}

export const loginAction = (email, password) => {
    return function(dispatch) {
        dispatch({
            type: LOGIN_PENDING
        })
        api.login(email, password)
        .then((res) => {
            dispatch({
                type: LOGIN_FULFILED,
                payload: res,
            })
        })
        .catch((err) => {
            dispatch({
                type: LOGIN_FAILED,
                payload: err
            })
            console.log(err);
        })
    }
}

export const logoutAction = (token) => {
    return function(dispatch) {
        dispatch({
            type: LOGOUT_PENDING
        })
        api.logout(token)
        .then((res) => {
            dispatch({
                type: LOGOUT_FULFILED,
                payload: res,
            })
        })
        .then(() => {
            dispatch({
                type: CLEAR_LOCALSTORAGE
            })
        })
        .catch((err) => {
            dispatch({
                type: LOGOUT_FAILED,
                payload: err
            })
            console.log(err);
        })
    }
}