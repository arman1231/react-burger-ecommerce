import styles from "./IngredientDetails.module.css";
import { useSelector } from 'react-redux';

export default function IngredientDetails() {
  const ingridientData = useSelector(state => state.ingredientDetails.modalIngridientData);
  return (
      <div className={styles.ingredientDetails}>
        <p className="text text_type_main-large pt-10">Детали ингредиента</p>
        <img src={ingridientData && ingridientData.image_large} alt={ingridientData && ingridientData.name} />
        <h1 className="text text_type_main-medium pt-4">{ingridientData && ingridientData.name}</h1>
        <ul className={`${styles.foodFacts} mb-15`}>
            <li className={styles.foodFactsItem}><span className="text text_type_main-medium text_color_inactive">Калории,ккал</span><span className="text text_type_digits-medium text_color_inactive">{ingridientData && ingridientData.calories}</span></li>
            <li className={styles.foodFactsItem}><span className="text text_type_main-medium text_color_inactive">Белки, г</span><span className="text text_type_digits-medium text_color_inactive">{ingridientData && ingridientData.proteins}</span></li>
            <li className={styles.foodFactsItem}><span className="text text_type_main-medium text_color_inactive">Жиры, г</span><span className="text text_type_digits-medium text_color_inactive">{ingridientData && ingridientData.fat}</span></li>
            <li className={styles.foodFactsItem}><span className="text text_type_main-medium text_color_inactive">Углеводы, г</span><span className="text text_type_digits-medium text_color_inactive">{ingridientData && ingridientData.carbohydrates}</span></li>
        </ul>
      </div>
  );
}
