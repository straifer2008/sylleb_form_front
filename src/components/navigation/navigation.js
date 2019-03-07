import React from 'react';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {NavigationHeader, NavigationNav} from './components';
import './styles.scss';

const Navigation = ({userIsLogged}) => (
    <>
        {
            userIsLogged ?
                <div className='navigation'>
                    <NavigationHeader/>
                    <NavigationNav/>
                </div> : null
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
