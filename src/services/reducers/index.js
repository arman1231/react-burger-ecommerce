import { combineReducers } from 'redux';
import { GET_BURGER_INGRIDIENTS_PENDING, GET_BURGER_INGRIDIENTS_FULFILED, GET_BURGER_INGRIDIENTS_FAILED, ADD_MODAL_INGRIDIENT_DATA, CLEAR_MODAL_INGRIDIENT_DATA, ADD_MODAL_ORDER_DETAILS_DATA, CLEAR_MODAL_ORDER_DETAILS_DATA, ADD_ITEM_TO_CONSTRUCTOR, REMOVE_ITEM_FROM_CONSTRUCTOR, MOVE_ITEM_IN_CONSTRUCTOR  } from '../actions/cart'
const initialState = {
    burgerIngredients: [],
    burgerIngredientsPending: false,
    burgerIngredientsFailed: false,

    modalIngridientData: {},

    orderDetailsData: {},

    burgerConstructor: {
        bun: [],
        ingredients: []
     },
}
const cartReducer = (state = initialState, action) => {
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
                burgerIngredients: action.ingredients,
                burgerIngredientsPending: false
            }
        }
        case GET_BURGER_INGRIDIENTS_FAILED: {
            return {
                ...state,
                burgerIngredientsPending: false,
                burgerIngredientsFailed: true,
            }
        }

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
        case ADD_MODAL_ORDER_DETAILS_DATA: {
            return {
                ...state,
                orderDetailsData: action.payload,
            }
        }
        case CLEAR_MODAL_ORDER_DETAILS_DATA: {
            return {
                ...state,
                orderDetailsData: null,
            }
        }
        case ADD_ITEM_TO_CONSTRUCTOR: {
            return {
                ...state,
                burgerConstructor: {
                    ...state.burgerConstructor,
                    bun: action.payload.type === 'bun' ? [action.payload] : [...state.burgerConstructor.bun],
                    ingredients: action.payload.type !== 'bun' ? [...state.burgerConstructor.ingredients, action.payload] : [...state.burgerConstructor.ingredients],
                }
            }
        }
        case REMOVE_ITEM_FROM_CONSTRUCTOR: {
            return {
                ...state,
                burgerConstructor: {
                    ...state.burgerConstructor,
                    ingredients: state.burgerConstructor.ingredients.filter(el => el.id !== action.id)
                }
            }
        }
        case MOVE_ITEM_IN_CONSTRUCTOR : {
            // const ingredients = [...state.burgerConstructor.ingredients];
            // const swtched = ingredients.splice(action.dragIndex, 0, ingredients.splice(action.hoverIndex, 1)[0]);
            return {
                ...state,
                burgerConstructor: {
                    ...state.burgerConstructor,
                    ingredients: state.burgerConstructor.ingredients.splice(action.dragIndex, 0, state.burgerConstructor.ingredients.splice(action.hoverIndex, 1)[0]),
                }
            }
        }
        default: {
            return state;
        }
    }
};

export const rootReducer = combineReducers({
    cart: cartReducer,
});