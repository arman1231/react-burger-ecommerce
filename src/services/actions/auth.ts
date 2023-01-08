import { api, TUserResponse } from "../../utils/api";
import { AppDispatch, AppThunk, TRegisterResponse, TSuccessResponse } from "../../utils/types";
export const REGISTER_PENDING: 'REGISTER_PENDING' = "REGISTER_PENDING";
export const REGISTER_FULFILED: 'REGISTER_FULFILED' = "REGISTER_FULFILED";
export const REGISTER_FAILED: 'REGISTER_FAILED' = "REGISTER_FAILED";
export const LOGIN_PENDING: 'LOGIN_PENDING' = "LOGIN_PENDING";
export const LOGIN_FULFILED: 'LOGIN_FULFILED' = "LOGIN_FULFILED";
export const LOGIN_FAILED: 'LOGIN_FAILED' = "LOGIN_FAILED";
export const LOGOUT_PENDING: 'LOGOUT_PENDING' = "LOGOUT_PENDING";
export const LOGOUT_FULFILED: 'LOGOUT_FULFILED' = "LOGOUT_FULFILED";
export const LOGOUT_FAILED: 'LOGOUT_FAILED' = "LOGOUT_FAILED";
export const CLEAR_LOCALSTORAGE: 'CLEAR_LOCALSTORAGE' = "CLEAR_LOCALSTORAGE";
export const SET_TOKEN: 'SET_TOKEN' = "SET_TOKEN";
export const GET_USER_PENDING: 'GET_USER_PENDING' = "GET_USER_PENDING";
export const GET_USER_FULFILED: 'GET_USER_FULFILED' = "GET_USER_FULFILED";
export const GET_USER_FAILED: 'GET_USER_FAILED' = "GET_USER_FAILED";
export const UPDATE_USER_PENDING: 'UPDATE_USER_PENDING' = "UPDATE_USER_PENDING";
export const UPDATE_USER_FULFILED: 'UPDATE_USER_FULFILED' = "UPDATE_USER_FULFILED";
export const UPDATE_USER_FAILED: 'UPDATE_USER_FAILED' = "UPDATE_USER_FAILED";

export interface IRegisterPendingAction {
  readonly type: typeof REGISTER_PENDING;
}

export interface IRegisterFulfiledAction {
  readonly type: typeof REGISTER_FULFILED;
  payload: TRegisterResponse | null;
}

export interface IRegisterFailedAction {
  readonly type: typeof REGISTER_FAILED;
  payload: string | null;
}

export interface ILoginPendingAction {
  readonly type: typeof LOGIN_PENDING;
}

export interface ILoginFulfuledAction {
  readonly type: typeof LOGIN_FULFILED;
  payload: TRegisterResponse | null;
}

export interface ILoginFailedAction {
  readonly type: typeof LOGIN_FAILED;
  payload: string | null;
}

export interface ILogoutPendingAction {
  readonly type: typeof LOGOUT_PENDING;
}

export interface ILogoutFulfiledAction {
  readonly type: typeof LOGOUT_FULFILED;
  payload: TSuccessResponse | null;
}

export interface ILogoutFailedAction {
  readonly type: typeof LOGOUT_FAILED;
  payload: string | null;
}

export interface IClearLocalStorageAction {
  readonly type: typeof CLEAR_LOCALSTORAGE;
}

export interface ISetTokenAction {
  readonly type: typeof SET_TOKEN;
}

export interface IGetUserPendingAction {
  readonly type: typeof GET_USER_PENDING;
}

export interface IGetUserFulfiledAction {
  readonly type: typeof GET_USER_FULFILED;
  payload: TUserResponse | null;
}

export interface IGetUserFailedAction {
  readonly type: typeof GET_USER_FAILED
  payload: string | null;
}

export interface IUpdateUserPendingAction {
  readonly type: typeof UPDATE_USER_PENDING;
}

export interface IUpdateUserFulfiledAction {
  readonly type: typeof UPDATE_USER_FULFILED;
  payload: TUserResponse | null;
}

export interface IUpdateUserFailedAction {
  readonly type: typeof UPDATE_USER_FAILED;
  payload: string | null;
}

