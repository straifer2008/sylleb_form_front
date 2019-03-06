import React from 'react';
import {compose} from 'recompose';
import connect from 'react-redux/es/connect/connect';
import {userAuth, userForgotPassword} from '../../state/user/operations';
import { Loader, LoginForm } from '../../components';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import './styles.scss'

const Login = ({
                   userAuth,
                   userForgotPassword,
                   remember,
                   loading,
               }) => (
    <div className='login'>
        <h1 className='login_title'>Login</h1>
        <div className='login_container'>
            {
                loading ? <Loader/> :
                    <LoginForm onSubmit={ values => userAuth(values) }/>
            }
        </div>
    </div>
);

Login.propTypes = {
    userAuth: PropTypes.func,
    userForgotPassword: PropTypes.func,
    remember: PropTypes.bool,
    loading: PropTypes.bool,
};

const mapDispatchToProps = ({
    userAuth,
    userForgotPassword
});

const mapStateToProps = (state) => ({
    loading: state.authReducer.loading,
    error: state.authReducer.error
});

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
);

export default enhance(Login);
