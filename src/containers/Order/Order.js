import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Order.module.css';
import * as action from '../../store/actions/index';

const Order = props => {
    const userOrder = useSelector(state => state.orders.userOrder);
    const token = useSelector(state => state.auth.token);
    const userId = useSelector(state => state.auth.userId);

    const dispatch = useDispatch();
    
    const fetchOrder = useCallback((token, userId) => dispatch(action.fetchOrderStart(token, userId)), [dispatch])

    useEffect(()=>{
        fetchOrder(token, userId);
    }, [fetchOrder, token, userId])

    let order = <Spinner />

    if (userOrder){
        order = userOrder.map((el) => {
            return (
                <div key={el.id} className={classes.OrderContainer}>
                    <p>ORDER ID: <strong>{el.id}</strong></p>
                    <div>
                        {el.cart.map((el,ind) => ( 
                            <div className={classes.ItemsContainer}key={ind}>
                                <p>Item: {el.name}</p>
                                <p>Price: ${el.price}</p>
                            </div> )
                       )}               
                    </div>
                    <p>Total: <strong>${el.price}</strong></p>
                </div>
            )            
        })
    }
    return (
        <div className={classes.Order}>
            {order}
        </div> );
}

export default Order;