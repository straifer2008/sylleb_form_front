import React from 'react';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import {Loader} from '../../components';
import PropTypes from 'prop-types';
import './styles.scss';

const Home = ({loading}) => (
  <div className="Home">
      {
          !loading ?
              <h1>Home component load</h1> :
              <Loader/>
      }
  </div>
);

Home.propTypes = {
    loading: PropTypes.bool
};

const mapStateToProps = (state) => ({
    loading: state.authReducer.loading
});

const enhance = compose(
    connect(mapStateToProps)
);
export default enhance(Home);