import styles from "./Profile.module.css";
import {
  Button,
  EmailInput,
  PasswordInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useRef, useState } from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction, updateUserAction } from "../../services/actions/auth";
import OrdersFeed from "../../components/OrdersFeed/OrdersFeed";

export default function Profile() {
  const dispatch = useDispatch();
  const { name, email } = useSelector((state) => state.auth.userData.user);
  const [isChange, setIsChange] = useState(false);
  const [state, setState] = useState({
    name: name,
    email: email,
    password: "",
  });
  function handleInputChange(e) {
    setIsChange(true);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateUserAction(state.email, state.password, state.name));
  }
  function handleLogout(e) {
    e.preventDefault();
    dispatch(logoutAction());
  }
  function cancelChanges(e) {
    e.preventDefault();
    setState({
      name: name,
      email: email,
      password: "",
    });
    setIsChange(false);
  }
  return (
    <div className={styles.profile}>
      <nav className={styles.nav}>
        <ul className={styles.menu}>
          <li className={`text text_type_main-medium text_color_inactive pb-5`}>
            <NavLink
              className={styles.link}
              activeClassName={styles.active}
              exact
              to="/profile"
            >
              Профиль
            </NavLink>
          </li>
          <li
            className={`text text_type_main-medium text_color_inactive pt-5 pb-5`}
          >
            <NavLink
              className={styles.link}
              activeClassName={styles.active}
              exact
              to="/profile/orders"
            >
              История заказов
            </NavLink>
          </li>
          <li
            className={`text text_type_main-medium text_color_inactive pt-5 pb-5`}
          >
            <NavLink
              onClick={handleLogout}
              className={styles.link}
              activeClassName={styles.active}
              to="/logout"
            >
              Выход
            </NavLink>
          </li>
        </ul>
        <p className="text text_type_main-default">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </nav>
      <Switch>
        <Route exact path="/profile">
          <form className={styles.form} onSubmit={handleSubmit}>
            <Input
              icon={"EditIcon"}
              type={"text"}
              placeholder={"Имя"}
              onChange={handleInputChange}
              value={state.name}
              name={"name"}
              error={false}
              errorText={"Ошибка"}
              size={"default"}
              extraClass="mb-6"
            />
            <EmailInput
              icon={"EditIcon"}
              onChange={handleInputChange}
              value={state.email}
              name={"email"}
              isIcon={false}
              extraClass="mb-6"
            />
            <PasswordInput
              onChange={handleInputChange}
              value={state.password}
              name={"password"}
              extraClass="mb-6"
            />
            <div className={styles.buttons}>
              {isChange && (
                <>
                  {" "}
                  <Button
                    htmlType="button"
                    type="secondary"
                    size="medium"
                    onClick={cancelChanges}
                  >
                    Отмена
                  </Button>
                  <Button
                    // disabled={!(state.email.length > 0 && state.password.length > 0)}
                    htmlType="submit"
                    type="primary"
                    size="medium"
                    extraClass={`${styles.button}`}
                  >
                    Сохранить
                  </Button>
                </>
              )}
            </div>
          </form>
        </Route>
        <Route exact path="/profile/orders">
          <OrdersFeed />
        </Route>
      </Switch>
    </div>
  );
}
