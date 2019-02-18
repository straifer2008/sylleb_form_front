import React, { Component } from 'react'
import './styles.scss'
import {compose} from "recompose";

class TextInput extends Component {
    render() {
        const { label, name, placeholder, type, customClass } = this.props;
        return (
            <div className={`TextInput${customClass?' '+customClass : ''}`}>
                <input type={type?type:'text'}
                       autoComplete='false'
                       className={'TextInput_input'}
                       placeholder={placeholder}
                       name={ name }/>
                <label className={'TextInput_label'}>{ label }</label>
            </div>
        );
    }
}

const enhance = compose();
export default enhance(TextInput);