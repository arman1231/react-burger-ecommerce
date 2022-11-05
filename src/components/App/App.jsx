import React, { useEffect, useState } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import Main from '../Main/Main';
import appStyles from './App.module.css';
import { URL_LIST_OF_INGRIDIENTS } from "../../utils/constants";
import OrderDetails from '../OrderDetails/OrderDetails';
import IngredientDetails from '../IngredientDetails/IngredientDetails';

function App() {
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isIngridientDetailsOpen, setIsIngridientDetailsOpen] = useState(false);
  const [ingridientData, setIngridientData] = useState({});
  
  const fetchData = (url) => {
    fetch(url).then((res) => {
      if (res.ok) {
        return res.json();
      }
      console.log(`Ошибка: ${res.status}`);
      return Promise.reject(`Ошибка: ${res.status}`);
    }).then((data) => {
      setData(data.data)
    }).catch((err) => {
      console.log(err);
    })
  };

  useEffect(() => {
    fetchData(URL_LIST_OF_INGRIDIENTS);
  }, []);

  function handleOpenModal() {
    setIsModalOpen(true);
  };

  function handleCloseModal() {
    setIsModalOpen(false);
    setIsIngridientDetailsOpen(false)
  };

  function handleOpenIngridientModal(calories, proteins, fat, carbohydrates, name, image_large) {
    setIngridientData({calories, proteins, fat, carbohydrates, name, image_large})
    setIsIngridientDetailsOpen(true);
  }

  return (
    <div className={appStyles.page}>
      <AppHeader />
      <Main data={data} handleOpenModal={handleOpenModal} handleOpenIngridientModal={handleOpenIngridientModal} />
      { isModalOpen && <OrderDetails handleCloseModal={handleCloseModal} /> }
      {  isIngridientDetailsOpen && <IngredientDetails ingridientData={ingridientData} handleCloseModal={handleCloseModal} />}
    </div>
  );
}

export default App;
