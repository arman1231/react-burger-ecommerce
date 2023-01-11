import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./OrderInfo.module.css";

export const OrderInfo = () => {
  return (
    <section className={styles.orderInfo}>
      <p className="text text_type_digits-default">#034533</p>
      <h2 className="text text_type_main-medium">
        Black Hole Singularity острый бургер
      </h2>
      <p className="text text_type_main-default">Выполнен</p>
      <p className="text text_type_main-medium">Состав:</p>
      <div className="ingredientsWrapper"></div>
      <div className={styles.orderDetails}>
        <p></p>
        <div className={styles.priceWrapper}>
          <span
            className={`${styles.price} text text_type_digits-default mr-2`}
          >
            123
          </span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </section>
  );
};
