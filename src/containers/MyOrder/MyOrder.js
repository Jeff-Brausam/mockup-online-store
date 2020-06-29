import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './MyOrder.module.css';
// import axios from 'axios';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as action from '../../store/actions/index';

class myOrder extends Component {
    componentDidMount(){
        this.props.fetchOrder(this.props.token, this.props.userId);
    }

    render(){

        let order = <Spinner />
        if (this.props.userOrder){
            order = this.props.userOrder.map((el) => {
                return (
                    <div key={el.id}>
                        <p>ORDER ID: <strong>{el.id}</strong></p>
                        {el.cart.map((el,ind) => <p key={ind}>Item: {el.name} Price: ${el.price}</p>)}
                        <p>Total: <strong>${el.price}</strong></p>
                    </div>
                )            
            })
        }
        return(
            <div className={classes.MyOrder}>
                <h3>MY ORDERS</h3>
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



export default connect(mapStateToProps, mapDispatchToProps)(myOrder);