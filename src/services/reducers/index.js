import { combineReducers } from 'redux';
import { GET_BURGER_INGRIDIENTS_PENDING, GET_BURGER_INGRIDIENTS_FULFILED, GET_BURGER_INGRIDIENTS_FAILED, ADD_MODAL_INGRIDIENT_DATA, CLEAR_MODAL_INGRIDIENT_DATA, CLEAR_MODAL_ORDER_DETAILS_DATA, ADD_ITEM_TO_CONSTRUCTOR, REMOVE_ITEM_FROM_CONSTRUCTOR, MOVE_ITEM_IN_CONSTRUCTOR, CLEAR_CONSTRUCTOR, MAKE_ORDER_FULFILED, MAKE_ORDER_PENDING, MAKE_ORDER_FAILED } from '../actions/cart'
const initialState = {
    burgerConstructor: {
        bun: [],
        ingredients: []
     },
}
const burgerIngredientsInitialState = {
    burgerIngredients: [],
    burgerIngredientsPending: false,
    burgerIngredientsFailed: false,
}
const ingredientDetailsInitialState = {
    modalIngridientData: null
}
const orderDetailsInitialState = {
    orderDetailsData: null,
    orderDetailsDataPending: false,
    orderDetailsDataFailed: false,
}
const orderDetailsReducer = (state = orderDetailsInitialState, action) => {
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
            orderDetailsDataFailed: true,
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
const ingredientDetailsReducer = (state = ingredientDetailsInitialState, action) => {
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
const burgerIngredientsReducer = (state = burgerIngredientsInitialState, action) => {
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
        default: {
            return state;
        }
    }
};
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
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

export const rootReducer = combineReducers({
    ingredientDetails: ingredientDetailsReducer,
    burgerIngredients: burgerIngredientsReducer,
    cart: cartReducer,
    orderDetails: orderDetailsReducer,
});