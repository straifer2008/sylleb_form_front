import React from 'react';
import {compose} from "recompose";
import {Link} from "react-router-dom";

const NavBrand = ({click}) => (
    <div className="navbar-brand">
        {
            localStorage.getItem('authToken') ?
                <Link to='/home' className="navbar-item">
                    <img src="http://www.pngall.com/wp-content/uploads/2016/03/Me-Gusta-Meme-PNG.png"
                         height="50"
                         alt='brand' />
                </Link> :
                <div className="navbar-item">
                    <img src="http://www.pngall.com/wp-content/uploads/2016/03/Me-Gusta-Meme-PNG.png"
                         height="50"
                         alt='brand' />
                </div>
        }
        <p className="navbar-burger burger" onClick={click}>
            <span /><span /><span />
        </p>
    </div>
);

const enhance = compose();
export default enhance(NavBrand);