import React from "react";
import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerConstructor.module.css";
import bun02 from "../../images/bun-02.svg";
import PropTypes from 'prop-types';


const burgerIngredientsPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
});
BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(burgerIngredientsPropTypes).isRequired,
};

export default function BurgerConstructor({ data }) {
  return (
    <>
      <div
        className={styles.burgerConstructor}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <ConstructorElement
          extraClass="ml-6"
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={20}
          thumbnail={bun02}
        />
        <div className={styles.scrollable}>
          {data &&
            data.map((el, i) => (
              <ConstructorElement
                extraClass={`${styles.draggable}`}
                key={el._id}
                type={el.type}
                text={el.name}
                price={el.price}
                thumbnail={el.image}
              />
            ))}
        </div>
        <ConstructorElement
          extraClass="ml-6"
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={bun02}
        />
      </div>
      <section className={`${styles.total} mt-10 mr-4`}>
        <div className={`${styles.priceWrap} mr-10`}>
          <span
            className={`${styles.price} text text_type_digits-medium`}
          >
            610
          </span>
          <CurrencyIcon className="pr-2" type="primary" />
        </div>

        <Button type="primary" size="large">
          Нажми на меня
        </Button>
      </section>
    </>
  );

}
