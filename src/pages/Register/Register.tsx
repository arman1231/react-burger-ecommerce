import {
  Button,
  EmailInput,
  PasswordInput,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./Register.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerAction } from "../../services/actions/auth";
import { TUser } from "../../utils/types";

const Register: React.FC = () => {
  const dispatch: any = useDispatch();
  const [state, setState] = useState<TUser>({
    name: "",
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
    e.preventDefault();
    const { email, password, name } = state;
    dispatch(registerAction(email, password, name));
  }

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
export default Register;