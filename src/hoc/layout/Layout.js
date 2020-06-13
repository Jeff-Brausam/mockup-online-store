import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import asyncComponent from '../asyncComponent/asyncComponent';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Banner from '../../components/UI/Banner/Banner';
import Store from '../../containers/Store/Store';
import Logout from '../../containers/Auth/Logout/Logout';
import Footer from '../../components/UI/Footer/Footer';

const asyncCheckout = asyncComponent(() => {
    return import('../../containers/Checkout/Checkout');
});
const asyncOrders = asyncComponent(() => {
    return import('../../containers/Order/Order');
});
const asyncAuth = asyncComponent(() => {
    return import('../../containers/Auth/Auth');
});

class layout extends Component {
    state = {
        showSideDrawer: false,
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerOpenHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render(){
        return(
            <div>
                <Toolbar show={this.state.showSideDrawer} 
                closed={this.sideDrawerClosedHandler} 
                drawerToggleClicked={this.sideDrawerOpenHandler}/>
                <Banner />
                <Switch>
                    <Route path="/checkout" component={asyncCheckout} />
                    <Route path="/orders" component={asyncOrders} />
                    <Route path="/signup" component={asyncAuth} />
                    <Route path="/Logout" component={Logout} />
                    <Route path="/" exact component={Store}/> 
                </Switch>
                <Footer />
            </div>);
    }

}
export default layout;