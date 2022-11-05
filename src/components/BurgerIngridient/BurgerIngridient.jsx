import React from 'react'
import BurgerIngredientStyles from './BurgerIngridient.module.css'
import {
    Counter,
    CurrencyIcon,
  } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

BurgerIngridient.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
}

export default function BurgerIngridient({ image, price, name, calories, proteins, fat, carbohydrates, image_large, handleOpenIngridientModal }) {
  function handleClick() {
    handleOpenIngridientModal(calories, proteins, fat, carbohydrates, name, image_large)
  }
  return (
    <li className={BurgerIngredientStyles.item} onClick={handleClick}>
    <img
      className={BurgerIngredientStyles.image}
      src={image}
      alt={name}
    />
    <Counter
      className={BurgerIngredientStyles.counter}
      count={1}
      size="default"
    />
    <div className={`${BurgerIngredientStyles.info} pt-1 pb-1`}>
      <span
        className={`${BurgerIngredientStyles.price} text text_type_digits-default mr-2`}
      >
        {price}
      </span>
      <CurrencyIcon type="primary" />
    </div>
    <h3 className="text text_type_main-default mb-6">
      {name}
    </h3>
  </li>
  )
}
