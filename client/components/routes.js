import React from 'react';
import { Route, Switch } from 'react-router';

import LoginPage from './login';
import HomePage from './home';
import NotFound from './NotFound';

const routes =
    <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login' component={LoginPage} />
        <Route path='/*' component={NotFound} />
    </Switch>

export default routes;