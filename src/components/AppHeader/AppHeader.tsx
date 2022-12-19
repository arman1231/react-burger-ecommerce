import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { any } from "prop-types";
import { FC } from "react";
import { useSelector } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";

import AppHeaderStyle from "./AppHeader.module.css";

 const AppHeader: FC = () => {
  const isConstructor = !!useRouteMatch({ path: '/', exact: true });
  const isFeed = !!useRouteMatch({ path: '/feed' });
  const isProfile = !!useRouteMatch({ path: '/profile' });
  const userName = useSelector((state: any) => state.auth?.userData?.user?.name) 
  return (
    <header className={`${AppHeaderStyle.header} pt-4 pb-4`}>
      <nav className={AppHeaderStyle.menu}>
        <div className={AppHeaderStyle.menuLeft}>
          <Link className={`${AppHeaderStyle.menuLink} p-5`} to="/">
            <BurgerIcon type={!isConstructor ? 'secondary' : 'primary'} />{" "}
            <span className={`text text_type_main-default ml-2 ${!isConstructor && 'text_color_inactive'}`}>
              Конструктор
            </span>
          </Link>
          <Link className={`${AppHeaderStyle.menuLink} ml-2 p-5`} to="#">
            <ListIcon type={!isFeed ? 'secondary' : 'primary'} />{" "}
            <span className={`text text_type_main-default ml-2 ${!isFeed && 'text_color_inactive'}`}>
              Лента заказов
            </span>
          </Link>
        </div>
        <Link className={AppHeaderStyle.logo} to="/"><Logo /></Link>
        <div className={AppHeaderStyle.menuRigth}>
          <Link className={`${AppHeaderStyle.menuLink} p-5`} to='/profile'>
            <ProfileIcon type={!isProfile ? 'secondary' : 'primary'} />
            <span className={`text text_type_main-default ml-2 ${!isProfile && 'text_color_inactive'}`}>
              {userName ? userName : 'Личный кабинет'}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
export default AppHeader;