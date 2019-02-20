import React from 'react';
import Loader from "../loader/loader";
import {compose, lifecycle} from 'recompose'
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {confirmEmail} from "../../state/user/operations";
import './styles.scss'

const ConfirmRegister = ({loading, error}) => (
    <>
        <h1 className={'title'}>{!error ? 'We check your token. Please wait' : error.message}</h1>
        {
            loading ?
                <Loader/> :
                null
        }
    </>
);

const mapDispatchToProps = ({
    confirmEmail
});

const mapStateToProps = (state) => ({
    loading: state.authReducer.loading,
    error: state.authReducer.error,
    confirmed: state.authReducer.confirmed
});

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle({
        withRouter,
        componentDidMount() {
            this.props.confirmEmail({token: this.props.match.params.token});
        }
    })
);

export default enhance(ConfirmRegister)