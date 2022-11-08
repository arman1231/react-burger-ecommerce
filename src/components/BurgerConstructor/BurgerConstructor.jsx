import React, { useContext } from "react";
import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerConstructor.module.css";
import bun02 from "../../images/bun-02.svg";
import PropTypes from 'prop-types';
import { IngridientsContext } from "../../context/appContext";


const burgerIngredientsPropTypes = PropTypes.shape({
  _id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
});
BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(burgerIngredientsPropTypes).isRequired,
  handleOpenModal: PropTypes.func
};

export default function BurgerConstructor({ handleOpenModal }) {
  const data = useContext(IngridientsContext)
  function handleClick() {
    const orderData = data.map(el => el._id);
    handleOpenModal(orderData)
  }
  return (
    <>
      <div
        className={styles.burgerConstructor}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        {data && data.filter(el => el.type === 'bun').map((el, i) => i === 0 && (
          <ConstructorElement
          key={el._id}
          extraClass="ml-6"
          type="top"
          isLocked={true}
          text={`${el.name} (верх)`}
          price={el.price}
          thumbnail={el.image}
        />
        ))}   
        <div className={styles.scrollable}>
          {data &&
            data.filter(el => el.type !== 'bun').map((el, i) => (
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
        {data && data.filter(el => el.type === 'bun').map((el, i) => i === 0 && (
          <ConstructorElement
          key={el._id}
          extraClass="ml-6"
          type="bottom"
          isLocked={true}
          text={`${el.name} (низ)`}
          price={el.price}
          thumbnail={el.image}
        />
        ))}   
      </div>
      <section className={`${styles.total} mt-10 mr-4`}>
        <div className={`${styles.priceWrap} mr-10`}>
          <span
            className={`${styles.price} text text_type_digits-medium`}
          >
            {data && data.reduce((acc, prev) => {
              return (acc + prev.price);
            }, 0)}
          </span>
          <CurrencyIcon className="pr-2" type="primary" />
        </div>

        <Button onClick={handleClick} type="primary" size="large" htmlType='button'>
          Нажми на меня
        </Button>
      </section>
    </>
  );

}
