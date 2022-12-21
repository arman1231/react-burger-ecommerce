import { FC } from "react";
import { Route, Redirect, useLocation } from "react-router-dom";

type TProtectedRoute = {
  component: FC<Omit<TProtectedRoute, "component">>;
  isLoggedIn: boolean;
  path: string;
}

const ProtectedRoute: FC<TProtectedRoute> = ({ component: Component, ...props }) => {
  const location = useLocation();
  return (
    <Route>
      {() =>
        props.isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    </Route>
  );
}
export default ProtectedRoute;