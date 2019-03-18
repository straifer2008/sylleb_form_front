import React from 'react';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Logo from '../../assets/img/logo-white.png';
import {history} from '../../store';
import {logOut} from '../../state/auth/operations';
import PropTypes from 'prop-types';
import './styles.scss';

const Header = ({userIsLogged, location, logOut, user}) => (
	<header className='header'>
		{
			userIsLogged ?
				<>
					<h2>
						<p>{user.name}</p>
						<p>{user.email}</p>
					</h2>
					<button
						className='header_register'
						onClick={() => logOut()}
					>Logout
					</button>
				</>
				: <>
					<img className='header_logo' src={Logo} alt="logo"/>
					{
						location.pathname === '/register' ?
							<button
								className='header_register'
								onClick={() => history.push('/login')}
							>Login</button> :
							<button
								className='header_register'
								onClick={() => history.push('/register')}
							>Register</button>
					}
				</>
		}
	</header>
);

Header.propTypes = {
	userIsLogged: PropTypes.bool,
	location: PropTypes.object,
	logOut: PropTypes.func,
	user: PropTypes.object,
};

const mapStateToProps = (state) => ({
	userIsLogged: state.auth.userIsLogged,
  user: state.user
});
const mapDispatchToProps = ({
	logOut
});

const enhance = compose(
	withRouter,
	connect(mapStateToProps, mapDispatchToProps),
);

export default enhance(Header);
