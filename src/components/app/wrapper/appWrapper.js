import React from  'react';
import {compose} from 'recompose';
import {Footer, Header, Navigation} from '../../';
import {Route, Switch, Redirect} from 'react-router-dom';
import {userIsAuthenticated, userIsNotAuthenticated} from '../../../utils/helpers/authHelpers';
import {Home, Auth, Login} from '../../../pages/';
import ConfirmRegister from '../../confirmRegister/confirmRegister';
import Page404 from '../../page404/page404';

const AppWrapper = () => (
    <div className='wrap wrap_navigation-active'>
        <div className="wrap_navigation">
            <Navigation />
        </div>
        <div className="wrap_content">
            <Header />
            <main className='main'>
                <Switch>
                    <Route path="/home" component={userIsAuthenticated(Home)} />
                    <Route path="/login" component={userIsNotAuthenticated(Login)} />
                    <Route path="/register" component={userIsNotAuthenticated(Auth)} />
                    <Route path="/confirm-register/:token"
                           component={userIsNotAuthenticated(ConfirmRegister)} />
                    <Redirect to='/home' />
                    <Route component={Page404} />
                </Switch>
            </main>
            <Footer/>
        </div>
    </div>
);

const enhance = compose();
export default enhance(AppWrapper);

