import { api } from "../../utils/api";
export const FORGOT_PASSWORD_PENDING: 'FORGOT_PASSWORD_PENDING' = 'FORGOT_PASSWORD_PENDING';
export const FORGOT_PASSWORD_FULFILED: 'FORGOT_PASSWORD_FULFILED' = 'FORGOT_PASSWORD_FULFILED';
export const FORGOT_PASSWORD_FAILED: 'FORGOT_PASSWORD_FAILED' = 'FORGOT_PASSWORD_FAILED';
export const RESET_PASSWORD_PENDING: 'RESET_PASSWORD_PENDING' = 'RESET_PASSWORD_PENDING';
export const RESET_PASSWORD_FULFILED: 'RESET_PASSWORD_FULFILED' = 'RESET_PASSWORD_FULFILED';
export const RESET_PASSWORD_FAILED: 'RESET_PASSWORD_FAILED' = 'RESET_PASSWORD_FAILED';

export interface IForgotPasswordPendingAction {
    readonly type: typeof FORGOT_PASSWORD_PENDING;
}

export interface IForgotPasswordFulfiledAction {
    readonly type: typeof FORGOT_PASSWORD_FULFILED;
    payload: string | null;
}

export interface IForgotPasswordFailedAction {
    payload: string | null;
    readonly type: typeof FORGOT_PASSWORD_FAILED;
}

export interface IResetPasswordPendingAction {
    readonly type: typeof RESET_PASSWORD_PENDING;
}

export interface IResetPasswordFulfuledAction {
    readonly type: typeof RESET_PASSWORD_FULFILED;
    payload: string | null;
}

export interface IResetPasswordFailedAction {
    payload: string | null;
    readonly type: typeof RESET_PASSWORD_FAILED;
}

export type TResetPasswordActions = IForgotPasswordPendingAction | IForgotPasswordFulfiledAction | IForgotPasswordFailedAction | IResetPasswordPendingAction | IResetPasswordFulfuledAction | IResetPasswordFailedAction;

export const forgotPasswordPendingAction = (): IForgotPasswordPendingAction => ({
    type: FORGOT_PASSWORD_PENDING
});

export const forgotPasswordFulfiledAction = (payload: string): IForgotPasswordFulfiledAction => ({
    type: FORGOT_PASSWORD_FULFILED,
    payload
});

export const forgotPasswordFailedAction = (payload: string): IForgotPasswordFailedAction => ({
    type: FORGOT_PASSWORD_FAILED,
    payload
});

export const resetPasswordPendingAction = (): IResetPasswordPendingAction => ({
    type: RESET_PASSWORD_PENDING
});

export const resetPasswordFulfuledAction = (payload: string): IResetPasswordFulfuledAction => ({
    type: RESET_PASSWORD_FULFILED,
    payload
});

export const resetPasswordFailedAction = (payload: string): IResetPasswordFailedAction => ({
    type: RESET_PASSWORD_FAILED,
    payload
});

export const forgotPasswordAction = (email:any) => {
    return function (dispatch: any) {
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

export const resetPasswordAction = (password: any, token: any) => {
    return function (dispatch: any) {
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