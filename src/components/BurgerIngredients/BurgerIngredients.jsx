import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import BurgerIngridient from "../BurgerIngridient/BurgerIngridient";
import BurgerIngredientsStyles from "./BurgerIngredients.module.css";
import PropTypes from "prop-types";

const burgerIngredientsPropTypes = PropTypes.shape({
  _id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
});
BurgerIngredients.propTypes = {
  data: burgerIngredientsPropTypes,
};

export default function BurgerIngredients({ data }) {
  const [current, setCurrent] = React.useState("Булки");
  return (
    <>
      <div style={{ display: "flex" }}>
        <Tab value="Булки" active={current === "Булки"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="Соусы" active={current === "Соусы"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab
          value="Начинки"
          active={current === "Начинки"}
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
                <BurgerIngridient {...el} />
              ))}
          </ul>
        </div>
        <div className={BurgerIngredientsStyles.tab}>
          <h2 className="text text_type_main-medium pt-10 pb-6">Соусы</h2>
          <ul className={BurgerIngredientsStyles.list}>
            {data
              .filter((el) => el.type === "sauce")
              .map((el) => (
                <BurgerIngridient {...el} />
              ))}
          </ul>
        </div>
        <div className={BurgerIngredientsStyles.tab}>
          <h2 className="text text_type_main-medium pt-10 pb-6">Начинки</h2>
          <ul className={BurgerIngredientsStyles.list}>
            {data
              .filter((el) => el.type === "main")
              .map((el) => (
                <BurgerIngridient {...el} />
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
