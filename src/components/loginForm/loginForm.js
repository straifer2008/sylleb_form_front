import React from 'react';
import {compose} from 'recompose';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
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
});

const initialValues = {
    email: '',
    password: ''
};

const LoginForm = ({onSubmit}) => (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >
        {({ isSubmitting }) => (
            <Form className='loginForm'>
                <div className="loginForm_field">
                    <Field type="email" name="email" placeholder='Email' />
                    <ErrorMessage name="email"
                                  render={msg => <div className='loginForm_field__error'>{msg}</div>} />
                </div>
                <div className="loginForm_field">
                    <Field type="password" name="password" placeholder='password' />
                    <ErrorMessage name="password"
                                  render={msg => <div className='loginForm_field__error'>{msg}</div>} />
                </div>
                <button className='loginForm_submit' type="submit" disabled={isSubmitting}>Submit</button>
            </Form>
        )}
    </Formik>
);

const enhance = compose();
export default enhance(LoginForm);