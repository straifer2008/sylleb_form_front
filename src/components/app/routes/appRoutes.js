import React from 'react';
import {compose} from 'recompose';
import {Route, Switch} from 'react-router';
import {ConfirmRegister} from '../../';
import {Home, Login, Auth} from '../../../pages';
import Page404 from '../../page404/page404';
import {
    userIsAuthenticated,
    userIsNotAuthenticated
} from '../../../utils/helpers/authHelpers';

const AppRoutes = () => (
    <Switch>
        <Route path="/home" component={userIsAuthenticated(Home)} />
        <Route path="/login" component={userIsNotAuthenticated(Login)} />
        <Route path="/register" component={userIsNotAuthenticated(Auth)} />
        <Route path="/confirm-register/:token"
               component={userIsNotAuthenticated(ConfirmRegister)} />
        <Route component={Page404} />
    </Switch>
);

const enhance = compose();
export default enhance(AppRoutes);
