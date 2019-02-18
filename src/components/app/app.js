import React from 'react';
import './styles.scss';
import {Provider} from "react-redux";
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from '../../store';
import { Route, Switch } from 'react-router-dom';
import { Home, Auth } from '../../pages'
import { compose } from 'recompose';
import { Header } from "../../containers";

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
                                    <Route exact path="/home" component={Home} />
                                </>
                            ) : <Route path="/" component={Auth} />}
                        </Switch>
                    </React.Fragment>
                </ConnectedRouter>
            </Provider>
        );
    }
}

const enhance = compose();
export default enhance(App);
