import React from 'react';
import {compose} from "recompose";
import {Redirect, Route, Switch} from "react-router-dom";
import {Home, Login, Auth} from "../../../pages";
import Page404 from "../../page404/page404";
import ConfirmRegister from "../../confirmRegister/confirmRegister";

const AppRoutes = ({ userIsLogged = false }) => (
    <>
    {
        userIsLogged ? (
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route component={Page404} />
                </Switch>

            ) : (
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Auth} />
                    <Route path="/confirm-register/:token" component={ConfirmRegister} />
                    <Route component={Page404} />
                </Switch>
            )
    }
    </>
);

const enhance = compose();
export default enhance(AppRoutes);