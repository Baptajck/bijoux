import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, user, isLogged, ...rest }) => {
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={(props) =>
        isLogged ? <Component {...props} /> : <Redirect to="/connexion" />
      }
    />
  );
};

export default ProtectedRoute;
