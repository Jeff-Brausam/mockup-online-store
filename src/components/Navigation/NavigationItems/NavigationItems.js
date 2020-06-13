import React, { Component } from 'react';
import classes from './NavigationItems.module.css';
import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';

class navigationItems extends Component {


    render () {
        let notification = null 
        if (this.props.cart.length >= 1) {
        notification = <span className={classes.Notification}><p className={classes.NotificationNumber}>{this.props.cart.length}</p></span>
        }

        // console.log(this.props.isAuthenticated)
    return (
        
        <ul className={classes.NavigationItems}>
            <li>
                <NavLink to="/" activeClassName={classes.active} exact>Store</NavLink>
            </li> 
            {this.props.isAuthenticated ? 
                <li><NavLink to="/orders" activeClassName={classes.active} exact>Orders</NavLink></li> : null}                    
            <li>
                <span>{notification}</span>
                <NavLink to="/checkout" activeClassName={classes.active} exact>Cart</NavLink>
            </li>
            {!this.props.isAuthenticated 
                    ? <li><NavLink to="/signup" activeClassName={classes.active} exact>SignUp</NavLink></li>
                    : <li><NavLink to="/logout" activeClassName={classes.active}>Logout</NavLink></li>
            }
        </ul>
        );

        }
} 



const mapStateToProps = state => {
        return {
            cart: state.onlineStore.cart,
            isAuthenticated: state.auth.token !== null,

        }
}


export default connect(mapStateToProps)(navigationItems);