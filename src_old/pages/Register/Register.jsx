import {
  Button,
  EmailInput,
  PasswordInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Register.module.css";
import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerAction } from "../../services/actions/auth";

export default function Register() {
  const dispatch = useDispatch();
  const history = useHistory();
  const userState = useSelector(state => state.auth.userData)
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });
  function handleInputChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log("click");
    const { email, password, name } = state;
    // api.register(email, password, name).then((data) => console.log(data));
    dispatch(registerAction(email, password, name))
  }
  // useEffect(() => {
  //   if (userState) {
  //     localStorage.setItem('accessToken', JSON.stringify(userState.accessToken))
  //     localStorage.setItem('refreshToken', JSON.stringify(userState.refreshToken))
  //     history.push('/')
  //   }
  // }, [userState, history])
  // console.log(userState);
  return (
    <div className={styles.register}>
      <h1 className={`${styles.heading} text text_type_main-medium mb-6`}>
        Регистрация
      </h1>
      <form onSubmit={handleSubmit}>
        <Input
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
        <Button
          disabled={!(state.email.length > 0 && state.password.length > 0)}
          htmlType="submit"
          type="primary"
          size="medium"
          extraClass={`${styles.button}`}
        >
          Зарегистрироваться
        </Button>
      </form>
      <p className="text text_type_main-default text_color_inactive mb-4">
        Уже зарегистрированы?{" "}
        <Link to="/login" className={styles.link}>
          Войти
        </Link>
      </p>
    </div>
  );
}
