import React, { Component } from 'react';
import {compose} from "recompose";
import {Link} from "react-router-dom";

class NavBrand extends Component {
    render() {
        return (
            <div className="navbar-brand">
                <Link to='./home' className="navbar-item">
                    <img src="http://www.pngall.com/wp-content/uploads/2016/03/Me-Gusta-Meme-PNG.png"
                         height="50"
                         alt='brand' />
                </Link>
                <p className="navbar-burger burger">
                    <span /><span /><span />
                </p>
            </div>
        );
    }
}

const enhance = compose();
export default enhance(NavBrand);