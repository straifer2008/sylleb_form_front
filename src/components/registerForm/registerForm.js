import React from 'react'
import {compose} from 'recompose'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
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

const RegisterForm = ({onSubmit}) => (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >
        {({ isSubmitting }) => (
            <Form className='registerForm'>
                <div className="registerForm_field">
                    <Field type="text" name="username" placeholder='Name' />
                    <ErrorMessage name="username"
                                  render={msg => <div className='registerForm_field__error'>{msg}</div>} />
                </div>
                <div className="registerForm_field">
                    <Field type="email" name="email" placeholder='Email' />
                    <ErrorMessage name="email"
                                  render={msg => <div className='registerForm_field__error'>{msg}</div>} />
                </div>
                <div className="registerForm_field">
                    <Field type="password" name="password" placeholder='password' />
                    <ErrorMessage name="password"
                                  render={msg => <div className='registerForm_field__error'>{msg}</div>} />
                </div>
                <button className='registerForm_submit' type="submit" disabled={isSubmitting}>Submit</button>
            </Form>
        )}
    </Formik>
);

const enhance = compose();
export default enhance(RegisterForm);