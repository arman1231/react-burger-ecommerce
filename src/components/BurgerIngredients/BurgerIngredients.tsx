import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useRef } from "react";
import BurgerIngridient from "../BurgerIngridient/BurgerIngridient";
import BurgerIngredientsStyles from "./BurgerIngredients.module.css";
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { Link, useLocation } from "react-router-dom";
import { IIngridient } from "../../utils/types";

const BurgerIngredients: React.FC = () => {
  let location = useLocation();
  const data = useSelector(
    (state: any) => state.burgerIngredients.burgerIngredients
  );
  const rootScroll = useRef<HTMLDivElement | null>(null);

  const FIRST_TAB = "Булки";
  const SECOND_TAB = "Соусы";
  const THIRD_TAB = "Начинки";

  const [ref, inView] = useInView({
    root: rootScroll.current,
    threshold: 0.1,
  });
  const [ref2, inView2] = useInView({
    root: rootScroll.current,
    // rootMargin: '100px',
    threshold: 0.8,
  });
  const [ref3, inView3] = useInView({
    root: rootScroll.current,
    threshold: 0.3,
  });
  return (
    <>
      <div className={BurgerIngredientsStyles.tabControls}>
        <Tab value={FIRST_TAB} active={inView} onClick={function (value: string): void {
          throw new Error("Function not implemented.");
        } }>
          Булки
        </Tab>
        <Tab value={SECOND_TAB} active={inView2} onClick={function (value: string): void {
          throw new Error("Function not implemented.");
        } }>
          Соусы
        </Tab>
        <Tab value={THIRD_TAB} active={inView3} onClick={function (value: string): void {
          throw new Error("Function not implemented.");
        } }>
          Начинки
        </Tab>
      </div>
      <div ref={rootScroll} className={BurgerIngredientsStyles.tabList}>
        <div ref={ref} className={BurgerIngredientsStyles.tab}>
          <h2 className="text text_type_main-medium pt-10 pb-6">Булки</h2>
          <ul className={BurgerIngredientsStyles.list}>
            {data
              .filter((el: IIngridient) => el.type === "bun")
              .map((el: IIngridient) => (
                <Link
                  className={BurgerIngredientsStyles.link}
                  key={el._id}
                  to={{
                    pathname: `/ingredients/${el._id}`,
                    // This is the trick! This link sets
                    // the `background` in location state.
                    state: { background: location },
                  }}
                >
                  <BurgerIngridient
                    key={el._id}
                    el={el}
                    {...el}
                  />
                </Link>
              ))}
          </ul>
        </div>
        <div ref={ref2} className={BurgerIngredientsStyles.tab}>
          <h2 className="text text_type_main-medium pt-10 pb-6">Соусы</h2>
          <ul className={BurgerIngredientsStyles.list}>
            {data
              .filter((el: IIngridient) => el.type === "sauce")
              .map((el: IIngridient) => (
                <Link
                  className={BurgerIngredientsStyles.link}
                  key={el._id}
                  to={{
                    pathname: `/ingredients/${el._id}`,
                    // This is the trick! This link sets
                    // the `background` in location state.
                    state: { background: location },
                  }}
                >
                  <BurgerIngridient key={el._id} el={el} {...el} />
                </Link>
              ))}
          </ul>
        </div>
        <div ref={ref3} className={BurgerIngredientsStyles.tab}>
          <h2 className="text text_type_main-medium pt-10 pb-6">Начинки</h2>
          <ul className={BurgerIngredientsStyles.list}>
            {data
              .filter((el: IIngridient) => el.type === "main")
              .map((el: IIngridient) => (
                <Link
                  className={BurgerIngredientsStyles.link}
                  key={el._id}
                  to={{
                    pathname: `/ingredients/${el._id}`,
                    // This is the trick! This link sets
                    // the `background` in location state.
                    state: { background: location },
                  }}
                >
                  <BurgerIngridient key={el._id} el={el} {...el} />
                </Link>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default BurgerIngredients;