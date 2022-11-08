import React, { useEffect, useState } from "react";
import AppHeader from "../AppHeader/AppHeader";
import Main from "../Main/Main";
import appStyles from "./App.module.css";
import { api } from "../../utils/api";
import OrderDetails from "../OrderDetails/OrderDetails";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import { IngridientsContext } from "../../utils/appContext";

function App() {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderDetailsData, setOrderDetailsData] = useState({});
  const [isIngridientDetailsOpen, setIsIngridientDetailsOpen] = useState(false);
  const [ingridientData, setIngridientData] = useState({});

  const fetchIngridients = () => {
    api
      .getIngridients()
      .then((data) => {
        setData(data.data);
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
      <IngridientsContext.Provider value={data}>
        <AppHeader />
        <Main
          data={data}
          handleOpenModal={handleOpenModal}
          handleOpenIngridientModal={handleOpenIngridientModal}
        />
        {isModalOpen && <OrderDetails handleCloseModal={handleCloseModal} orderDetailsData={orderDetailsData} />}
        {isIngridientDetailsOpen && (
          <IngredientDetails
            ingridientData={ingridientData}
            handleCloseModal={handleCloseModal}
          />
        )}
      </IngridientsContext.Provider>
    </div>
  );
}

export default App;
