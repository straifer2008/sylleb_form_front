import React from 'react';
import {compose} from "recompose";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {logOut} from "../../../../state/user/operations";

const NavBarEnd = ({userIsLogged, logOut}) => (
    <div className="navbar-end">
        <div className="navbar-item">
            <div className="buttons">
                {
                    userIsLogged ?
                        <span onClick={ () => logOut() } className="button is-light">Log out</span>
                        :
                        <>
                            <Link to='/login' className="button is-light"><strong>Log in</strong></Link>
                            <Link to='/register' className="button is-primary"><strong>Register</strong></Link>
                        </>
                }
            </div>
        </div>
    </div>
);

const mapStateToProps = (state) => ({
    userIsLogged: state.authReducer.userIsLogged
});

const mapDispatchToProps = ({
    logOut
});
const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps)
);
export default enhance(NavBarEnd);