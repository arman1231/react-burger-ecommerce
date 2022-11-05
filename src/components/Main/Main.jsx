import React from "react";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import MainStyles from "./Main.module.css";
import PropTypes from "prop-types";

Main.propTypes = {
  data: PropTypes.array.isRequired,
}

export default function Main({ data, handleOpenModal, handleOpenIngridientModal }) {
  return (
    <main className={MainStyles.main}>
      <h1 className="text text_type_main-large pt-10 pb-5 m-0">Соберите бургер</h1>
      <div className={MainStyles.mainDivider}>
        <section className={MainStyles.burgerIngredients}>
          <BurgerIngredients data={data} handleOpenIngridientModal={handleOpenIngridientModal} />
        </section>
        <section className={MainStyles.burgerConstructor}>
          <BurgerConstructor data={data}  handleOpenModal={handleOpenModal} />
        </section>
      </div>
    </main>
  );
}

