import React from 'react';
import './styles.scss';
import {connect} from "react-redux";
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import { Home, Auth, Login } from '../../pages'
import {compose, lifecycle} from 'recompose';
import { Header } from "../../containers";
import {ConfirmRegister, Page404} from "../index";
import {checkIsUserAuth} from "../../state/user/operations";

const App = ({userIsLogged, location}) => (
    <React.Fragment>
        <Header/>
        {userIsLogged ? (
            <Switch>
                <Route
                    exact
                    strict
                    path="/:url*"
                    render={() => location.pathname.slice(-1) !== '/' && <Redirect to={`${location.pathname}/`} />}
                />
                <Route path="/home" component={Home} />
                <Route component={Page404} />
                <Redirect from='/' to='/home' />
            </Switch>

            ) : (
                <Switch>
                    <Route
                        exact
                        strict
                        path="/:url*"
                        render={() => location.pathname.slice(-1) !== '/' && <Redirect to={`${location.pathname}/`} />}
                    />
                    <Route path="/register" component={Auth} />
                    <Route path="/login" component={Login} />
                    <Route path="/confirm-register/:token" component={ConfirmRegister} />
                    <Route component={Page404} />
                </Switch>
        )}
    </React.Fragment>
);

const mapStateToProps = (state) => ({
    userIsLogged: state.authReducer.userIsLogged
});

const mapDispatchToProps = ({
    checkIsUserAuth
});

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    lifecycle({
        componentDidMount() {
            this.props.checkIsUserAuth();
        }
    })
);
export default enhance(App);
