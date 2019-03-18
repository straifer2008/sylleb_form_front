import React from 'react';
import {compose} from 'recompose';
import connect from 'react-redux/es/connect/connect';
import {userAuth, userForgotPassword} from '../../state/auth/operations';
import {Loader, LoginForm} from '../../components';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import './styles.scss'

const Login = ({
	               userAuth,
	               userForgotPassword,
	               loading,
               }) => (
	<div className='login'>
		<h1 className='login_title'>Login</h1>
		<div className='login_container'>
			{
				loading ? <Loader/> :
					<LoginForm
						onSubmit={values => userAuth(values)}
						forgotPassword={values => userForgotPassword(values)}
					/>
			}
		</div>
	</div>
);

Login.propTypes = {
	userAuth: PropTypes.func,
	userForgotPassword: PropTypes.func,
	loading: PropTypes.bool,
};

const mapDispatchToProps = ({
	userAuth,
	userForgotPassword
});

const mapStateToProps = (state) => ({
	loading: state.auth.loading,
	error: state.auth.error
});

const enhance = compose(
	connect(mapStateToProps, mapDispatchToProps),
	withRouter
);

export default enhance(Login);
