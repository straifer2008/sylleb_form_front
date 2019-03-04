import React from 'react';
import {compose} from "recompose";
import connect from "react-redux/es/connect/connect";
import {userAuth, userForgotPassword} from "../../state/user/operations";
import { Loader, LoginForm } from "../../components";
import './styles.scss'

const Login = ({
                   userAuth,
                   remember,
                   loading,
               }) => (
    <div className='login'>
        <h1 className='login_title'>Login</h1>
        <div className='login_container'>
            {
                !loading ? <LoginForm onSubmit={ values => userAuth(values) }/> : <Loader/>
            }
        </div>
    </div>
);

const mapDispatchToProps = ({
    userAuth,
    userForgotPassword
});

const mapStateToProps = (state) => ({
    loading: state.authReducer.loading,
    error: state.authReducer.error
});

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(Login);