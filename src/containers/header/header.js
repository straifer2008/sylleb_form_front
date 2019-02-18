import React, { Component } from 'react';
import {compose} from "recompose";
import './style.scss'
import Nav from "./components/nav/nav";

class Header extends Component {
    render() {
        return (
            <header className="header">
                <Nav/>
            </header>
        );
    }
}

const enhance = compose();
export default enhance(Header);