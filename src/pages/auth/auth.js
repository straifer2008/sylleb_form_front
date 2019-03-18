import React from 'react';
import {Loader, RegisterForm} from '../../components';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { userRegistration } from '../../state/auth/operations';
import {withRouter} from 'react-router-dom';
import './style.scss'

const Auth = ({
                  userRegistration,
                  loading
}) => (
    <div className="auth">
        <h1 className='auth_title'>Register</h1>
        <div className='auth_container'>
            {
                !loading ? <RegisterForm
                    onSubmit={values => userRegistration(values) }/> : <Loader/>
            }
        </div>
    </div>
);

Auth.propTypes = {
    userRegistration: PropTypes.func,
    loading: PropTypes.bool
};

const mapDispatchToProps = ({
    userRegistration
});

const mapStateToProps = (state) => ({
    loading: state.auth.loading
});

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter
);
export default enhance(Auth);
