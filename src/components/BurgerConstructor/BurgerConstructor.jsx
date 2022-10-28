import React from "react";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from'./BurgerConstructor.module.css';
import bun02 from "../../images/bun-02.svg";
import sauce03 from "../../images/sauce-03.svg";


export default function BurgerConstructor({ data }) {
  return (
    <div className={styles.burgerConstructor} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {data &&
        data.map((el, i) => (
          <ConstructorElement extraClass={(i !== 0) && (i !== data.length - 1) ? `${styles.draggable}` : `${styles.fixed}`}
            isLocked={i === 0 || i === data.length - 1}
            key={el._id}
            type={el.type}
            text={el.name}
            price={el.price}
            thumbnail={el.image}
            // draggable={i !== 0 || i !== data.length - 1}
          />
        ))}
      {/* <ConstructorElement
        c
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={20}
          thumbnail={bun02}
        />
        <ConstructorElement
          text="Соус традиционный галактический"
          price={30}
          thumbnail={sauce03}
        />
                <ConstructorElement
          text="Соус традиционный галактический"
          price={30}
          thumbnail={sauce03}
        />
                <ConstructorElement
          text="Соус традиционный галактический"
          price={30}
          thumbnail={sauce03}
        />
                <ConstructorElement
          text="Соус традиционный галактический"
          price={30}
          thumbnail={sauce03}
        />
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={bun02}
        /> */}
    </div>
  );
}
