import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import { history } from "../_helpers";
import { HomePage } from "../HomePage";

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
            <Redirect from="*" to="/" />
          </Switch>
        </main>
      </Router>
    );
  }
}

export { App };
