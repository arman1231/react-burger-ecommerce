import BurgerIngredientStyles from "./BurgerIngridient.module.css";
// import { useDispatch, useSelector } from "react-redux";
import { useDispatch, useSelector } from "../../utils/hooks";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import { IIngridient } from '../../utils/types'
import { ADD_MODAL_INGRIDIENT_DATA } from "../../services/actions/ingredientDetails";


interface IBurgerIngridientProps extends IIngridient {
  el: IIngridient;
}

const BurgerIngridient: React.FC<IBurgerIngridientProps> = ({
  image,
  price,
  name,
  _id,
  type,
  el,
}) => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.cart.burgerConstructor);

  function handleClick() {
    dispatch({
      type: ADD_MODAL_INGRIDIENT_DATA,
      payload: { ...el },
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
          extraClass={BurgerIngredientStyles.counter}
          count={
            type === "bun"
              ? counter.bun.filter((el: IIngridient) => el._id === _id).length * 2
              : counter.ingredients.filter((el: IIngridient) => el._id === _id).length
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
    </>
  );
}
export default BurgerIngridient;