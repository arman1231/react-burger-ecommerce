import { FC, ReactElement } from "react";
import { Route, Redirect, useLocation } from "react-router-dom";
interface IProtectedRoute {
  component: FC<any>;
  isLoggedIn: boolean;
  path: string;
}

 const ProtectedRoute: FC<IProtectedRoute> = ({ component: Component, ...props }) => {
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