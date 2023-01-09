import styles from "./IngredientDetails.module.css";
// import { useSelector } from 'react-redux';
import { useSelector } from "../../utils/hooks";
import { useParams } from "react-router-dom";

export default function IngredientDetails() {
  const { id } = useParams<{ id?: string }>();
  const { burgerIngredients } = useSelector((state) => state.burgerIngredients);
  const burgerIngredient = burgerIngredients!.find((el: { _id: string }) => el._id === id);
  return (
    <div className={styles.ingredientDetails}>
      <p className="text text_type_main-large pt-10">Детали ингредиента</p>
      <img src={burgerIngredient && burgerIngredient.image_large} alt={burgerIngredient && burgerIngredient.name} />
      <h1 className="text text_type_main-medium pt-4">{burgerIngredient && burgerIngredient.name}</h1>
      <ul className={`${styles.foodFacts} mb-15`}>
        <li className={styles.foodFactsItem}><span className="text text_type_main-medium text_color_inactive">Калории,ккал</span><span className="text text_type_digits-medium text_color_inactive">{burgerIngredient && burgerIngredient.calories}</span></li>
        <li className={styles.foodFactsItem}><span className="text text_type_main-medium text_color_inactive">Белки, г</span><span className="text text_type_digits-medium text_color_inactive">{burgerIngredient && burgerIngredient.proteins}</span></li>
        <li className={styles.foodFactsItem}><span className="text text_type_main-medium text_color_inactive">Жиры, г</span><span className="text text_type_digits-medium text_color_inactive">{burgerIngredient && burgerIngredient.fat}</span></li>
        <li className={styles.foodFactsItem}><span className="text text_type_main-medium text_color_inactive">Углеводы, г</span><span className="text text_type_digits-medium text_color_inactive">{burgerIngredient && burgerIngredient.carbohydrates}</span></li>
      </ul>
    </div>
  );
}
