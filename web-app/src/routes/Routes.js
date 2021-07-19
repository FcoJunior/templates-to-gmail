import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TemplateListView from '../view/template/TemplateListView';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/templates/new" render={() => <h1>New</h1>} exact />
            <Route path="/templates/:email" render={() => <TemplateListView />} exact />
            <Route path="*" component={ () => <h1>404 - NotFound</h1> } exact />
        </Switch>
    </BrowserRouter>
)

export default Routes;