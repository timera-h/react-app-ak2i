import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import { history } from "../_helpers";
// import { PrivateRoute } from '../_components';
import { HomePage } from "../HomePage";
import { RegisterPage } from "../RegisterPage";

// layout
import Header from "../Layout/index";

class App extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            {/* <PrivateRoute path="/home" component={HomePage} /> */}
            <Route path="/register" component={RegisterPage} />
            <Redirect from="*" to="/" />
          </Switch>
        </main>
      </Router>
    );
  }
}

export { App };
