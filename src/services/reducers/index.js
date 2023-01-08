import { combineReducers } from 'redux';
import { authReducer } from './auth'
import { resetPasswordReducer } from './resetPassword';
import { burgerIngredientsReducer } from './burgerIngredients';
import { ingredientDetailsReducer } from './ingredientDetails';
import { orderDetailsReducer } from './orderDetails';
import { cartReducer } from './cart';

export const rootReducer = combineReducers({
    ingredientDetails: ingredientDetailsReducer,
    burgerIngredients: burgerIngredientsReducer,
    cart: cartReducer,
    orderDetails: orderDetailsReducer,
    auth: authReducer,
    reset: resetPasswordReducer,
});