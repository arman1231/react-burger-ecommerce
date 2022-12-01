import {
  Button,
  Input,
  PasswordInput
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ResetPassword.module.css";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPasswordAction } from "../../services/actions/resetPassword";

export default function ResetPassword() {
  const history = useHistory()
  const dispatch = useDispatch();
  const isSuccess = useSelector(state => state.reset.data?.message)
  const isResetPassowrdRequested = useSelector(state => state.reset.isResetPassowrdRequested);
  const [state, setState] = useState({
    code: "",
    password: "",
  });
  useEffect(() => {
    if (isSuccess === 'Password successfully reset') {
      history.push('/login')
    }
    if (!isResetPassowrdRequested) {
      history.push('/register')
    }
  }, [isSuccess, history])
  function handleInputChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(resetPasswordAction(state.password, state.code))
  }
  return (
    <div className={styles.resetPassword}>
      <h1 className={`${styles.heading} text text_type_main-medium mb-6`}>
        Восстановление пароля
      </h1>
      <form onSubmit={handleSubmit}>
      <PasswordInput
          onChange={handleInputChange}
          value={state.password}
          name={"password"}
          extraClass="mb-6"
          placeholder="Введите новый пароль"
        />
              <Input
      type={'text'}
      placeholder={'Введите код из письма'}
      onChange={handleInputChange}
      value={state.code}
      name={'code'}
      error={false}
      errorText={'Ошибка'}
      size={'default'}
      extraClass="mb-6"
    />
        <Button
          disabled={!(state.password.length > 0)}
          htmlType="submit"
          type="primary"
          size="medium"
          extraClass={`${styles.button}`}
        >
          Восстановить
        </Button>
      </form>
      <p className="text text_type_main-default text_color_inactive mb-4">
        Вспомнили пароль?{" "}
        <Link to="/login" className={styles.link}>
          Войти
        </Link>
      </p>
    </div>
  );
}
