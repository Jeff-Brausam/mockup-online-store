import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as action from '../../store/actions/index';

import ContactForm from './ContactForm/ContactForm';
import UserCart from '../../components/UserCart/UserCart';
import Button from '../../components/UI/Button/Button';
import classes from './Checkout.module.css';

class Checkout extends Component {
    cancelOrder = () => {
        this.props.history.goBack();
    }

    continueWithOrder = () => {
        this.props.history.replace('/checkout/contact-form')
    }

    proceedToSignUp = () => {   
        this.props.history.push('/signup');
    }
    
    render(){
        let quantity = this.props.cart.reduce((curCart, quantity) => {
            if (quantity.name in curCart) {
                curCart[quantity.name]++  
            }
            else {
                curCart[quantity.name] = 1
            }
            return curCart;
        },[]);

        // The reduce is here to make the item only appear once in the render
        let orders = this.props.cart.reduce((acc, item)=>{
            // If the item has not appeared already
            if (!acc.includes(item)){
                // Add to array
                acc.push(item);
                // Sort to make it in alphabetical order  
                acc.sort((a,b) => a.name.localeCompare(b.name));
            } 
            return acc;
        }, []).map((el, ind) => {
                return <UserCart 
                name={el.name} 
                key={ind} 
                index={this.props.storeInv.findIndex(p => {return p.itemID === el.itemID})}
                price={el.price}
                img={el.imgURL}
                id={el.itemID} 
                inStock={this.props.stockedStatus}
                removeAllofItem={this.props.removeAllOfThisItem}
                quantity={quantity[el.name]} 
                tempRemove={this.props.removeItemFromCart} 
                tempAdd={this.props.addItemToCart} />
        })
        // No items = Empty Cart
        let userOrder = <p>Cart Empty</p>
        // Items in the cart, display orders
        if (this.props.cart.length >= 1) {
            userOrder = (
                <>
                    {orders}   
                    <p className={classes.Total}>Your Total: <strong>${this.props.totalPrice}</strong></p>  
                    {this.props.isAuthenticated 
                        ?   <span>
                            <Button 
                                btnType="Cancel"
                                clicked={this.cancelOrder}>CANCEL</Button>
                            <Button 
                                btnType="Continue"
                                clicked={this.continueWithOrder}>CONTINUE</Button>
                            </span>
                        : <Button clicked={this.proceedToSignUp}>Sign up to continue</Button>

                    }
                </>
            )
        }
        return (
            <section className={classes.Checkout}> 
                <h3>YOUR CART</h3>
                <hr />
                {userOrder}
                <Route path={this.props.match.path + "/contact-form"}
                    render={(props)=>(
                        <ContactForm 
                            price={this.props.totalPrice} {...props}/>)}/>                
            </section>
            )
    }
}

const mapStateToProps = state => {
    return {
        storeInv: state.onlineStore.storeInventory,
        cart: state.onlineStore.cart,
        totalPrice: state.onlineStore.totalPrice,
        invStatus: state.onlineStore.itemInvCount,
        stockedStatus: state.onlineStore.inStockStatus,
        isAuthenticated: state.auth.token !== null,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addItemToCart: (itemID) => dispatch(action.addItemToCart(itemID)),
        removeItemFromCart: (itemID) => dispatch(action.removeItemFromCart(itemID)),
        removeAllOfThisItem: (itemID) => dispatch(action.removeAllOfItemType(itemID))
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(Checkout);