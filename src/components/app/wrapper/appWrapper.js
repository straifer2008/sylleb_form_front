import React from  'react';
import {compose} from 'recompose';
import {Footer, Header, Navigation} from '../../';
import AppRoutes from '../routes/appRoutes';

const AppWrapper = () => (
    <div className='wrap wrap_navigation-active'>
        <div className="wrap_navigation">
            <Navigation />
        </div>
        <div className="wrap_content">
            <Header />
            <main className='main'>
                <AppRoutes />
            </main>
            <Footer/>
        </div>
    </div>
);

const enhance = compose();
export default enhance(AppWrapper);

