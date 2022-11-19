import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import MainStyles from "./Main.module.css";
import PropTypes from "prop-types";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

Main.propTypes = {
  handleOpenModal: PropTypes.func,
  handleOpenIngridientModal: PropTypes.func,
}

export default function Main({ handleOpenModal, handleOpenIngridientModal }) {
  return (
    <DndProvider backend={HTML5Backend}>
    <main className={MainStyles.main}>
      <h1 className="text text_type_main-large pt-10 pb-5 m-0">Соберите бургер</h1>
      <div className={MainStyles.mainDivider}>
        <section className={MainStyles.burgerIngredients}>
          <BurgerIngredients handleOpenIngridientModal={handleOpenIngridientModal} />
        </section>
        <section className={MainStyles.burgerConstructor}>
          <BurgerConstructor handleOpenModal={handleOpenModal} />
        </section>
      </div>
    </main>
    </DndProvider>
  );
}

