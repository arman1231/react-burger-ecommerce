import React, { useEffect } from "react";
import AppHeader from "../AppHeader/AppHeader";
import Main from "../Main/Main";
import appStyles from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  CLEAR_MODAL_INGRIDIENT_DATA,
  fetchIngridients,
} from "../../services/actions/cart";
import {
  Switch,
  Route,
  Redirect,
  useLocation,
  useHistory,
} from "react-router-dom";
import Login from "../../pages/Login/Login";
import NotFound from "../../pages/NotFound/NotFound";
import Register from "../../pages/Register/Register";
import ForgotPassword from "../../pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../../pages/ResetPassword/ResetPassword";
import Profile from "../../pages/Profile/Profile";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { getUserAction } from "../../services/actions/auth";
import Modal from "../Modal/Modal";
import * as H from 'history';

function App() {
  const history = useHistory();
  const isModalIngridientData = useSelector(
    (state: any) => state.ingredientDetails.modalIngridientData
  );
  const location = useLocation<{background: H.Location, from: H.Location}>();
  const background = location.state && location.state.background;
  const dispatch: any = useDispatch();
  const data = useSelector(
    (state: any) => state.burgerIngredients.burgerIngredients
  );
  const isLoggedIn = useSelector((state: any) => state.auth.userData);

  function checkToken() {
    if (localStorage.getItem("accessToken")) {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        dispatch(getUserAction());
      }
    }
  }

  useEffect(() => {
    dispatch(fetchIngridients());
    checkToken();
  }, [dispatch]);

  if (!data) {
    return <></>;
  }
  function handleClose() {
    history.goBack();
    dispatch({
      type: CLEAR_MODAL_INGRIDIENT_DATA,
    });
  }
  return (
    <div className={appStyles.page}>
      <AppHeader />
      <main className={appStyles.main}>
        <Switch location={background || location}>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/login">
            {isLoggedIn ? (
              <Redirect to={location?.state?.from?.pathname || "/"} />
            ) : (
              <Login />
            )}
          </Route>
          <Route exact path="/register">
            {isLoggedIn ? (
              <Redirect to={location?.state?.from?.pathname || "/"} />
            ) : (
              <Register />
            )}
          </Route>
          <Route exact path="/forgot-password">
            {isLoggedIn ? (
              <Redirect to={location?.state?.from?.pathname || "/"} />
            ) : (
              <ForgotPassword />
            )}
          </Route>
          <Route exact path="/reset-password">
            {isLoggedIn ? (
              <Redirect to={location?.state?.from?.pathname || "/"} />
            ) : (
              <ResetPassword />
            )}
          </Route>
          <Route path="/ingredients/:id">
            <IngredientDetails />
          </Route>
          <ProtectedRoute
            path="/profile"
            component={Profile}
            isLoggedIn={isLoggedIn}
          />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        {isModalIngridientData && (
          <Modal handleCloseModal={handleClose}>
            <IngredientDetails />
          </Modal>
        )}
        {background && (
          <Route
            path="/ingredients/:id"
            children={
              <Modal handleCloseModal={handleClose}>
                <IngredientDetails />
              </Modal>
            }
          />
        )}
      </main>
    </div>
  );
}

export default App;
