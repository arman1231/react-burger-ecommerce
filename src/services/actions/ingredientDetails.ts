import { IBurgerConstructorIngridient } from "../../components/BurgerConstructor/BurgerConstructor";

export const ADD_MODAL_INGRIDIENT_DATA: 'ADD_MODAL_INGRIDIENT_DATA' = "ADD_MODAL_INGRIDIENT_DATA";
export const CLEAR_MODAL_INGRIDIENT_DATA: 'CLEAR_MODAL_INGRIDIENT_DATA' = "CLEAR_MODAL_INGRIDIENT_DATA";

export interface IAddModalIngridientDataAction {
    readonly type: typeof ADD_MODAL_INGRIDIENT_DATA;
    payload: IBurgerConstructorIngridient;
  }
  
  export interface IClearModalIngridientDataAction {
    readonly type: typeof CLEAR_MODAL_INGRIDIENT_DATA;
  }

  export type TIngredientDetailsActions = IAddModalIngridientDataAction | IClearModalIngridientDataAction;

  export const addModalIngridientDataAction = (payload: IBurgerConstructorIngridient): IAddModalIngridientDataAction => ({
    type: ADD_MODAL_INGRIDIENT_DATA,
    payload
  })
  
  export const clearModalIngridientDataAction = (): IClearModalIngridientDataAction => ({
    type: CLEAR_MODAL_INGRIDIENT_DATA
  })