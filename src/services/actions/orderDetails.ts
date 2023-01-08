import { api } from "../../utils/api";
import { TMakeOrderResponse } from "../../utils/types";

export const MAKE_ORDER_PENDING: 'MAKE_ORDER_PENDING' = "MAKE_ORDER_PENDING";
export const MAKE_ORDER_FULFILED: 'MAKE_ORDER_FULFILED' = "MAKE_ORDER_FULFILED";
export const MAKE_ORDER_FAILED: 'MAKE_ORDER_FAILED' = "MAKE_ORDER_FAILED";
export const CLEAR_MODAL_ORDER_DETAILS_DATA: 'CLEAR_MODAL_ORDER_DETAILS_DATA' = "CLEAR_MODAL_ORDER_DETAILS_DATA";

export interface IClearModalOrderDetailsDataAction {
    readonly type: typeof CLEAR_MODAL_ORDER_DETAILS_DATA;
  }

  export interface IMakeOrderPendingAction {
    readonly type: typeof MAKE_ORDER_PENDING;
  }
  
  export interface IMakeOrderFulfiledAction {
    readonly type: typeof MAKE_ORDER_FULFILED;
    payload: TMakeOrderResponse | null;
  }
  
  export interface IMakeOrderFailedAction {
    readonly type: typeof MAKE_ORDER_FAILED;
    payload: string | null; 
  }

  export type TOrderDetailsActions = IClearModalOrderDetailsDataAction |IMakeOrderPendingAction | IMakeOrderFulfiledAction | IMakeOrderFailedAction;

  export const clearModalOrderDetailsDataAction = (): IClearModalOrderDetailsDataAction => ({
    type: CLEAR_MODAL_ORDER_DETAILS_DATA
  })

  export const makeOrderPendingAction = (): IMakeOrderPendingAction => ({
    type: MAKE_ORDER_PENDING
  })
  
  export const makeOrderFulfiledAction = (payload: TMakeOrderResponse | null): IMakeOrderFulfiledAction => ({
    type: MAKE_ORDER_FULFILED,
    payload
  })
  
  export const makeOrderFailedAction = (payload: string | null): IMakeOrderFailedAction => ({
    type: MAKE_ORDER_FAILED,
    payload
  })

  export const makeOrderAction = (data: any) => {
    return function (dispatch: any) {
      dispatch({
        type: MAKE_ORDER_PENDING,
      });
      api
        .makeOrder(data)
        .then((res) => {
          dispatch({
            type: MAKE_ORDER_FULFILED,
            payload: res,
          });
        })
        .catch((err) => {
          dispatch({
            type: MAKE_ORDER_FAILED,
            payload: err
          });
          console.log(err);
        });
    };
  };