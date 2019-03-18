import React from 'react';
import {compose} from 'recompose';
import {connect} from 'react-redux';
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
							{key: user.id, text: user.name, value: 'Name'},
							{key: user.id + 1, text: user.created, value: 'created'},
						]}/>
					</> : null
			}
		</div>
	</div>
);

NavigationNav.propTypes = {
	user: PropTypes.object
};

const mapDispatchToProps = ({});

const mapStateToProps = (state) => ({
  user: state.user
});

const enhance = compose(
	connect(mapStateToProps, mapDispatchToProps),
);
export default enhance(NavigationNav);
