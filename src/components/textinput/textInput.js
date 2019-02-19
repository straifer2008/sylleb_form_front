import React from 'react'
import './styles.scss'
import {compose} from "recompose";

const TextInput = ({ label, name, placeholder, type, customClass, inputValue, onChange }) => (
    <div className={`TextInput${customClass?' '+customClass : ''}`}>
        <input type={ type ? type : 'text' }
               autoComplete='false'
               className={'TextInput_input'}
               onChange={onChange}
               placeholder={ placeholder }
               name={ name }
               value={ inputValue }
        />
        <label className={'TextInput_label'}>{ label }</label>
    </div>
);

const enhance = compose();
export default enhance(TextInput);