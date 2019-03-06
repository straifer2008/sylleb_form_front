import React from 'react';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './styles.scss';

const Navigation = ({userIsLogged}) => (
    <>
        {
            userIsLogged ?
                <nav>
                    navigation
                </nav> : null
        }
    </>
);

Navigation.propTypes = {
    userIsLogged: PropTypes.bool
};

const mapStateToProps = (state) => ({
    userIsLogged: state.authReducer.userIsLogged
});

const enhance = compose(
    connect(mapStateToProps)
);
export default enhance(Navigation);
