import React from 'react';
import {compose} from "recompose";
import {Link} from "react-router-dom";


const NavBarStart = () => (
    <div className="navbar-start">
        <Link to='/' className="navbar-item">Home</Link>
    </div>
);

const enhance = compose();
export default enhance(NavBarStart)