import React from "react";
import {compose} from "recompose";
import './styles.scss';

const Home = () => (
  <div className="Home">
      <h1>Home component load</h1>
  </div>
);

const enhance = compose();
export default enhance(Home);