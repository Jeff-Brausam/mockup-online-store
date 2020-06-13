import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as action from './store/actions/index';

import Layout from './hoc/layout/Layout';

class App extends Component {
  componentDidMount(){
    this.props.onTryAutoSignup();
  }

  render(){
    return (
      <div className="App">
        <Layout />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(action.authCheckState())
  }
}


export default connect(null, mapDispatchToProps)(App);
