import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerConstructor.module.css";
// import { useSelector, useDispatch } from "react-redux";
import { useDispatch, useSelector } from "../../utils/hooks";
import { useDrop } from "react-dnd";
import {
  ADD_ITEM_TO_CONSTRUCTOR,
  REMOVE_ITEM_FROM_CONSTRUCTOR,
  MOVE_ITEM_IN_CONSTRUCTOR,
  CLEAR_CONSTRUCTOR,
} from "../../services/actions/cart";
import { v4 as uuidv4 } from "uuid";
import graphics from "../../images/graphics.svg";
import ConstructorElementWrapper from "../ConstructorElementWrapper/ConstructorElementWrapper";
import OrderDetails from "../OrderDetails/OrderDetails";
import Modal from "../Modal/Modal";
import { useHistory } from "react-router-dom";
import { IIngridient } from "../../utils/types";
import { CLEAR_MODAL_ORDER_DETAILS_DATA, makeOrderAction } from "../../services/actions/orderDetails";

export interface IBurgerConstructorIngridient extends IIngridient {
  id: string;
}
export default function BurgerConstructor() {
  const history = useHistory()
  const dispatch: any = useDispatch();
  const isLoggedIn = useSelector((state: any) => state.auth.userData)
  const data = useSelector((state: any) => state.cart.burgerConstructor);
  const isDisabled = data.bun.length ? false : true;
  const isMakeOrderData = useSelector(
    (state) => state.orderDetails.orderDetailsData
  );
  const isMakeOrdredPending = useSelector(
    (state) => state.orderDetails.orderDetailsDataPending
  );
  const closeOrder = () => {
    dispatch({ type: CLEAR_MODAL_ORDER_DETAILS_DATA });
    dispatch({
      type: CLEAR_CONSTRUCTOR,
    });
  };

  function handleClick() {
    if (!isLoggedIn) {
      history.push('/login')
      return
    }
    const bunIds = data.bun.map((el: IBurgerConstructorIngridient) => el._id);
    const ingridientIds = data.ingredients.map((el: IBurgerConstructorIngridient) => el._id);

    dispatch(makeOrderAction([...bunIds, ...ingridientIds]));
  }
  const [{ isHover }, dropBun] = useDrop({
    accept: "bun",
    drop(item: IIngridient) {
      dispatch({
        type: ADD_ITEM_TO_CONSTRUCTOR,
        payload: { ...item, id: uuidv4() },
      });
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });
  function handleDeleteElement(id: string) {
    dispatch({
      type: REMOVE_ITEM_FROM_CONSTRUCTOR,
      id: id,
    });
  }
  const moveCard = (dragIndex: number, hoverIndex: number) => {
    dispatch({
      type: MOVE_ITEM_IN_CONSTRUCTOR,
      dragIndex,
      hoverIndex,
    });
  };
  return (
    <>
      <div ref={dropBun} className={styles.burgerConstructor}>
        {data.bun.length ? (
          <>
            {data &&
              data.bun.map(
                (el: IBurgerConstructorIngridient, i: number) =>
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
                data.ingredients.map((el: IBurgerConstructorIngridient, i: number) => (
                  <ConstructorElementWrapper
                    item={el}
                    index={i}
                    handleDeleteElement={handleDeleteElement}
                    moveCard={moveCard}
                    key={el.id}
                  />
                ))}
            </div>
            {data &&
              data.bun.map(
                (el: IBurgerConstructorIngridient, i: number) =>
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
              price={0} />
            <ConstructorElement
              extraClass="ml-6"
              isLocked={true}
              text={`перетащите ингридиент`}
              thumbnail={graphics} 
              price={0} />
            <ConstructorElement
              extraClass="ml-6"
              type="bottom"
              isLocked={true}
              text={`сначала выберите булочку`}
              thumbnail={graphics} 
              price={0} />
          </>
        )}
      </div>
      <section className={`${styles.total} mt-10 mr-4`}>
        <div className={`${styles.priceWrap} mr-10`}>
          <span className={`${styles.price} text text_type_digits-medium`}>
            {data.bun[0]
              ? data &&
              data.ingredients.reduce((acc: number, prev: IBurgerConstructorIngridient) => {
                return acc + prev.price;
              }, 0) +
              data?.bun[0]?.price * 2
              : 0}
          </span>
          <CurrencyIcon type="primary" />
        </div>

        <Button
          onClick={handleClick}
          type="primary"
          size="large"
          htmlType="button"
          disabled={isDisabled}
        >
          Оформить заказ
        </Button>
        {isMakeOrdredPending ? <Modal handleCloseModal={() => {}}><h1 className="text text_type_main-large p-15">Наши системы регистрируют ваш заказ, ожидайте...</h1></Modal> : ''}
        {isMakeOrderData && <Modal handleCloseModal={closeOrder}><OrderDetails /></Modal>}
      </section>
    </>
  );
}
