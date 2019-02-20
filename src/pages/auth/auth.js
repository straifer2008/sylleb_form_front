import React from "react";
import {TextInput, Loader} from "../../components";
import Button from "../../components/button/button";
import './style.scss'
import {compose, withState} from "recompose";
import {connect} from "react-redux";
import { userRegistration } from "../../state/user/operations";

const Auth = ({
                  userRegistration,
                  username,
                  email,
                  setUsername,
                  setPassword,
                  setEmail,
                  password,
                  loading
}) => (
    <div className="Auth">
        <h1 className={'Auth_title'}>Register</h1>
        {
            !loading ?
                <div className={'Auth_form'}>
                    <TextInput name={'username'}
                               label={'Your name'}
                               placeholder={'Enter your name'}
                               onChange={e => setUsername(e.target.value)}
                               inputValue={username}
                    />
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
                    <Button text={'Register'}
                            type={'success'}
                            submit={true}
                            click={() => userRegistration({username, email, password })}
                    />
                </div> :
                <Loader/>
        }
    </div>
);

const mapDispatchToProps = ({
    userRegistration
});

const mapStateToProps = (state) => ({
    loading: state.authReducer.loading
});

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withState('username', 'setUsername', ''),
    withState('email', 'setEmail', ''),
    withState('password', 'setPassword', ''),
);
export default enhance(Auth);