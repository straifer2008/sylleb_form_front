import React from 'react';
import { compose } from "recompose";
import './styles.scss'

const Loader = () => (
    <>
        <h4>Loading...</h4>
        <div className="lds-ellipsis">
            <div />
            <div />
            <div />
            <div />
        </div>
        <h4>...Please wait</h4>
    </>
);

const enhance = compose();

export default enhance(Loader)