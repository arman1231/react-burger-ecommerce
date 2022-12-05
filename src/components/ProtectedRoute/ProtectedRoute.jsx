import { Route, Redirect, useLocation } from "react-router-dom";

export default function ProtectedRoute({ component: Component, ...props }) {
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
