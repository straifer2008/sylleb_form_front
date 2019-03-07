import React from 'react';
import {compose, lifecycle} from 'recompose';
import * as Yup from 'yup';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {ErrorMessage, Field, Form, Formik} from 'formik';
import './styles.scss';

const validationSchema = Yup.object().shape({
    password: Yup.string()
        .required('Password is required')
        .min(2, 'Too Short!')
        .max(50, 'Too Long!'),
    password_confirmation: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords do not match')
        .required('Password confirm is required')
        .min(2, 'Too Short!')
        .max(50, 'Too Long!'),
    token: Yup.string()
        .required('Required')
});

const initialValues = {
    password: '',
    password_confirmation: '',
    token: ''
};

const ResetPasswordForm = ({notifications, onSubmit}) => (
    <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
    >
        {({ isSubmitting }) => (
            <Form className='resetPasswordForm'>
                {
                    notifications ?
                        <p className='resetPasswordForm_successMessage'>
                            {notifications}
                        </p> : null
                }
                <div className="resetPasswordForm_field">
                    <Field type="password"
                           name="password"
                           placeholder='New password'/>
                    <ErrorMessage
                        name="password"
                        render={
                            msg => <div className='resetPasswordForm_field__error'>
                                {msg}
                            </div>
                        }/>
                </div>
                <div className="resetPasswordForm_field">
                    <Field type="password"
                           name="password_confirmation"
                           placeholder='New password'/>
                    <ErrorMessage
                        name="password_confirmation"
                        render={
                            msg => <div className='resetPasswordForm_field__error'>
                                {msg}
                            </div>
                        }/>
                </div>
                <button className='resetPasswordForm_submit'
                        type="submit"
                        disabled={isSubmitting}>Submit</button>
            </Form>
        )}
    </Formik>
);

ResetPasswordForm.propTypes = {
    notifications: PropTypes.string,
    onSubmit: PropTypes.func
};

const mapStateToProps = (state) => ({
    notifications: state.authReducer.notifications
});
const enhance = compose(
    connect(mapStateToProps),
    withRouter,
    lifecycle({
        componentDidMount() {
            initialValues.token = this.props.match.params.token
        }
    })
);
export default enhance(ResetPasswordForm);
