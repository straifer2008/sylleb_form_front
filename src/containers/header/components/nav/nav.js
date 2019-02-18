import React, { Component } from 'react';
import {compose} from "recompose";
import {NavBrand} from "../index";

class Nav extends Component {
    render() {
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <NavBrand/>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">Home</a>
                        <a className="navbar-item">Documentation</a>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a href='#' className="navbar-link">More</a>
                            <div className="navbar-dropdown">
                                <a href='#' className="navbar-item">About</a>
                                <a href='#' className="navbar-item">Jobs</a>
                                <a href='#' className="navbar-item">Contact</a>
                                <hr className="navbar-divider" />
                                <a href='#' className="navbar-item">Report an issue</a>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary">
                                    <strong>Register</strong>
                                </a>
                                <a className="button is-light">
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

const enhance = compose();
export default enhance(Nav);