import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerConstructor.module.css";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { useDrop, useDrag } from "react-dnd";
import {
  ADD_ITEM_TO_CONSTRUCTOR,
  REMOVE_ITEM_FROM_CONSTRUCTOR,
  MOVE_ITEM_IN_CONSTRUCTOR
} from "../../services/actions/cart";
import { v4 as uuidv4 } from "uuid";
import graphics from "../../images/graphics.svg";
import ConstructorElementWrapper from "../ConstructorElementWrapper/ConstructorElementWrapper";

BurgerConstructor.propTypes = {
  // data: PropTypes.arrayOf(burgerIngredientsPropTypes).isRequired,
  handleOpenModal: PropTypes.func,
};

export default function BurgerConstructor({ handleOpenModal }) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart.burgerConstructor);
  const isDisabled = data.bun.length ? false : true;
  function handleClick() {
    const collectOrderData = () => {
      const bunIds = data.bun.map((el) => el._id);
      const ingridientIds = data.ingredients.map((el) => el._id);
      return [...bunIds, ...ingridientIds]
    };
    handleOpenModal(collectOrderData());
  }
  const [{ isHover }, dropBun] = useDrop({
    accept: "bun",
    drop(item) {
      dispatch({
        type: ADD_ITEM_TO_CONSTRUCTOR,
        payload: { ...item, id: uuidv4(), },
      });
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });
  function handleDeleteElement(id) {
    dispatch({
      type: REMOVE_ITEM_FROM_CONSTRUCTOR,
      id: id,
    });
  }
  const moveCard = (dragIndex, hoverIndex) => {
    dispatch({
      type: MOVE_ITEM_IN_CONSTRUCTOR,
      dragIndex,
      hoverIndex
    })
  }
  return (
    <>
      <div
        ref={dropBun}
        className={styles.burgerConstructor}
      >
        {data.bun.length ? (
          <>
            {data &&
              data.bun.map(
                (el, i) =>
                  i === 0 && (
                    <ConstructorElement
                      key={el.id}
                      extraClass="ml-6"
                      type="top"
                      isLocked={true}
                      text={`${el.name} (верх)`}
                      price={el.price}
                      thumbnail={el.image}
                    />
                  )
              )}
            <div className={styles.scrollable}>
            {data &&
                data.ingredients.map((el, i) => (      
                  <ConstructorElementWrapper {...el} index={i} handleDeleteElement={handleDeleteElement} moveCard={moveCard} key={el.id} />          
                ))}
            </div>
            {data &&
              data.bun.map(
                (el, i) =>
                  i === 0 && (
                    <ConstructorElement
                      key={el.id}
                      extraClass="ml-6"
                      type="bottom"
                      isLocked={true}
                      text={`${el.name} (низ)`}
                      price={el.price}
                      thumbnail={el.image}
                    />
                  )
              )}
          </>
        ) : (
          <>
            <ConstructorElement
              extraClass="ml-6"
              type="top"
              isLocked={true}
              text={`сначала выберите булочку`}
              thumbnail={graphics}
            />
            <ConstructorElement
              extraClass="ml-6"
              isLocked={true}
              text={`перетащите ингридиент`}
              thumbnail={graphics}
            />
            <ConstructorElement
              extraClass="ml-6"
              type="bottom"
              isLocked={true}
              text={`сначала выберите булочку`}
              thumbnail={graphics}
            />
          </>
        )}
      </div>
      <section className={`${styles.total} mt-10 mr-4`}>
        <div className={`${styles.priceWrap} mr-10`}>
          <span className={`${styles.price} text text_type_digits-medium`}>
            {data.bun[0]
              ? data &&
                data.ingredients.reduce((acc, prev) => {
                  return acc + prev.price;
                }, 0) +
                  data?.bun[0]?.price * 2
              : 0}
          </span>
          <CurrencyIcon className="pr-2" type="primary" />
        </div>

        <Button
          onClick={handleClick}
          type="primary"
          size="large"
          htmlType="button"
          disabled={isDisabled}
        >
          Нажми на меня
        </Button>
      </section>
    </>
  );
}
