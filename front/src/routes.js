import { Switch, Route, Redirect } from "react-router-dom";
import ProctectedRoute from "./common/ProctectedRoute/ProtectedRouteContainer";

import Formulaire from "./layouts/Formulaire/FormulaireContainer";
import Home from "./layouts/Home/Home";

const Routes = () => (
  <Switch>
    <Route exact path="/connexion" component={Formulaire} />
    <ProctectedRoute exact path="/accueil" component={Home} />
    <Route exact path="/">
      <Redirect to="/accueil" />
    </Route>
  </Switch>
);

export default Routes;
