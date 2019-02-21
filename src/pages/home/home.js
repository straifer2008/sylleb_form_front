import React from "react";
import {compose} from "recompose";
import './styles.scss';
import {connect} from "react-redux";
import {Loader} from "../../components";

const Home = ({loading}) => (
  <div className="Home">
      {
          !loading ?
              <h1>Home component load</h1> :
              <Loader/>
      }
  </div>
);

const mapStateToProps = (state) => ({
    loading: state.authReducer.loading
});

const enhance = compose(
    connect(mapStateToProps)
);
export default enhance(Home);