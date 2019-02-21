import React from 'react';
import {compose, withState} from "recompose";
import TextInput from "../../components/textinput/textInput";
import Button from "../../components/button/button";
import connect from "react-redux/es/connect/connect";
import {userAuth, userForgotPassword} from "../../state/user/operations";
import './styles.scss'
import { Loader } from "../../components";

const Login = ({
                   userAuth,
                   setPassword,
                   setEmail,
                   setRemember,
                   email,
                   password,
                   remember,
                   loading,
                   setIsForgotPassword,
                   isForgotPassword,
                   userForgotPassword,
                   error
               }) => (
    <div className={'login'}>
        <h1 className={'Auth_title'}>{!isForgotPassword ? 'Login' : 'Forgot password'}</h1>
        {
            isForgotPassword ?
                <span className="icon has-text-warning back"
                      onClick={ () => setIsForgotPassword(isForgotPassword = false) }
                >
                    Back
                </span> : null
        }
        {
            !loading ?
                <div className={'Auth_form'}>
                    <TextInput name={'email'}
                               label={'Your email'}
                               placeholder={'Enter your email'}
                               type={'email'}
                               onChange={e => setEmail(e.target.value)}
                               inputValue={email}
                    />
                    {
                        error ? <span className="tag is-danger">{error.message}</span> : null
                    }

                    {
                        !isForgotPassword ?
                        <>
                            <TextInput name={'password'}
                                       label={'Your password'}
                                       placeholder={'Enter your password'}
                                       type={'email'}
                                       onChange={e => setPassword(e.target.value)}
                                       inputValue={password}
                            />
                            <label className="checkbox">
                                <input type="checkbox" checked={remember} onChange={ e => setRemember(e.target.checked) }/>
                                Remember me
                            </label>
                            <Button text={'Login'}
                                    type={'success'}
                                    submit={true}
                                    click={
                                        () => userAuth({ email, password, remember })
                                    }
                            />
                            <div>
                                <p>
                                    If you
                                    <span className='forgotPassword'
                                          onClick={() => setIsForgotPassword(isForgotPassword = true)}> forgot your password </span>
                                    then click on the link
                                </p>
                            </div>
                        </> :
                            <Button text={'Login'}
                                    type={'success'}
                                    submit={true}
                                    click={
                                        () => userForgotPassword({ email })
                                    }
                            />
                    }
                </div> :
                <Loader/>
        }
    </div>
);

const mapDispatchToProps = ({
    userAuth,
    userForgotPassword
});

const mapStateToProps = (state) => ({
    loading: state.authReducer.loading,
    error: state.authReducer.error
});

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withState('email', 'setEmail', ''),
    withState('password', 'setPassword', ''),
    withState('remember', 'setRemember', ''),
    withState('isForgotPassword', 'setIsForgotPassword', false)
);

export default enhance(Login);