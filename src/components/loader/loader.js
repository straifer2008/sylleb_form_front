import React from 'react';
import { compose } from "recompose";
import './styles.scss'

const Loader = ({size = 200}) => (
    <div className={'loader'} style={{height: size, width: size}} />
);

const enhance = compose();

export default enhance(Loader)