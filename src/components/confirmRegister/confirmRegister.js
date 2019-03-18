import React from 'react';
import Loader from '../loader/loader';
import {compose, lifecycle} from 'recompose'
import {connect} from 'react-redux';
import {confirmEmail} from '../../state/auth/operations';
import PropTypes from 'prop-types';
import './styles.scss'
import {withRouter} from 'react-router-dom';

const ConfirmRegister = ({loading, error, message}) => (
    <div className='confirmRegister'>
        {
            error ?
                <h3 className='confirmRegister_error'>error.message</h3>: null
        }
        {
            loading ?
                <>
                    <h2>We check your token. Please wait</h2> :
                    <Loader/>
                </> : <h2 className='confirmRegister_complete'>{message}</h2>
        }
    </div>
);

ConfirmRegister.propTypes = {
    loading: PropTypes.bool,
    error: PropTypes.any,
    message: PropTypes.string
};

const mapDispatchToProps = ({
    confirmEmail
});

const mapStateToProps = (state) => ({
    loading: state.auth.loading,
    error: state.auth.error,
    confirmed: state.auth.confirmed,
    message: state.auth.message
});

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    lifecycle({
        withRouter,
        componentDidMount() {
            this.props.confirmEmail({token: this.props.match.params.token});
        }
    })
);

export default enhance(ConfirmRegister)