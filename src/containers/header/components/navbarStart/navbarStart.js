import React, { Component } from 'react';
import {compose} from "recompose";
import {Link} from "react-router-dom";


class NavBarStart extends Component {
    render() {
        return (
            <div className="navbar-start">
                <Link to='/authInfo' className="navbar-item">auth info</Link>
                <div className="navbar-item has-dropdown is-hoverable">
                    <span className="navbar-link">More</span>
                    <div className="navbar-dropdown">
                        <Link to="/auth" className="navbar-item">auth</Link>
                        <hr className="navbar-divider" />
                        <span className="navbar-item">Report an issue</span>
                    </div>
                </div>
            </div>
        );
    }
}

const enhance = compose();
export default enhance(NavBarStart)