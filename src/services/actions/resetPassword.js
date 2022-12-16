import { api } from "../../utils/api";
export const FORGOT_PASSWORD_PENDING = 'FORGOT_PASSWORD_PENDING';
export const FORGOT_PASSWORD_FULFILED = 'FORGOT_PASSWORD_FULFILED'
export const FORGOT_PASSWORD_FAILED = 'FORGOT_PASSWORD_FAILED'
export const RESET_PASSWORD_PENDING = 'RESET_PASSWORD_PENDING'
export const RESET_PASSWORD_FULFILED = 'RESET_PASSWORD_FULFILED'
export const RESET_PASSWORD_FAILED = 'RESET_PASSWORD_FAILED'


export const forgotPasswordAction = (email) => {
    return function (dispatch) {
        dispatch({
            type: FORGOT_PASSWORD_PENDING
        })
        api
        .forgotPassword(email)
        .then((res) => {
            dispatch({
                type: FORGOT_PASSWORD_FULFILED,
                payload: res
            })
        })
        .catch((err) => {
            dispatch({
                type: FORGOT_PASSWORD_FAILED,
                payload: err
            })
            console.log(err);
        })
    }
}

export const resetPasswordAction = (password, token) => {
    return function (dispatch) {
        dispatch({
            type: RESET_PASSWORD_PENDING
        })
        api.resetPassword(password, token)
        .then((res) => {
            dispatch({
                type: RESET_PASSWORD_FULFILED,
                payload: res
            })
        })
        .catch((err) => {
            dispatch({
                type: RESET_PASSWORD_FAILED,
                payload: err
            })
            console.log(err);
        })
    }
}