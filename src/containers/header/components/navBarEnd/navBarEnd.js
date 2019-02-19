import React, { Component } from 'react';
import {compose} from "recompose";
import {Link} from "react-router-dom";

class NavBarEnd extends Component {
    render() {
        return (
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        {
                            localStorage.getItem('authToken') ?
                                <Link to='/login' className="button is-light">Log in</Link>
                                :
                                <>
                                    <Link to='/login' className="button is-light">Log in</Link>
                                    <Link to='/register' className="button is-primary">
                                        <strong>Register</strong>
                                    </Link>
                                </>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

const enhance = compose();
export default enhance(NavBarEnd);