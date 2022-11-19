import React, { useEffect, useState } from "react";
import AppHeader from "../AppHeader/AppHeader";
import Main from "../Main/Main";
import appStyles from "./App.module.css";
import OrderDetails from "../OrderDetails/OrderDetails";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { api } from "../../utils/api";
import { useDispatch, useSelector } from "react-redux";
import {
  CLEAR_MODAL_INGRIDIENT_DATA,
  MAKE_ORDER_FAILED,
  CLEAR_CONSTRUCTOR,
  makeOrderAction
} from "../../services/actions/cart";

function App() {
  const dispatch = useDispatch();
  const isMakeOrderData = useSelector(state => state.orderDetails.orderDetailsData);
  console.log(isMakeOrderData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isIngridientDetailsOpen, setIsIngridientDetailsOpen] = useState(false);

  function handleOpenModal(data) {
    dispatch(makeOrderAction(data))
    // setIsModalOpen(true);
  }
  // useEffect(() => {
  //   isMakeOrderData && setIsModalOpen(true)
  // }, [])

  function handleCloseModal() {
    setIsModalOpen(false);
    setIsIngridientDetailsOpen(false);
    dispatch({
      type: CLEAR_MODAL_INGRIDIENT_DATA,
    });
    dispatch({
      type: CLEAR_CONSTRUCTOR
    })
  }

  function handleOpenIngridientModal() {
    setIsIngridientDetailsOpen(true);
  }

  return (
    <div className={appStyles.page}>
      <AppHeader />
      <Main
        handleOpenModal={handleOpenModal}
        handleOpenIngridientModal={handleOpenIngridientModal}
      />
      {isMakeOrderData && (
        <OrderDetails
          handleCloseModal={handleCloseModal}
        />
      )}
      {isIngridientDetailsOpen && (
        <IngredientDetails
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
