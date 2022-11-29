import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import AppHeaderStyle from "./AppHeader.module.css";

export default function AppHeader() {
  const userName = useSelector(state => state.auth?.userData?.user?.name) 
  return (
    <header className={`${AppHeaderStyle.header} pt-4 pb-4`}>
      <nav className={AppHeaderStyle.menu}>
        <div className={AppHeaderStyle.menuLeft}>
          <Link className={`${AppHeaderStyle.menuLink} p-5`} to="/">
            <BurgerIcon type="primary" />{" "}
            <span className="text text_type_main-default ml-2">
              Конструктор
            </span>
          </Link>
          <Link className={`${AppHeaderStyle.menuLink} ml-2 p-5`} to="#">
            <ListIcon type="secondary" />{" "}
            <span className="text text_type_main-default text_color_inactive ml-2">
              Лента заказов
            </span>
          </Link>
        </div>
        <Link className={AppHeaderStyle.logo} to="/"><Logo /></Link>
        <div className={AppHeaderStyle.menuRigth}>
          <Link className={`${AppHeaderStyle.menuLink} p-5`} to='/profile'>
            <ProfileIcon type="secondary" />
            <span className="text text_type_main-default text_color_inactive ml-2">
              {userName ? userName : 'Личный кабинет'}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
