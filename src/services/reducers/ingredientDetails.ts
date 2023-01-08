import { IIngridient } from "../../utils/types";
import { ADD_MODAL_INGRIDIENT_DATA, CLEAR_MODAL_INGRIDIENT_DATA, TIngredientDetailsActions } from "../actions/ingredientDetails";

export type TIngredientDetailsState = {
    modalIngridientData: IIngridient | null;
}

const ingredientDetailsInitialState: TIngredientDetailsState = {
    modalIngridientData: null
}

export const ingredientDetailsReducer = (state = ingredientDetailsInitialState, action: TIngredientDetailsActions): TIngredientDetailsState => {
    switch (action.type) {
        case ADD_MODAL_INGRIDIENT_DATA: {
            return {
                ...state,
                modalIngridientData: action.payload,
            }
        }
        case CLEAR_MODAL_INGRIDIENT_DATA: {
            return {
                ...state,
                modalIngridientData: null,
            }
        }
        default: {
            return state;
        }
    }
}