import React from "react";
import BurgerIngredientStyles from "./BurgerIngridient.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {
  ADD_MODAL_INGRIDIENT_DATA,
  ADD_ITEM_TO_CONSTRUCTOR,
} from "../../services/actions/cart";
import { useDrag } from "react-dnd";

BurgerIngridient.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  image_large: PropTypes.string.isRequired,
};
//export default function BurgerIngridient({ image, price, name, calories, proteins, fat, carbohydrates, image_large, handleOpenIngridientModal,  }) {
export default function BurgerIngridient({
  image,
  price,
  name,
  handleOpenIngridientModal,
  el,
  _id,
  type,
}) {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.cart.burgerConstructor)
  function handleClick() {
    dispatch({
      type: ADD_MODAL_INGRIDIENT_DATA,
      payload: { ...el },
    });
    // handleOpenIngridientModal(calories, proteins, fat, carbohydrates, name, image_large)
    handleOpenIngridientModal();
  }
  const [{isDrag}, dragRef] = useDrag({
    type: 'bun',
    item: el,
    collect: monitor => ({
      isDrag: monitor.isDragging()
  })
  });
  return (
    <li ref={dragRef} className={BurgerIngredientStyles.item} onClick={handleClick}>
      <img className={BurgerIngredientStyles.image} src={image} alt={name} />
      <Counter
        className={BurgerIngredientStyles.counter}
        count={type === 'bun' ? counter.bun.filter(el => el._id === _id).length * 2 : counter.ingredients.filter(el => el._id === _id).length}
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
      <h3 className="text text_type_main-default mb-6">{name}</h3>
    </li>
  );
}
