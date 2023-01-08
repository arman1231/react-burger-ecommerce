import { IBurgerConstructorIngridient } from "../../components/BurgerConstructor/BurgerConstructor";
import { IIngridient } from "../../utils/types";
import { ADD_ITEM_TO_CONSTRUCTOR, REMOVE_ITEM_FROM_CONSTRUCTOR, MOVE_ITEM_IN_CONSTRUCTOR, CLEAR_CONSTRUCTOR, TCartActions } from "../actions/cart";

export type TCartState = {
    burgerConstructor: {
        bun: (IBurgerConstructorIngridient | IIngridient | null)[];
        ingredients: (IBurgerConstructorIngridient | IIngridient | null)[];
     }
}

const initialState: TCartState = {
    burgerConstructor: {
        bun: [],
        ingredients: []
     },
}

export const cartReducer = (state = initialState, action: TCartActions): TCartState => {
    switch (action.type) {
        case ADD_ITEM_TO_CONSTRUCTOR: {
            return {
                ...state,
                burgerConstructor: {
                    ...state.burgerConstructor,
                    bun: action.payload!.type === 'bun' ? [action.payload] : [...state.burgerConstructor.bun],
                    ingredients: action.payload!.type !== 'bun' ? [...state.burgerConstructor.ingredients, action.payload] : [...state.burgerConstructor.ingredients],
                }
            }
        }
        case REMOVE_ITEM_FROM_CONSTRUCTOR: {
            return {
                ...state,
                burgerConstructor: {
                    ...state.burgerConstructor,
                    ingredients: state.burgerConstructor.ingredients.filter(el => el!.id !== action.id)
                }
            }
        }
        case MOVE_ITEM_IN_CONSTRUCTOR: {
            const ingredients = [...state.burgerConstructor.ingredients];
            ingredients.splice(action.hoverIndex, 0, ingredients.splice(action.dragIndex, 1)[0]);
            return {
                ...state,
                burgerConstructor: {
                    ...state.burgerConstructor,
                    ingredients,
                }
            }
        }
        case CLEAR_CONSTRUCTOR: {
            return {
                ...state,
                burgerConstructor: {
                    bun: [],
                    ingredients: []
                }
            }
        }
        default: {
            return state;
        }
    }
};