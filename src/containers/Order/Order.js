import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Order.module.css';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as action from '../../store/actions/index';

class Order extends Component {
    componentDidMount(){
        this.props.fetchOrder(this.props.token, this.props.userId);
    }

    render(){
        let order = <Spinner />
        if (this.props.userOrder){
            order = this.props.userOrder.map((el) => {
                return (
                    <div key={el.id} className={classes.OrderContainer}>
                        <p>ORDER ID: <strong>{el.id}</strong></p>
                        <div>
                            {el.cart.map((el,ind) =>( 
                                <div className={classes.ItemsContainer}key={ind}>
                                    <p>Item: {el.name}</p>
                                    <p>Price: ${el.price}</p>
                                </div>)
                           )}               
                        </div>
                        <p>Total: <strong>${el.price}</strong></p>
                    </div>
                )            
            })
        }
        return(
            <div className={classes.Order}>
                <h3>MY ORDERS</h3>
                <hr />
                {order}
            </div>);
    }
}

const mapStateToProps = state => {
    return {
        userOrder: state.orders.userOrder,
        loading: state.orders.loading,
        token: state.auth.token,
        userId: state.auth.userId,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchOrder: (token, userId) => dispatch(action.fetchOrderStart(token, userId)),

    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Order);