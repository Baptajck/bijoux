import { Switch, Route, Redirect } from "react-router-dom";
import ProctectedRoute from "./common/ProctectedRoute/ProtectedRouteContainer";

import CreateUser from "./layouts/CreateUser/CreateUserContainer";
import Login from "./layouts/Login/LoginContainer";
import Home from "./layouts/Home/Home";

const Routes = () => (
  <Switch>
    <Route exact path="/creer-un-compte" component={CreateUser} />
    <Route exact path="/se-connecter" component={Login} />
    <ProctectedRoute exact path="/accueil" component={Home} />
    <Route exact path="/">
      <Redirect to="/accueil" />
    </Route>
  </Switch>
);

export default Routes;
