import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


import * as action from '../../../store/actions/index';


class Logout extends Component {
    componentDidMount() {
        // Log the user out, clear everything
        this.props.onLogout();
        // Reset the store, nothing in cart if you log out, fresh slate
        this.props.initStoreInventory();
    }

    render(){
        return <Redirect to="/"/>;
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(action.logout()),
        initStoreInventory: () => dispatch(action.fetchStoreInventory()),
    }
}

export default connect(null, mapDispatchToProps)(Logout);
