import { api } from "../../utils/api";
import { IIngridient } from "../../utils/types";

export const GET_BURGER_INGRIDIENTS_PENDING: 'GET_BURGER_INGRIDIENTS_PENDING' = "GET_BURGER_INGRIDIENTS_PENDING";
export const GET_BURGER_INGRIDIENTS_FULFILED: 'GET_BURGER_INGRIDIENTS_FULFILED' =
  "GET_BURGER_INGRIDIENTS_FULFILED";
export const GET_BURGER_INGRIDIENTS_FAILED: 'GET_BURGER_INGRIDIENTS_FAILED' = "GET_BURGER_INGRIDIENTS_FAILED";

export interface IGetBurgerIngridientsPendingAction {
    readonly type: typeof GET_BURGER_INGRIDIENTS_PENDING;
  }
  
  export interface IGetBurgerIngridientsFulfiledAction {
    readonly type: typeof GET_BURGER_INGRIDIENTS_FULFILED;
    payload: IIngridient[] | null;
  }
  
  export interface IGetBurgerIngridientsFailedAction {
    readonly type: typeof GET_BURGER_INGRIDIENTS_FAILED;
    payload: string | null; 
  }

  export type TGetBurgerIngridientsActions = IGetBurgerIngridientsPendingAction | IGetBurgerIngridientsFulfiledAction | IGetBurgerIngridientsFailedAction;

  export const getBurgerIngridientsPendingAction = (): IGetBurgerIngridientsPendingAction => ({
    type: GET_BURGER_INGRIDIENTS_PENDING,
  })
  
  export const getBurgerIngridientsFulfiledAction = (payload: IIngridient[] | null): IGetBurgerIngridientsFulfiledAction => ({
    type:  GET_BURGER_INGRIDIENTS_FULFILED,
    payload
  })
  
  export const getBurgerIngridientsFailedAction = (payload: string | null): IGetBurgerIngridientsFailedAction => ({
    type: GET_BURGER_INGRIDIENTS_FAILED,
    payload
  })

  export const fetchIngridients = () => {
    return function (dispatch: any) {
      dispatch({
        type: GET_BURGER_INGRIDIENTS_PENDING,
      });
      api
        .getIngridients()
        .then((data) => {
          dispatch({
            type: GET_BURGER_INGRIDIENTS_FULFILED,
            payload: data.data,
          });
        })
        .catch((err) => {
          dispatch({
            type: GET_BURGER_INGRIDIENTS_FAILED,
            payload: err
          })
          console.log(err);
        });
    };
  };