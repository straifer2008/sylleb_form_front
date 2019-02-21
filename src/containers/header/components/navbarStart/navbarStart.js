import React from 'react';
import {compose} from "recompose";
import {Link} from "react-router-dom";
import {connect} from "react-redux";


const NavBarStart = ({userIsLogged}) => (
    <div className="navbar-start">
        {
            userIsLogged ?
                <Link to='/home' className="navbar-item">Home</Link> : null
        }
    </div>
);

const mapStateToProps = (state) => ({
    userIsLogged: state.authReducer.userIsLogged
});

const enhance = compose(
    connect(mapStateToProps)
);
export default enhance(NavBarStart)