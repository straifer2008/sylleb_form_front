import React from 'react';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import {Loader, ResetPasswordForm} from '../../components/';
import {userResetPassword} from '../../state/user/operations';
import PropTypes from 'prop-types';
import './styles.scss';

const PasswordReset = ({loading, match, userResetPassword}) => (
    <div className="passwordReset">
        <h1 className='passwordReset_title'>Reset password</h1>
        <div className='passwordReset_container'>
            {
                !loading ?
                    <ResetPasswordForm
                        onSubmit={
                            (values) => userResetPassword(values)
                        } /> : <Loader/>
            }
        </div>
    </div>
);

PasswordReset.propTypes = {
    loading: PropTypes.bool,
    match: PropTypes.object,
    userResetPassword: PropTypes.func
};

const mapStateToProps = (state) => ({
    loading: state.authReducer.loading,
});

const mapDispatchToProps = ({
    userResetPassword
});

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps)
);
export default enhance(PasswordReset);
