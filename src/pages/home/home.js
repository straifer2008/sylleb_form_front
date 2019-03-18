import React from 'react';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import {Loader, AdminTable, CerfaForm} from '../../components';
import PropTypes from 'prop-types';
import Permissions from 'react-redux-permissions';
import {roles} from '../../constants/roles';
import './styles.scss';

const Home = ({loading}) => (
	<div className="Home">
		{
			!loading ?
				<>
					<Permissions allowed={roles.user}>
						<CerfaForm />
					</Permissions>
					<Permissions allowed={roles.admin}>
						<AdminTable/>
					</Permissions>
				</> :
				<Loader/>
		}
	</div>
);

Home.propTypes = {
	loading: PropTypes.bool
};

const mapStateToProps = (state) => ({
	loading: state.auth.loading
});

const enhance = compose(
	connect(mapStateToProps),
);
export default enhance(Home);
