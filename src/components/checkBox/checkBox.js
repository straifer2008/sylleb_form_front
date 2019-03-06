import React from 'react';
import {compose} from 'recompose';
import PropTypes from 'prop-types';
import './styles.scss';

const CheckBox = ({field, form, label, onChange}) => (
    <div className='checkBox'>
        <label className='checkBox_label'>
            <input
                className='checkBox_label__input'
                type="checkbox"
                name={field.name}
                checked={field.value}
                onChange={onChange}
            />
            <span className='checkBox_label__text'>{label}</span>
        </label>
        {
            form.touched[field.name] &&
            form.errors[field.name] &&
            <div className="error">{form.errors[field.name]}</div>
        }
    </div>
);

CheckBox.propTypes = {
    field: PropTypes.object,
    form: PropTypes.object,
    label: PropTypes.string,
    onChange: PropTypes.func
};

const enhance = compose();
export default enhance(CheckBox);

