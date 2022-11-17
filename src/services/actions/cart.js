import { api } from  '../../utils/api';
export const GET_BURGER_INGRIDIENTS_PENDING = 'GET_BURGER_INGRIDIENTS_PENDING';
export const GET_BURGER_INGRIDIENTS_FULFILED = 'GET_BURGER_INGRIDIENTS_FULFILED';
export const GET_BURGER_INGRIDIENTS_FAILED = 'GET_BURGER_INGRIDIENTS_FAILED';
export const ADD_MODAL_INGRIDIENT_DATA = 'ADD_MODAL_INGRIDIENT_DATA';
export const CLEAR_MODAL_INGRIDIENT_DATA = 'CLEAR_MODAL_INGRIDIENT_DATA';
export const ADD_MODAL_ORDER_DETAILS_DATA = 'ADD_MODAL_ORDER_DETAILS_DATA';
export const CLEAR_MODAL_ORDER_DETAILS_DATA = 'CLEAR_MODAL_ORDER_DETAILS_DATA';
export const ADD_ITEM_TO_CONSTRUCTOR = 'ADD_ITEM_TO_CONSTRUCTOR';
export const REMOVE_ITEM_FROM_CONSTRUCTOR = 'REMOVE_ITEM_FROM_CONSTRUCTOR';
export const MOVE_ITEM_IN_CONSTRUCTOR = 'MOVE_ITEM_IN_CONSTRUCTOR';

export const fetchIngridients = () => {
    return function(dispatch) {
        dispatch({
            type: GET_BURGER_INGRIDIENTS_PENDING,
        })
        api
        .getIngridients()
        .then((data) => {
         dispatch({
            type: GET_BURGER_INGRIDIENTS_FULFILED,
            ingredients: data.data,
         })
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };