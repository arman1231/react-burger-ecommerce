import { TMakeOrderResponse } from "../../utils/types";
import { CLEAR_MODAL_ORDER_DETAILS_DATA, MAKE_ORDER_FAILED, MAKE_ORDER_FULFILED, MAKE_ORDER_PENDING, TOrderDetailsActions } from "../actions/orderDetails";

export type TOrderDetailsState = {
    orderDetailsData: TMakeOrderResponse | null,
    orderDetailsDataPending: boolean,
    orderDetailsDataFailed: string | null,
}

const orderDetailsInitialState: TOrderDetailsState = {
    orderDetailsData: null,
    orderDetailsDataPending: false,
    orderDetailsDataFailed: null,
}
export const orderDetailsReducer = (state = orderDetailsInitialState, action: TOrderDetailsActions): TOrderDetailsState => {
switch (action.type) {
    case MAKE_ORDER_PENDING: {
        return {
            ...state,
            orderDetailsDataPending: true,
        }
    }
    case MAKE_ORDER_FULFILED: {
        return {
            ...state,
            orderDetailsData: action.payload,
            orderDetailsDataPending: false
        }
    }
    case MAKE_ORDER_FAILED: {
        return {
            ...state,
            orderDetailsDataPending: false,
            orderDetailsDataFailed: action.payload,
        }
    }
    case CLEAR_MODAL_ORDER_DETAILS_DATA: {
        return {
            ...state,
            orderDetailsData: null,
        }
    }
    default: {
        return state;
    }
}
}