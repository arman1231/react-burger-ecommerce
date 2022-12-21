import PropTypes from "prop-types";

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
    _id: string
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
