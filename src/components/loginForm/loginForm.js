import React from 'react';
import {compose, withState} from 'recompose';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import {connect} from 'react-redux';
import {ForgotPasswordModal} from '../'
import EyeIcon from '../../assets/img/eye.svg';
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
                       forgotModal, setForgotModal,
                       forgotPassword, notifications,
                       showPassword, setShowPassword
}) => (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >
        {({ isSubmitting }) => (
            <Form className='loginForm'>
                {
                    notifications ?
                        <p className='loginForm_successMessage'>
                            {notifications}
                        </p> : null
                }
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
                    <div className='loginForm_field__relative'>
                        <Field type={showPassword ? 'text':'password'}
                               name="password"
                               placeholder='password'/>
                        <img className='loginForm_field__icon'
                             src={EyeIcon}
                             onClick={() => setShowPassword(!showPassword)}
                             alt="eye"/>
                    </div>
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
                            onClick={() => setForgotModal(true)} >
                            Forgot Password?
                        </span>
                        <ForgotPasswordModal
                            forgotPassword={forgotPassword}
                            modalIsOpen={forgotModal}
                            closeModal={() => setForgotModal(false)}
                            afterOpenModal={() => console.log('Forgot modal is open')} />
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
    error: PropTypes.any,
    onSubmit: PropTypes.func,
    notifications: PropTypes.string,
    forgotModal: PropTypes.bool,
    setForgotModal: PropTypes.func,
    forgotPassword: PropTypes.func
};

const mapStateToProps = (state) => ({
    error: state.authReducer.error,
    notifications: state.authReducer.notifications
});

const enhance = compose(
    connect(mapStateToProps),
    withState('forgotModal', 'setForgotModal', false),
    withState('showPassword', 'setShowPassword', false),
);
export default enhance(LoginForm);
