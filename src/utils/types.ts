import PropTypes from "prop-types";
import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { store } from "..";
import { TAuthActions } from "../services/actions/auth";
import { TGetBurgerIngridientsActions } from "../services/actions/burgerIngredients";
import { TCartActions } from "../services/actions/cart";
import { TIngredientDetailsActions } from "../services/actions/ingredientDetails";
import { TOrderDetailsActions } from "../services/actions/orderDetails";
import { TResetPasswordActions } from "../services/actions/resetPassword";

export const ingredientType  = PropTypes.shape({
    _id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  });

  export interface IIngridient {
    calories: number,
    carbohydrates: number,
    fat: number,
    image: string,
    image_large: string,
    image_mobile: string,
    name: string,
    price: number,
    proteins: number,
    type: string,
    __v: number,
    _id: string,
    id: string
  }

  export type TUser = {
    name: string,
    password: string,
    email: string
  }
  
  export type TCredentials = {
    accessToken: string,
    refreshToken: string
  }
  
  export type TRegisterResponse = {
    success: boolean;
    user: Omit<TUser, "password">
  } & TCredentials;

  export type TSuccessResponse = {
    success: boolean;
  }

  export type TMakeOrderResponse = {
    success: boolean;
    name: string;
    order: {
      ingredients: IIngridient[],
      _id: string,
      owner: {
        name: string,
        email: string,
        createdAt: string,
        updatedAt: string
      },
      status: string,
      name: string,
      createdAt: string,
      updatedAt: string,
      number: number,
      price: number
    }
  }

  export type RootState = ReturnType<typeof store.getState>;

  type TAplicationActions = TAuthActions | TGetBurgerIngridientsActions | TCartActions | TIngredientDetailsActions | TOrderDetailsActions | TResetPasswordActions;

  // export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, RootState, TAplicationActions>>;
  export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, TAplicationActions>;

  // export type AppDispatch = typeof store.dispatch;
  export type AppDispatch<TReturnType = void> = (
    action: TAplicationActions | AppThunk<TReturnType>
  ) => TReturnType;

