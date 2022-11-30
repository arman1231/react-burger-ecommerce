import { FORGOT_PASSWORD_PENDING, FORGOT_PASSWORD_FULFILED, FORGOT_PASSWORD_FAILED, RESET_PASSWORD_PENDING, RESET_PASSWORD_FULFILED, RESET_PASSWORD_FAILED } from '../actions/resetPassword'

const resetInitialState = {
    data: null,
  
    forgotPassordError: null,
    forgotPassordPending: false,

    resetPassordError: null,
    resetPassordPending: false,
}

export const resetPasswordReducer = (state = resetInitialState, action) => {
    switch (action.type) {
        case FORGOT_PASSWORD_PENDING: {
            return {
                ...state,
                forgotPassordPending: true,
            }
        }
        case FORGOT_PASSWORD_FULFILED: {
            return {
                ...state,
                forgotPassordPending: false,
                data: action.payload
            }
        }
        case FORGOT_PASSWORD_FAILED: {
            return {
                ...state,
                forgotPassordPending: false,
                forgotPassordError: action.payload
            }
        }
        case RESET_PASSWORD_PENDING: {
            return {
                ...state,
                resetPassordPending: true
            }
        }
        case RESET_PASSWORD_FULFILED: {
            return {
                ...state,
                resetPassordPending: false,
                data: action.payload
            }
        }
        case RESET_PASSWORD_FAILED: {
            return {
                ...state,
                resetPassordError: action.payload,
                resetPassordPending: false,
            }
        }
        default: {
            return state
        }
    }
}