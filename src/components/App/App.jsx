import React, { useEffect, useState } from "react";
import AppHeader from "../AppHeader/AppHeader";
import Main from "../Main/Main";
import appStyles from "./App.module.css";
import OrderDetails from "../OrderDetails/OrderDetails";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { api } from "../../utils/api";
import { useDispatch } from "react-redux";
import {
  CLEAR_MODAL_INGRIDIENT_DATA,
  ADD_MODAL_ORDER_DETAILS_DATA,
  CLEAR_CONSTRUCTOR
} from "../../services/actions/cart";

function App() {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isIngridientDetailsOpen, setIsIngridientDetailsOpen] = useState(false);

  function handleOpenModal(data) {
    api
      .makeOrder(data)
      .then((data) => {
        dispatch({
          type: ADD_MODAL_ORDER_DETAILS_DATA,
          payload: data,
        });
      })
      .then(() => {
        setIsModalOpen(true);
      })
      .then(() => {
        dispatch({
          type: CLEAR_CONSTRUCTOR
        })
      })
      .catch((err) => console.log(err));
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    setIsIngridientDetailsOpen(false);
    dispatch({
      type: CLEAR_MODAL_INGRIDIENT_DATA,
    });
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
      {isModalOpen && (
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
