import React from 'react';

import { connect } from 'react-redux';

import { dispatch } from '../store';

const Home = props => {
  return <h2 onClick={() => dispatch.count.increment(1) }>{props.count}</h2>;
};

const mapState = state => ({
  ...state,
});

export default connect(mapState)(Home);
