import {
  Counter,
  CurrencyIcon,
  Tab,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import bun01 from "../../images/bun-01.svg";
import bun02 from "../../images/bun-02.svg";
import sauce02 from "../../images/sauce-02.svg";
import sauce04 from "../../images/sauce-04.svg";


import BurgerIngredientsStyles from "./BurgerIngredients.module.css";

export default function BurgerIngredients() {
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
            <li className={BurgerIngredientsStyles.item}>
              <img
                className={BurgerIngredientsStyles.image}
                src={bun02}
                alt=""
              />
              <Counter
                className={BurgerIngredientsStyles.counter}
                count={1}
                size="default"
              />
              <div className={`${BurgerIngredientsStyles.info} pt-1 pb-1`}>
                <span
                  className={`${BurgerIngredientsStyles.price} text text_type_digits-default mr-2`}
                >
                  20
                </span>
                <CurrencyIcon type="primary" />
              </div>
              <h3 className="text text_type_main-default mb-6">
                Краторная булка N-200i
              </h3>
            </li>
            <li className={BurgerIngredientsStyles.item}>
              <img
                className={BurgerIngredientsStyles.image}
                src={bun01}
                alt=""
              />
              {/* <Counter
                className={BurgerIngredientsStyles.counter}
                count={1}
                size="default"
              /> */}
              <div className={`${BurgerIngredientsStyles.info} pt-1 pb-1`}>
                <span
                  className={`${BurgerIngredientsStyles.price} text text_type_digits-default mr-2`}
                >
                  20
                </span>
                <CurrencyIcon type="primary" />
              </div>
              <h3 className="text text_type_main-default mb-6">
                Флюоресцентная булка R2-D3
              </h3>
            </li>
          </ul>
        </div>
        <div className={BurgerIngredientsStyles.tab}>
          <h2 className="text text_type_main-medium pt-10 pb-6">Соусы</h2>
          <ul className={BurgerIngredientsStyles.list}>
            <li className={BurgerIngredientsStyles.item}>
              <img
                className={BurgerIngredientsStyles.image}
                src={sauce02}
                alt=""
              />
              {/* <Counter
                className={BurgerIngredientsStyles.counter}
                count={1}
                size="default"
              /> */}
              <div className={`${BurgerIngredientsStyles.info} pt-1 pb-1`}>
                <span
                  className={`${BurgerIngredientsStyles.price} text text_type_digits-default mr-2`}
                >
                  30
                </span>
                <CurrencyIcon type="primary" />
              </div>
              <h3 className="text text_type_main-default mb-6">
              Соус Spicy-X
              </h3>
            </li>
            <li className={BurgerIngredientsStyles.item}>
              <img
                className={BurgerIngredientsStyles.image}
                src={sauce04}
                alt=""
              />
              {/* <Counter
                className={BurgerIngredientsStyles.counter}
                count={1}
                size="default"
              /> */}
              <div className={`${BurgerIngredientsStyles.info} pt-1 pb-1`}>
                <span
                  className={`${BurgerIngredientsStyles.price} text text_type_digits-default mr-2`}
                >
                  30
                </span>
                <CurrencyIcon type="primary" />
              </div>
              <h3 className="text text_type_main-default mb-6">
              Соус фирменный Space Sauce
              </h3>
            </li>
            <li className={BurgerIngredientsStyles.item}>
              <img
                className={BurgerIngredientsStyles.image}
                src={sauce04}
                alt=""
              />
              {/* <Counter
                className={BurgerIngredientsStyles.counter}
                count={1}
                size="default"
              /> */}
              <div className={`${BurgerIngredientsStyles.info} pt-1 pb-1`}>
                <span
                  className={`${BurgerIngredientsStyles.price} text text_type_digits-default mr-2`}
                >
                  30
                </span>
                <CurrencyIcon type="primary" />
              </div>
              <h3 className="text text_type_main-default mb-6">
              Соус фирменный Space Sauce
              </h3>
            </li>
            <li className={BurgerIngredientsStyles.item}>
              <img
                className={BurgerIngredientsStyles.image}
                src={bun02}
                alt=""
              />
              <Counter
                className={BurgerIngredientsStyles.counter}
                count={1}
                size="default"
              />
              <div className={`${BurgerIngredientsStyles.info} pt-1 pb-1`}>
                <span
                  className={`${BurgerIngredientsStyles.price} text text_type_digits-default mr-2`}
                >
                  20
                </span>
                <CurrencyIcon type="primary" />
              </div>
              <h3 className="text text_type_main-default mb-6">
                Флюоресцентная булка R2-D3
              </h3>
            </li>
          </ul>
        </div>
        <div className={BurgerIngredientsStyles.tab}>
          <h2 className="text text_type_main-medium pt-10 pb-6">Начинки</h2>
          <ul className={BurgerIngredientsStyles.list}>
            <li className={BurgerIngredientsStyles.item}>
              <img
                className={BurgerIngredientsStyles.image}
                src={bun02}
                alt=""
              />
              <Counter
                className={BurgerIngredientsStyles.counter}
                count={1}
                size="default"
              />
              <div className={`${BurgerIngredientsStyles.info} pt-1 pb-1`}>
                <span
                  className={`${BurgerIngredientsStyles.price} text text_type_digits-default mr-2`}
                >
                  20
                </span>
                <CurrencyIcon type="primary" />
              </div>
              <h3 className="text text_type_main-default mb-6">
                Краторная булка N-200i
              </h3>
            </li>
            <li className={BurgerIngredientsStyles.item}>
              <img
                className={BurgerIngredientsStyles.image}
                src={bun02}
                alt=""
              />
              <Counter
                className={BurgerIngredientsStyles.counter}
                count={1}
                size="default"
              />
              <div className={`${BurgerIngredientsStyles.info} pt-1 pb-1`}>
                <span
                  className={`${BurgerIngredientsStyles.price} text text_type_digits-default mr-2`}
                >
                  20
                </span>
                <CurrencyIcon type="primary" />
              </div>
              <h3 className="text text_type_main-default mb-6">
                Флюоресцентная булка R2-D3
              </h3>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
