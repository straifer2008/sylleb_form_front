import React from 'react';
import {compose} from 'recompose';
import './styles.scss';

const Navigation = () => (
    <nav>
        navigation
    </nav>
);

const enhance = compose();
export default enhance(Navigation);