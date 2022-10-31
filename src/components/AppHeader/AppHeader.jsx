import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import AppHeaderStyle from "./AppHeader.module.css";

export default function AppHeader() {
  return (
    <header className={`${AppHeaderStyle.header} pt-4 pb-4`}>
      <nav className={AppHeaderStyle.menu}>
        <div className={AppHeaderStyle.menuLeft}>
          <a className={`${AppHeaderStyle.menuLink} p-5`} href="#">
            <BurgerIcon type="primary" />{" "}
            <span className="text text_type_main-default ml-2">
              Конструктор
            </span>
          </a>
          <a className={`${AppHeaderStyle.menuLink} ml-2 p-5`} href="#">
            <ListIcon type="secondary" />{" "}
            <span className="text text_type_main-default text_color_inactive ml-2">
              Лента заказов
            </span>
          </a>
        </div>
        <a className={AppHeaderStyle.logo} href="#"><Logo /></a>
        <div className={AppHeaderStyle.menuRigth}>
          <a className={`${AppHeaderStyle.menuLink} p-5`} href="#">
            <ProfileIcon type="secondary" />
            <span className="text text_type_main-default text_color_inactive ml-2">
              Личный кабинет
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}
