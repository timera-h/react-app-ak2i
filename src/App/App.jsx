import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';

import { history } from '../_helpers';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { IndexPage } from '../LoginPage';
import { RegisterPage } from '../RegisterPage';

class App extends React.Component {


    render() {
        return (
            <div className="">
                        <Router history={history}>
                            <Switch>
                                <Route exact path="/" component={IndexPage} />
                                <PrivateRoute path="/home" component={HomePage} />
                                <Route path="/register" component={RegisterPage} />
                                <Redirect from="*" to="/" />
                            </Switch>
                        </Router>
                </div>
        );
    }

}

export { App };