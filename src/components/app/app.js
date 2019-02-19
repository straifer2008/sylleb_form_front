import React from 'react';
import './styles.scss';
import {Provider} from "react-redux";
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from '../../store';
import { Route, Switch } from 'react-router-dom';
import { Home, Auth, Login } from '../../pages'
import { compose } from 'recompose';
import { Header } from "../../containers";
import {Loader} from "../index";

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <React.Fragment>
                        <Header/>
                        <Switch>
                            { localStorage.getItem('authToken') ? (
                                <>
                                    <Route path="/register" component={Auth} />
                                </>
                            ) :
                                <>
                                    <Route path="/register" component={Auth} />
                                    <Route path="/login" component={Login} />
                                    <Route exact path="/" component={Home} />
                                    <Route exact path="/confirm-register/:token" component={Loader} />
                                </>
                            }
                        </Switch>
                    </React.Fragment>
                </ConnectedRouter>
            </Provider>
        );
    }
}

const enhance = compose();
export default enhance(App);
