import { IIngridient } from "../../utils/types";
import { GET_BURGER_INGRIDIENTS_FAILED, GET_BURGER_INGRIDIENTS_FULFILED, GET_BURGER_INGRIDIENTS_PENDING, TGetBurgerIngridientsActions } from "../actions/burgerIngredients";

export type TBurgerIngredientsState = {
    burgerIngredients: IIngridient[] | null,
    burgerIngredientsPending: boolean,
    burgerIngredientsFailed: string | null,
}

const burgerIngredientsInitialState: TBurgerIngredientsState = {
    burgerIngredients: [],
    burgerIngredientsPending: false,
    burgerIngredientsFailed: null,
}

export const burgerIngredientsReducer = (state = burgerIngredientsInitialState, action: TGetBurgerIngridientsActions): TBurgerIngredientsState => {
    switch (action.type) {
        case GET_BURGER_INGRIDIENTS_PENDING: {
            return {
                ...state,
                burgerIngredientsPending: true,
            }
        }
        case GET_BURGER_INGRIDIENTS_FULFILED: {
            return {
                ...state,
                burgerIngredients: action.payload,
                burgerIngredientsPending: false
            }
        }
        case GET_BURGER_INGRIDIENTS_FAILED: {
            return {
                ...state,
                burgerIngredientsPending: false,
                burgerIngredientsFailed: action.payload,
            }
        }
        default: {
            return state;
        }
    }
};