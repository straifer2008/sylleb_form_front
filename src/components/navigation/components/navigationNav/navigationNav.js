import React from 'react';
import {compose, lifecycle} from 'recompose';
import {connect} from 'react-redux';
import {getUserData} from '../../../../state/home/operations';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

const NavigationNav = ({userData}) => (
    <div className='navigationNav'>
        <div className="navigationNav_user">
            <h2>User information</h2>
            {
                userData ?
                    <>
                        <ul>
                            <li>Name: {userData.name}</li>
                            <li>Created: {userData.created}</li>
                            <li>Id: {userData.id}</li>
                        </ul>
                        <Dropdown placeholder='User info' search selection options={[
                            { key: userData.id, text: userData.name.toUpperCase(), value: 'Name' },
                            { key: userData.id+1, text: userData.created, value: 'created' },
                        ]} />
                    </> : null
            }
        </div>
    </div>
);

NavigationNav.propTypes = {
    getUserData: PropTypes.func,
    userData: PropTypes.object
};

const mapDispatchToProps = ({
    getUserData
});

const mapStateToProps = (state) => ({
    userData: state.homeReducer.userData
});

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    lifecycle({
        componentDidMount() {
            const token = localStorage.getItem('authToken');
            if (token) {
                this.props.getUserData(token)
            }
        }
    })
);
export default enhance(NavigationNav);
