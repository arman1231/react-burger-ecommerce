import React from "react";
import Modal from "../Modal/Modal";
import doneSvg from "../../images/graphics.svg";
import styles from "./IngredientDetails.module.css"

export default function IngredientDetails({ handleCloseModal, ingridientData }) {
  return (
    <Modal handleCloseModal={handleCloseModal}>
      <div className={styles.ingredientDetails}>
        <p className="text text_type_main-large pt-10">Детали ингредиента</p>
        <img src={ingridientData.image_large} alt={ingridientData.name} />
        <h1 className="text text_type_main-medium pt-4">{ingridientData.name}</h1>
        <ul className={`${styles.foodFacts} mb-15`}>
            <li className={styles.foodFactsItem}><span className="text text_type_main-medium text_color_inactive">Калории,ккал</span><span className="text text_type_digits-medium text_color_inactive">{ingridientData.calories}</span></li>
            <li className={styles.foodFactsItem}><span className="text text_type_main-medium text_color_inactive">Белки, г</span><span className="text text_type_digits-medium text_color_inactive">{ingridientData.proteins}</span></li>
            <li className={styles.foodFactsItem}><span className="text text_type_main-medium text_color_inactive">Жиры, г</span><span className="text text_type_digits-medium text_color_inactive">{ingridientData.fat}</span></li>
            <li className={styles.foodFactsItem}><span className="text text_type_main-medium text_color_inactive">Углеводы, г</span><span className="text text_type_digits-medium text_color_inactive">{ingridientData.carbohydrates}</span></li>
        </ul>
      </div>
    </Modal>
  );
}
