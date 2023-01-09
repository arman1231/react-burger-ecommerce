import { IIngridient } from "../../utils/types";

export const ADD_MODAL_ORDER_DETAILS_DATA: 'ADD_MODAL_ORDER_DETAILS_DATA' = "ADD_MODAL_ORDER_DETAILS_DATA";

export const ADD_ITEM_TO_CONSTRUCTOR: 'ADD_ITEM_TO_CONSTRUCTOR' = "ADD_ITEM_TO_CONSTRUCTOR";
export const REMOVE_ITEM_FROM_CONSTRUCTOR: 'REMOVE_ITEM_FROM_CONSTRUCTOR' = "REMOVE_ITEM_FROM_CONSTRUCTOR";
export const MOVE_ITEM_IN_CONSTRUCTOR: 'MOVE_ITEM_IN_CONSTRUCTOR' = "MOVE_ITEM_IN_CONSTRUCTOR";
export const CLEAR_CONSTRUCTOR: 'CLEAR_CONSTRUCTOR' = "CLEAR_CONSTRUCTOR";


export interface IAddModalOrderDetailsDataAction {
  readonly type: typeof ADD_MODAL_ORDER_DETAILS_DATA;
}

export interface IAddItemToConstructorAction {
  readonly type: typeof ADD_ITEM_TO_CONSTRUCTOR;
  payload: IIngridient;
}

export interface IRemoveItemFromConstructorAction {
  readonly type: typeof REMOVE_ITEM_FROM_CONSTRUCTOR;
  id: string;
}

export interface IMoveItemInConstructorAction {
  readonly type: typeof MOVE_ITEM_IN_CONSTRUCTOR;
  dragIndex: number;
  hoverIndex: number;
}

export interface IClearConstructorAction {
  readonly type: typeof CLEAR_CONSTRUCTOR;
}


export type TCartActions = IAddModalOrderDetailsDataAction | IAddItemToConstructorAction | IRemoveItemFromConstructorAction | IMoveItemInConstructorAction | IClearConstructorAction;

export const addModalOrderDetailsDataAction = (): IAddModalOrderDetailsDataAction => ({
  type: ADD_MODAL_ORDER_DETAILS_DATA
})

export const addItemToConstructorAction = (payload: IIngridient): IAddItemToConstructorAction => ({
  type: ADD_ITEM_TO_CONSTRUCTOR,
  payload
})

export const removeItemFromConstructorAction = (id: string): IRemoveItemFromConstructorAction => ({
  type: REMOVE_ITEM_FROM_CONSTRUCTOR,
  id
})

export const moveItemInConstructorAction = (dragIndex: number,
  hoverIndex: number): IMoveItemInConstructorAction => ({
  type: MOVE_ITEM_IN_CONSTRUCTOR,
  dragIndex,
  hoverIndex
})

export const clearConstructorAction = (): IClearConstructorAction => ({
  type: CLEAR_CONSTRUCTOR
})

