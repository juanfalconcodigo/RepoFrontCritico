import React from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import hashHistory from "../helpers/history";

import { RoutingProducts, Login } from '../features';


function RoutingRoot(prop) {
  return (
    <Router history={hashHistory}>

      <main>
        <Switch>
          <Route path='/home' component={RoutingProducts} />
          <Route path='/login' component={Login} />
          <Redirect from='**' to='/login' />

        </Switch>
      </main>

    </Router>
  );
}

export { RoutingRoot };
