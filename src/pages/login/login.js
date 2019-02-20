import React from 'react';
import {compose, withState} from "recompose";
import TextInput from "../../components/textinput/textInput";
import Button from "../../components/button/button";
import connect from "react-redux/es/connect/connect";
import {userAuth} from "../../state/user/operations";
import './styles.scss'

const Login = ({
                   userAuth,
                   setPassword,
                   setEmail,
                   setRemember,
                   email,
                   password,
                   remember,
               }) => (
    <div className={'login'}>
        <h1 className={'Auth_title'}>Login</h1>
        <div className={'Auth_form'}>
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
            <label className="checkbox">
                <input type="checkbox" checked={remember} onChange={ e => setRemember(e.target.checked) }/>
                Remember me
            </label>

            <Button text={'Login'}
                    type={'success'}
                    submit={true}
                    click={() => userAuth({ email, password, remember })}
            />
        </div>
    </div>
);

const mapDispatchToProps = ({
    userAuth
});

const mapStateToProps = (state) => ({

});

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withState('email', 'setEmail', ''),
    withState('password', 'setPassword', ''),
    withState('remember', 'setRemember', ''),
);

export default enhance(Login);