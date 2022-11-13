import React, { useEffect, useState } from "react";
import AppHeader from "../AppHeader/AppHeader";
import Main from "../Main/Main";
import appStyles from "./App.module.css";
import { api } from "../../utils/api";
import OrderDetails from "../OrderDetails/OrderDetails";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { IngridientsContext } from "../../context/appContext";

function App() {
  const [ingridients, setIngridients] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderDetailsData, setOrderDetailsData] = useState({});
  const [isIngridientDetailsOpen, setIsIngridientDetailsOpen] = useState(false);
  const [ingridientData, setIngridientData] = useState({});

  const fetchIngridients = () => {
    api
      .getIngridients()
      .then((data) => {
        setIngridients(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchIngridients();
  }, []);

  function handleOpenModal(data) {
    api
      .makeOrder(data)
      .then((data) => {
        setOrderDetailsData(data);
      })
      .then(() => {
        setIsModalOpen(true);
      })
      .catch((err) => console.log(err));
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    setIsIngridientDetailsOpen(false);
  }

  function handleOpenIngridientModal(
    calories,
    proteins,
    fat,
    carbohydrates,
    name,
    image_large
  ) {
    setIngridientData({
      calories,
      proteins,
      fat,
      carbohydrates,
      name,
      image_large,
    });
    setIsIngridientDetailsOpen(true);
  }

  return (
    <div className={appStyles.page}>
      <AppHeader />
      <IngridientsContext.Provider value={ingridients}>
        <Main
          handleOpenModal={handleOpenModal}
          handleOpenIngridientModal={handleOpenIngridientModal}
        />
      </IngridientsContext.Provider>
      {isModalOpen && (
        <OrderDetails
          handleCloseModal={handleCloseModal}
          orderDetailsData={orderDetailsData}
        />
      )}
      {isIngridientDetailsOpen && (
        <IngredientDetails
          ingridientData={ingridientData}
          handleCloseModal={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
