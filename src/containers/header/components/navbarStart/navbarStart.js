import React from 'react';
import {compose} from "recompose";
import {Link} from "react-router-dom";


const NavBarStart = () => (
    <div className="navbar-start">
        {
            localStorage.getItem('authToken') ?
                <Link to='/home' className="navbar-item">Home</Link> : null
        }
    </div>
);

const enhance = compose();
export default enhance(NavBarStart)