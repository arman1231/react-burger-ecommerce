import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../../services/actions/auth";
import { TUser } from "../../utils/types";

const Login: React.FC = () => {
  const dispatch: any = useDispatch();
  const [state, setState] = useState<Omit<TUser, "name">>({
    email: "",
    password: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    const { email, password } = state;
    e.preventDefault();
    dispatch(loginAction(email, password));
  }
  return (
    <div className={styles.login}>
      <h1 className={`${styles.heading} text text_type_main-medium mb-6`}>
        Вход
      </h1>
      <form onSubmit={handleSubmit}>
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
          Вход
        </Button>
      </form>
      <p className="text text_type_main-default text_color_inactive mb-4">
        Вы — новый пользователь?{" "}
        <Link to="/register" className={styles.link}>
          Зарегистрироваться
        </Link>
      </p>
      <p className="text text_type_main-default text_color_inactive">
        Забыли пароль?{" "}
        <Link to="/forgot-password" className={styles.link}>
          Восстановить пароль
        </Link>
      </p>
    </div>
  );
}
export default Login;