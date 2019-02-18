import React, { Component } from 'react';
import {compose} from "recompose";

class NavBrand extends Component {
    render() {
        return (
            <div className="navbar-brand">
                <a className="navbar-item">
                    <img src="http://www.pngall.com/wp-content/uploads/2016/03/Me-Gusta-Meme-PNG.png"
                         height="50"
                         alt='brand' />
                </a>
                <a className="navbar-burger burger">
                    <span /><span /><span />
                </a>
            </div>
        );
    }
}

const enhance = compose();
export default enhance(NavBrand);