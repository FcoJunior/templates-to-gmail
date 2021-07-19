import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TemplateList from '../view/template/TemplateList';
import TemplateForm from '../view/template/TemplateForm';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/templates/new" render={() => <TemplateForm />} exact />
            <Route path="/templates/:email" render={() => <TemplateList />} exact />
            <Route path="*" component={ () => <h1>404 - NotFound</h1> } exact />
        </Switch>
    </BrowserRouter>
)

export default Routes;