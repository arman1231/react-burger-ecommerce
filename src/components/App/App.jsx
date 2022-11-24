import React, { useEffect } from "react";
import AppHeader from "../AppHeader/AppHeader";
import Main from "../Main/Main";
import appStyles from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngridients } from "../../services/actions/cart";

function App() {
  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state.burgerIngredients.burgerIngredients
  );

  useEffect(() => {
    dispatch(fetchIngridients());
  }, [dispatch]);

  if (!data) {
    return <></>;
  }

  return (
    <div className={appStyles.page}>
      <AppHeader />
      <Main />
    </div>
  );
}

export default App;
