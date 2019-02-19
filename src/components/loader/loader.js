import React from 'react';
import {compose, lifecycle} from "recompose";
import './styles.scss'
import { withRouter } from 'react-router';

const Loader = ({size = 200, match}) => (
    <div className={'loader'} style={{height: size, width: size}}>
        <input type="hidden" value={match.params.token}/>
    </div>
);

const enhance = compose(

    lifecycle({
        withRouter,
    })
);

export default enhance(Loader)