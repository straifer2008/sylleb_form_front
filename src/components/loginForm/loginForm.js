import React from 'react';
import {compose, withState} from 'recompose';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import {connect} from 'react-redux';
import {ForgotPasswordModal} from '../'
import './styles.scss'

const validationSchema = Yup.object().shape({
    email: Yup
        .string()
        .required('Required')
        .email('Invalid email'),
    password: Yup.string()
        .required('Required')
        .min(2, 'Too Short!')
        .max(50, 'Too Long!'),
    remember: Yup.bool()
});

const initialValues = {
    email: '',
    password: '',
    remember: false
};

const LoginForm = ({
                       onSubmit, error,
                       forgotModal, toggleForgotModal,
}) => (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >
        {({ isSubmitting }) => (
            <Form className='loginForm'>
                <div className="loginForm_field">
                    <Field type="email" name="email" placeholder='Email'/>
                    <ErrorMessage
                        name="email"
                        render={
                            msg => <div className='loginForm_field__error'>
                                {msg}
                            </div>
                        }/>
                </div>
                <div className="loginForm_field">
                    <Field type="password"
                           name="password"
                           placeholder='password'/>
                    <ErrorMessage name="password"
                                  render={msg =>
                                      <div className='loginForm_field__error'>
                                          {msg}
                                      </div>
                                  }/>
                </div>
                <div className="loginForm_field">
                    <label className='loginForm_field__label'>
                        <Field type="checkbox"
                               name="remember"
                        />
                        <span className='loginForm_field__label--text'>
                            Remember my
                        </span>
                    </label>
                </div>
                <button className='loginForm_submit'
                        type="submit"
                        disabled={isSubmitting}>Submit</button>
                <div className="loginForm_field">
                    <label className='loginForm_field__label'>
                        <span
                            className='loginForm_field__label--link'
                            onClick={() => toggleForgotModal(true)} >
                            Forgot Password?
                        </span>
                        <ForgotPasswordModal
                            modalIsOpen={forgotModal}
                            closeModal={() => toggleForgotModal(false)}
                            afterOpenModal={() => console.log('test')} />
                    </label>
                </div>
                {
                    error && error.message ?
                        <p className={`error error-${error.type}`}>
                            {error.message}
                        </p> :
                    error && !error.message ?
                        <p>{error}</p> : null
                }
            </Form>
        )}
    </Formik>
);

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
    error: PropTypes.any,
    forgotModal: PropTypes.bool,
    toggleForgotModal: PropTypes.func
};

const mapStateToProps = (state) => ({
    error: state.authReducer.error
});

const enhance = compose(
    connect(mapStateToProps),
    withState('forgotModal', 'toggleForgotModal', false),
    withState('closeModal', 'handleCloseModal', false),
);
export default enhance(LoginForm);
