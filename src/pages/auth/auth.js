import React from "react";
import {Loader, RegisterForm} from "../../components";
import {compose} from "recompose";
import {connect} from "react-redux";
import { userRegistration } from "../../state/user/operations";
import './style.scss'

const Auth = ({
                  userRegistration,
                  loading
}) => (
    <div className="auth">
        <h1 className='auth_title'>Register</h1>
        <div className='auth_container'>
            {
                !loading ? <RegisterForm onSubmit={values => userRegistration(values) }/> : <Loader/>
            }
        </div>
    </div>
);

const mapDispatchToProps = ({
    userRegistration
});

const mapStateToProps = (state) => ({
    loading: state.authReducer.loading
});

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps)
);
export default enhance(Auth);