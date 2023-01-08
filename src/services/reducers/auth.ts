import { TUserResponse } from '../../utils/api';
import { TRegisterResponse } from '../../utils/types';
import { REGISTER_PENDING, REGISTER_FULFILED, REGISTER_FAILED, LOGIN_PENDING, LOGIN_FULFILED, LOGIN_FAILED, LOGOUT_PENDING, LOGOUT_FULFILED, LOGOUT_FAILED, CLEAR_LOCALSTORAGE, SET_TOKEN, GET_USER_PENDING, GET_USER_FULFILED, GET_USER_FAILED, UPDATE_USER_PENDING, UPDATE_USER_FULFILED, UPDATE_USER_FAILED, TAuthActions } from '../actions/auth';

export type TAuthState = {
    isAuthChecked: boolean;

    userData: null | TRegisterResponse | TUserResponse;
  
    registerUserError: null | string;
    registerUserPending: boolean;
  
    loginUserError: null | string;
    loginUserPending: boolean;
  
    updateUserError: null | string;
    updateUserPending: boolean;
  
    getUserError: null | string;
    getUserPending: boolean;

    logoutError: null | string;
    logoutPending: boolean;
}

const authInitialState: TAuthState = {
    isAuthChecked: false,

    userData: null,
  
    registerUserError: null,
    registerUserPending: false,
  
    loginUserError: null,
    loginUserPending: false,
  
    updateUserError: null,
    updateUserPending: false,
  
    getUserError: null,
    getUserPending: false,

    logoutError: null,
    logoutPending: false,

}

export const authReducer = (state = authInitialState, action: TAuthActions): TAuthState => {
    switch (action.type) {
        case REGISTER_PENDING: {
            return {
                ...state,
                registerUserPending: true,
            }
        }
        case REGISTER_FULFILED: {
            return {
                ...state,
                userData: action.payload,
                registerUserPending: false,
            }
        }
        case REGISTER_FAILED: {
            return {
                ...state,
                registerUserPending: false,
                registerUserError: action.payload
            }
        }
        case LOGIN_PENDING: {
            return {
                ...state,
                loginUserPending: true,
            }
        }
        case LOGIN_FULFILED: {
            return {
                ...state,
                userData: action.payload,
                loginUserPending: false
            }
        }
        case LOGIN_FAILED: {
            return {
                ...state,
                loginUserPending: false,
                loginUserError: action.payload
            }
        }
        case LOGOUT_PENDING: {
            return {
                ...state,
                logoutPending: true
            }
        }
        case LOGOUT_FULFILED: {
            return {
                ...state,
                logoutPending: false,
                userData: null
            }
        }
        case LOGOUT_FAILED: {
            return {
                ...state,
                logoutError: action.payload,
                logoutPending: false
            }
        }
        case CLEAR_LOCALSTORAGE: {
            localStorage.clear();
            return {
                ...state
            }
        }
        case SET_TOKEN: {
            localStorage.setItem('refreshToken', JSON.stringify(state.userData?.refreshToken));
            localStorage.setItem('accessToken', JSON.stringify(state.userData?.accessToken));
            return {
                ...state
            }
        }
        case GET_USER_PENDING: {
            return {
                ...state,
                getUserPending: true
            }
        }
        case GET_USER_FULFILED: {
            return {
                ...state,
                getUserPending: false,
                userData: action.payload
            }
        }
        case GET_USER_FAILED: {
            return {
                ...state,
                getUserPending: false,
                getUserError: action.payload
            }
        }
        case UPDATE_USER_PENDING: {
            return {
                ...state,
                updateUserPending: true
            }
        }
        case UPDATE_USER_FULFILED: {
            return {
                ...state,
                updateUserPending: false,
                userData: action.payload
            }
        }
        case UPDATE_USER_FAILED: {
            return {
                ...state,
                updateUserError: action.payload,
                updateUserPending: false
            }
        }
        default: {
            return state
        }
    }
}