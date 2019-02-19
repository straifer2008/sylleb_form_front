import React from 'react';
import {compose, withState} from "recompose";
import TextInput from "../../components/textinput/textInput";
import Button from "../../components/button/button";
import connect from "react-redux/es/connect/connect";
import {userAuth} from "../../state/user/operations";

const Login = ({
                   userAuth,
                   email,
                   setPassword,
                   setEmail,
                   password
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
            <Button text={'Login'}
                    type={'success'}
                    submit={true}
                    click={() => userAuth({email, password })}
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
);

export default enhance(Login);