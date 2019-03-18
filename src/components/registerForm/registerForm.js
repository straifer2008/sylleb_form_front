import React from 'react'
import {compose, withState} from 'recompose'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import EyeIcon from '../../assets/img/eye.svg';
import './styles.scss'

const validationSchema = Yup.object().shape({
    username: Yup
        .string()
        .required('Required')
        .min(2, 'Too Short!')
        .max(50, 'Too Long!'),
    email: Yup
        .string()
        .required('Required')
        .email('Invalid email'),
    password: Yup.string()
        .required('Required')
        .min(2, 'Too Short!')
        .max(50, 'Too Long!'),
});

const initialValues = {
    username: '',
    email: '',
    password: ''
};

const RegisterForm = ({
                          onSubmit,
                          error, message,
                          showPassword, setShowPassword
}) => (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >
        {({ isSubmitting }) => (
            <Form className='registerForm'>
                {
                    message ?
                        <p className='registerForm_successMessage'>
                            {message}
                        </p> : null
                }
                <div className="registerForm_field">
                    <Field type="text" name="username" placeholder='Name' />
                    <ErrorMessage
                        name="username"
                        render={
                            msg => <div className='registerForm_field__error'>
                                {msg}
                            </div>
                        } />
                </div>
                <div className="registerForm_field">
                    <Field
                        type="email"
                        name="email"
                        placeholder='Email' />
                    <ErrorMessage
                        name="email"
                        render={
                            msg => <div className='registerForm_field__error'>
                                {msg}
                            </div>
                        } />
                </div>
                <div className="registerForm_field">
                    <div className='loginForm_field__relative'>
                        <Field
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            placeholder='password' />
                        <img className='loginForm_field__icon'
                             src={EyeIcon}
                             onClick={() => setShowPassword(!showPassword)}
                             alt="eye"/>
                    </div>
                    <ErrorMessage
                        name="password"
                        render={
                            msg => <div className='registerForm_field__error'>
                                {msg}
                            </div>
                        } />
                </div>
                <button className='registerForm_submit'
                        type="submit"
                        disabled={isSubmitting}>Submit</button>
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

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
    error: PropTypes.any,
    message: PropTypes.any,
    showPassword: PropTypes.bool,
    setShowPassword: PropTypes.func
};

const mapStateToProps = (state) => ({
   error: state.auth.error,
   message: state.auth.message
});

const enhance = compose(
    connect(mapStateToProps),
    withState('showPassword', 'setShowPassword', false),
);
export default enhance(RegisterForm);
