import React from 'react';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import * as Yup from 'yup';
import {Loader} from '../../';
import './styles.scss';

const initialValues = {
    email: ''
};
const validationSchema = Yup.object().shape({
    email: Yup
        .string()
        .required('Required')
        .email('Invalid email'),
});

const ForgotPasswordForm = ({closeModal, forgotPassword, loading}) => (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={forgotPassword}
    >
        {
            loading ? <Loader/> :
                ({ isSubmitting }) => (
                    <Form className='forgotPasswordForm'>
                        <h3 className='forgotPasswordForm_title'>Forgot password</h3>
                        <div className="forgotPasswordForm_field">
                            <Field type="email" name="email" placeholder='Email'/>
                            <ErrorMessage
                                name="email"
                                render={
                                    msg => <div className='forgotPasswordForm_field__error'>
                                        {msg}
                                    </div>
                                }/>
                        </div>
                        <button className='forgotPasswordForm_submit'
                                type="submit"
                                disabled={isSubmitting}>Submit
                        </button>
                    </Form>
                )
        }
    </Formik>
);

ForgotPasswordForm.propTypes = {
    forgotPassword: PropTypes.func,
    isSubmitting: PropTypes.bool,
    loading: PropTypes.bool,
    closeModal: PropTypes.any
};

const mapStateToProps = (state) => ({
    loading: state.authReducer.loading
});

const mapDispatchToProps = ({});

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps)
);
export default enhance(ForgotPasswordForm);
