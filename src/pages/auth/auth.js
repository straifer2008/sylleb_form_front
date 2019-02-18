import React, { Component } from "react";
import {TextInput} from "../../components";
import Button from "../../components/button/button";
import './style.scss'
import {compose} from "recompose";

class Auth extends Component {
    render() {
        return (
            <div className="Home">
                <h1 className={'Home_title'}>Login</h1>
                <form className={'Home_form'}>
                    <TextInput name={'username'}
                               label={'Your name'}
                               placeholder={'Enter your name'}
                    />
                    <TextInput name={'email'}
                               label={'Your email'}
                               placeholder={'Enter your email'}
                               type={'email'}
                    />
                    <Button text={'Login'}
                            type={'success'}
                            submit={true}
                    />
                </form>
            </div>
        );
    }
}

const enhance = compose();
export default enhance(Auth);