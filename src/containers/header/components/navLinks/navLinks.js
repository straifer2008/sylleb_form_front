import React, { Component } from 'react';
import {compose} from "recompose";
import {NavBrand} from "../index";

class NavLinks extends Component {
    render() {
        return (
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
        );
    }
}

const enhance = compose();
export default enhance(NavLinks);