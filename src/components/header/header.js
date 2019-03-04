import React from 'react';
import {compose} from 'recompose';
import {connect} from "react-redux";
import Logo from '../../assets/img/logo-white.png'
import './styles.scss';
import {history} from "../../store";
import {withRouter} from "react-router-dom";

const Header = ({userIsLogged, location}) => (
    <header className='header'>
        {
            userIsLogged ? <h2>User name</h2> : <img className='header_logo' src={Logo} alt="logo"/>

        }

        {
            location.pathname === '/register' ?
                <button
                    className='header_register'
                    onClick={ () => history.push('/login') }
                >Login</button> :
                <button
                    className='header_register'
                    onClick={ () => history.push('/register') }
                >Register</button>
        }
    </header>
);

const mapStateToProps = (state) => ({
    userIsLogged: state.authReducer.userIsLogged
});

const enhance = compose(
    connect(mapStateToProps),
    withRouter
);

export default enhance(Header);