export type TAuthActions = IRegisterPendingAction | IRegisterFulfiledAction | IRegisterFailedAction | ILoginPendingAction | ILoginFulfuledAction | ILoginFailedAction | ILogoutPendingAction | ILogoutFulfiledAction | ILogoutFailedAction | IClearLocalStorageAction | ISetTokenAction | IGetUserPendingAction | IGetUserFulfiledAction | IGetUserFailedAction | IUpdateUserPendingAction | IUpdateUserFulfiledAction | IUpdateUserFailedAction;

export const registerPendingAction = (): IRegisterPendingAction => ({
  type: REGISTER_PENDING
})

export const registerFulfiledAction = (payload: TRegisterResponse | null): IRegisterFulfiledAction => ({
  type: REGISTER_FULFILED,
  payload
})

export const registerFailedAction = (payload: string | null): IRegisterFailedAction => ({
  type: REGISTER_FAILED,
  payload
})

export const loginPendingAction = (): ILoginPendingAction => ({
  type: LOGIN_PENDING
})

export const loginFulfuledAction = (payload: TRegisterResponse | null): ILoginFulfuledAction => ({
  type: LOGIN_FULFILED,
  payload
})

export const loginFailedAction = (payload: string | null): ILoginFailedAction => ({
  type: LOGIN_FAILED,
  payload
})

export const logoutPendingAction = (): ILogoutPendingAction => ({
  type: LOGOUT_PENDING
})

export const logoutFulfiledAction = (payload: TSuccessResponse | null): ILogoutFulfiledAction => ({
  type: LOGOUT_FULFILED,
  payload
})

export const logoutFailedAction = (payload: string | null): ILogoutFailedAction => ({
  type: LOGOUT_FAILED,
  payload
})

export const clearLocalStorageAction = (): IClearLocalStorageAction => ({
  type: CLEAR_LOCALSTORAGE
})

export const setTokenAction = (): ISetTokenAction => ({
  type: SET_TOKEN
})

export const getUserPendingAction = (): IGetUserPendingAction => ({
  type: GET_USER_PENDING
})

export const getUserFulfiledAction = (payload: TUserResponse | null): IGetUserFulfiledAction => ({
  type: GET_USER_FULFILED,
  payload
})

export const getUserFailedAction = (payload: string | null): IGetUserFailedAction => ({
  type: GET_USER_FAILED,
  payload
})

export const updateUserPendingAction = (): IUpdateUserPendingAction => ({
  type: UPDATE_USER_PENDING
})

export const updateUserFulfiledAction = (payload: TUserResponse | null): IUpdateUserFulfiledAction => ({
  type: UPDATE_USER_FULFILED,
  payload
})

export const updateUserFailedAction = (payload: string | null): IUpdateUserFailedAction => ({
  type: UPDATE_USER_FAILED,
  payload
})

export const registerAction: AppThunk = (email: string, password: string, name: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: REGISTER_PENDING,
    });
    api
      .register({ email, password, name })
      .then((res) => {
          localStorage.setItem('refreshToken', res.refreshToken);
          localStorage.setItem('accessToken', res.accessToken);
          dispatch({
          type: REGISTER_FULFILED,
          payload: res,
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

export const loginAction: AppThunk = (email: string, password: string) => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: LOGIN_PENDING,
    });
    api
      .login(email, password)
      .then((res) => {
        localStorage.setItem('refreshToken', res.refreshToken);
        localStorage.setItem('accessToken', res.accessToken);
        dispatch({
          type: LOGIN_FULFILED,
          payload: res,
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

export const logoutAction: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: LOGOUT_PENDING,
    });
    api
      .logout()
      .then((res) => {
          localStorage.removeItem('refreshToken');
          localStorage.removeItem('accessToken');
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

export const getUserAction: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_USER_PENDING,
    });
    api
      .getUser()
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

export const updateUserAction: AppThunk = (email: string, password: string, name: string) => {
    return function (dispatch: AppDispatch) {
        dispatch({
            type: UPDATE_USER_PENDING
        })
        api
        .updateUser({ email, password, name })
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
