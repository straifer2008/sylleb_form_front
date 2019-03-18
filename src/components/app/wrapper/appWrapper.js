import React from 'react';
import {compose} from 'recompose';
import AppRoutes from '../routes/appRoutes';
import {Footer, Header, Navigation} from '../../';
import {withRouter} from 'react-router';
import PerfectScrollbar from 'react-perfect-scrollbar'

const AppWrapper = () => (
	<div className='wrap wrap_navigation-active'>
		<div className="wrap_navigation">
			<Navigation/>
		</div>
		<div className="wrap_content">
			<Header/>
			<PerfectScrollbar>
				<main className='main'>
					<AppRoutes/>
				</main>
			</PerfectScrollbar>
			<Footer/>
		</div>
	</div>
);

const enhance = compose(
	withRouter
);
export default enhance(AppWrapper);

