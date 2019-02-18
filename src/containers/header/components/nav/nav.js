import React, { Component } from 'react';
import {compose} from "recompose";
import {NavBrand, NavBarEnd, NavBarStart} from "../index";

class Nav extends Component {
    render() {
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <NavBrand/>

                <div className="navbar-menu">
                    <NavBarStart/>
                    <NavBarEnd/>
                </div>
            </nav>
        );
    }
}

const enhance = compose();
export default enhance(Nav);