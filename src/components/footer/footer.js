import React from 'react';
import {compose} from 'recompose';
import './styles.scss';

const Footer = () => (
    <footer className='footer'>
        <hr/>
        Footer
    </footer>
);

const enhance = compose();
export default enhance(Footer);