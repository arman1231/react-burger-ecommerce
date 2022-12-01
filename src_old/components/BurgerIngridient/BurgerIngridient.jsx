import BurgerIngredientStyles from "./BurgerIngridient.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import {
  ADD_MODAL_INGRIDIENT_DATA,
  CLEAR_MODAL_INGRIDIENT_DATA,
} from "../../services/actions/cart";
import { useDrag } from "react-dnd";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { ingredientType } from '../../utils/types'
import Modal from "../Modal/Modal";
import { Link, useHistory } from "react-router-dom";


BurgerIngridient.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  el: ingredientType.isRequired,
};

export default function BurgerIngridient({
  image,
  price,
  name,
  el,
  _id,
  type,
}) {
  const history = useHistory()
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.cart.burgerConstructor);
  const isModalIngridientData = useSelector(
    (state) => state.ingredientDetails.modalIngridientData
  );
  function handleClick() {
    dispatch({
      type: ADD_MODAL_INGRIDIENT_DATA,
      payload: { ...el },
    });
    // history.push(`/ingredients/${_id}`)
    // console.log(el);
  }
  function handleClose() {
    dispatch({
      type: CLEAR_MODAL_INGRIDIENT_DATA,
    });
  }
  const [{ isDrag }, dragRef] = useDrag({
    type: "bun",
    item: el,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });
  return (
    <>
      <li
        ref={dragRef}
        className={BurgerIngredientStyles.item}
        onClick={handleClick}
      >
        <img className={BurgerIngredientStyles.image} src={image} alt={name} />
        <Counter
          className={BurgerIngredientStyles.counter}
          count={
            type === "bun"
              ? counter.bun.filter((el) => el._id === _id).length * 2
              : counter.ingredients.filter((el) => el._id === _id).length
          }
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
      {/* {isModalIngridientData && (
        <Modal handleCloseModal={handleClose}><IngredientDetails /></Modal>
      )} */}
    </>
  );
}
