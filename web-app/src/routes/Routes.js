import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './../view/home/Home';
import App from './../App';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ () => <App /> } exact />
            <Route path="/:email" render={() => <Home />} exact />
        </Switch>
    </BrowserRouter>
)

export default Routes;