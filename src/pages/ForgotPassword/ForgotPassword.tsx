import {
  Button,
  EmailInput
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./ForgotPassword.module.css";
import { Link, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useDispatch, useSelector } from "../../utils/hooks";
import { forgotPasswordAction } from "../../services/actions/resetPassword";

const ForgotPassword: React.FC = () => {
  const history = useHistory()
  const dispatch= useDispatch();
  const isEmailCorrect = useSelector((state) => state.reset.data?.success)
  const [state, setState] = useState<{ email: string, password: string }>({
    email: "",
    password: ""
  })
  useEffect(() => {
    if (isEmailCorrect) {
      history.push('/reset-password')
    }
  }, [isEmailCorrect, history])
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(forgotPasswordAction(state.email))
  }
  return (
    <div className={styles.forgotPassword}>
      <h1 className={`${styles.heading} text text_type_main-medium mb-6`}>Восстановление пароля</h1>
      <form onSubmit={handleSubmit}>
        <EmailInput
          onChange={handleInputChange}
          value={state.email}
          name={'email'}
          isIcon={false}
          extraClass="mb-6"
          placeholder="Укажите e-mail"
        />
        <Button disabled={!(state.email.length > 0)} htmlType="submit" type="primary" size="medium" extraClass={`${styles.button}`}>
          Восстановить
        </Button>
      </form>
      <p className="text text_type_main-default text_color_inactive mb-4">Вспомнили пароль? <Link to="/login" className={styles.link}>Войти</Link></p>
    </div>
  );
}
export default ForgotPassword;