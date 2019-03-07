import React from 'react';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import Logo from '../../../../assets/img/logo.png';

const NavigationHeader = () => (
    <div className='navigationHeader'>
        <div className="navigationHeader_logo">
            <img src={Logo} alt="logo"/>
        </div>
    </div>
);

const enhance = compose(
    connect()
);
export default enhance(NavigationHeader);
