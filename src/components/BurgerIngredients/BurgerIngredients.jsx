import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import BurgerIngridient from "../BurgerIngridient/BurgerIngridient";
import BurgerIngredientsStyles from "./BurgerIngredients.module.css";
import PropTypes from "prop-types";

const burgerIngredientsPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
});
BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(burgerIngredientsPropTypes).isRequired,
  handleOpenIngridientModal: PropTypes.func,
};

export default function BurgerIngredients({ data, handleOpenIngridientModal }) {
  const FIRST_TAB = 'Булки';
  const SECOND_TAB = 'Соусы'
  const THIRD_TAB  = 'Начинки'
  const [current, setCurrent] = React.useState(FIRST_TAB);
  return (
    <>
      <div style={{ display: "flex" }}>
        <Tab value={FIRST_TAB} active={current === FIRST_TAB} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value={SECOND_TAB} active={current === SECOND_TAB} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab
          value={THIRD_TAB}
          active={current === THIRD_TAB}
          onClick={setCurrent}
        >
          Начинки
        </Tab>
      </div>
      <div className={BurgerIngredientsStyles.tabList}>
        <div className={BurgerIngredientsStyles.tab}>
          <h2 className="text text_type_main-medium pt-10 pb-6">Булки</h2>
          <ul className={BurgerIngredientsStyles.list}>
            {data
              .filter((el) => el.type === "bun")
              .map((el) => (
                <BurgerIngridient key={el._id} {...el} handleOpenIngridientModal={handleOpenIngridientModal} />
              ))}
          </ul>
        </div>
        <div className={BurgerIngredientsStyles.tab}>
          <h2 className="text text_type_main-medium pt-10 pb-6">Соусы</h2>
          <ul className={BurgerIngredientsStyles.list}>
            {data
              .filter((el) => el.type === "sauce")
              .map((el) => (
                <BurgerIngridient key={el._id} {...el} handleOpenIngridientModal={handleOpenIngridientModal} />
              ))}
          </ul>
        </div>
        <div className={BurgerIngredientsStyles.tab}>
          <h2 className="text text_type_main-medium pt-10 pb-6">Начинки</h2>
          <ul className={BurgerIngredientsStyles.list}>
            {data
              .filter((el) => el.type === "main")
              .map((el) => (
                <BurgerIngridient key={el._id} {...el} handleOpenIngridientModal={handleOpenIngridientModal} />
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
