import React from 'react';
import {compose, withState} from "recompose";
import {NavBrand, NavBarEnd, NavBarStart} from "../index";

const Nav = ({
                 showMobileMenu,
                 toggleBurgerMenu
             }) => (
    <nav className="navbar" role="navigation" aria-label="main navigation">
        <NavBrand click={ () => toggleBurgerMenu(showMobileMenu = !showMobileMenu) }/>

        <div className={!showMobileMenu ? "navbar-menu" : 'navbar-menu-open'}>
            <NavBarStart/>
            <NavBarEnd/>
        </div>
    </nav>
);

const enhance = compose(
    withState('showMobileMenu', 'toggleBurgerMenu', false)
);
export default enhance(Nav);