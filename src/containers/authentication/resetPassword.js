import React from 'react';
import {compose, withState} from 'recompose';
import { connect } from "react-redux";
import { Loader, TextInput, Button } from "../../components";
import './styles.scss'
import {userResetPassword} from "../../state/user/operations";
import {withRouter} from "react-router-dom";

const ResetPassword = ({
                           loading,
                           email,
                           setEmail,
                           password,
                           setPassword,
                           password_confirmation,
                           setConfirmPassword,
                           userResetPassword,
                           error,
                           match
}) => (
    <div className='ResetPassword'>
        <h1 className='ResetPassword_title'>ResetPassword</h1>
        {
            error ? <span className={`tag is-danger`}>{ error.message }</span> : null
        }
        {
            loading ? <Loader/> :
                <form className='ResetPassword_form'>
                    <TextInput name={'email'}
                               label={'Your email'}
                               placeholder={'Enter your email'}
                               type={'email'}
                               onChange={e => setEmail(e.target.value)}
                               inputValue={email}
                    />
                    <TextInput name={'password'}
                               label={'Your password'}
                               placeholder={'Enter your password'}
                               type={'email'}
                               onChange={e => setPassword(e.target.value)}
                               inputValue={password}
                    />
                    <TextInput name={'confirmPassword'}
                               label={'Confirm your password'}
                               placeholder={'Confirm your password'}
                               type={'email'}
                               onChange={e => setConfirmPassword(e.target.value)}
                               inputValue={password_confirmation}
                    />
                    <Button text={'Reset password'}
                            type={'success'}
                            submit={true}
                            click={ () => userResetPassword({email, password, password_confirmation, token: match.params.token}) }
                    />
                </form>
        }
    </div>
);

const mapStateToProps = (state) => ({
    loading: state.authReducer.loading,
    error: state.authReducer.error
});

const mapDispatchToProps = ({
    userResetPassword
});

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withState('email', 'setEmail', ''),
    withState('password', 'setPassword', ''),
    withState('password_confirmation', 'setConfirmPassword', ''),
);

export default enhance(ResetPassword);