import React, { Component } from 'react';
import {compose} from "recompose";
import './styles.scss'

class Button extends Component {
    render() {
        const {
            customClass,
            text,
            type,
            link,
            submit
        } = this.props;
        return (
            <div className={['Button', customClass].join(' ')}>
                {
                    submit ?
                        <button className={['Button_link', type ? `Button_link-${type}` : 'Button_link-blue'].join(' ')}
                                type='submit'>
                            {text}
                        </button> :
                        <a className={['Button_link', type ? `Button_link-${type}` : 'Button_link-blue'].join(' ')}
                           href={`${link} ? ${link} : '#'`}>
                            {text}
                        </a>
                }
            </div>
        );
    }
}

const enhance = compose();
export default enhance(Button);