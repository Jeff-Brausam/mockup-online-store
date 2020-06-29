import React, { Component } from 'react';

import classes from './MyOrder.module.css';
import axios from 'axios';
import Spinner from '../UI/Spinner/Spinner';

class myOrder extends Component {
    state = {
        myOrder: null,

    }

    componentDidMount(){
        axios.get('https://mockup-online-store.firebaseio.com/orders.json')
        .then(response => {
            console.log(response.data)

        })
        .catch(error => {
            this.setState({loading: false});
        });
    }

    render(){
        let order = <Spinner />


        return(
            <div className={classes.MyOrder}>
                <h1>MY ORDER</h1>
                {order}
            </div>);
    }


}

export default myOrder;