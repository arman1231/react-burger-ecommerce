import React, { useEffect } from "react";
import AppHeader from "../AppHeader/AppHeader";
import Main from "../Main/Main";
import appStyles from "./App.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngridients } from "../../services/actions/cart";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "../../pages/Login/Login";
import NotFound from "../../pages/NotFound/NotFound";
import Register from "../../pages/Register/Register";
import ForgotPassword from "../../pages/ForgotPassword/ForgotPassword";
import ResetPassword from "../../pages/ResetPassword/ResetPassword";
import Profile from "../../pages/Profile/Profile";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const dispatch = useDispatch();
  const data = useSelector(
    (state) => state.burgerIngredients.burgerIngredients
  );
  const isLoggedIn = useSelector((state) => state.auth.userData);
  console.log(isLoggedIn);
  useEffect(() => {
    dispatch(fetchIngridients());
  }, [dispatch]);

  if (!data) {
    return <></>;
  }

  return (
    <div className={appStyles.page}>
      <AppHeader />
      <main className={appStyles.main}>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>
          <Route exact path="/login">
            {isLoggedIn ? <Redirect to="/" /> : <Login />}
            <Login />
          </Route>
          <Route exact path="/register">
            {isLoggedIn ? <Redirect to="/" /> : <Register />}
          </Route>
          <Route exact path="/forgot-password">
            {isLoggedIn ? <Redirect to="/" /> : <ForgotPassword />}
          </Route>
          <Route exact path="/reset-password">
            {isLoggedIn ? <Redirect to="/" /> : <ResetPassword />}
          </Route>
          <Route exact path="/ingredients/:id">
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
      </main>
    </div>
  );
}

export default App;
