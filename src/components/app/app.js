import React from 'react';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {compose, lifecycle} from 'recompose';
import {checkIsUserAuth} from "../../state/user/operations";
import { Footer, Header, Navigation } from "../";
import './styles.scss';
import AppRoutes from "./routes/appRoutes";

const App = ({ userIsLogged }) => (
    <div className='wrap wrap_navigation-active'>
        <div className="wrap_navigation">
            {
                userIsLogged ? <Navigation/> : null
            }
        </div>
        <div className="wrap_content">
            <Header />
            <main className='main'>
                <AppRoutes userIsLogged={userIsLogged}/>
            </main>
            <Footer/>
        </div>
    </div>
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
