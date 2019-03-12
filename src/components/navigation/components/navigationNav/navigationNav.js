import React from 'react';
import {compose, lifecycle} from 'recompose';
import {connect} from 'react-redux';
import {getUserData} from '../../../../state/home/operations';
import {Dropdown} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const NavigationNav = ({user}) => (
	<div className='navigationNav'>
		<div className="navigationNav_user">
			<h2>User information</h2>
			{
				user ?
					<>
						<ul>
							<li>Name: {user.name}</li>
							<li>Created: {user.created}</li>
							<li>Id: {user.id}</li>
						</ul>
						<Dropdown placeholder='User info' search selection options={[
							{key: user.id, text: user.name.toUpperCase(), value: 'Name'},
							{key: user.id + 1, text: user.created, value: 'created'},
						]}/>
					</> : null
			}
		</div>
	</div>
);

NavigationNav.propTypes = {
	getUserData: PropTypes.func,
	user: PropTypes.object
};

const mapDispatchToProps = ({
	getUserData
});

const mapStateToProps = (state) => ({
  user: state.authReducer.user
});

const enhance = compose(
	connect(mapStateToProps, mapDispatchToProps),
	lifecycle({
		componentDidMount() {
			if (this.props.user) {
				this.props.getUserData(this.props.user);
			}
		}
	})
);
export default enhance(NavigationNav);
