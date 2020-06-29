import React, { useState, useLayoutEffect } from 'react';
import CartItem from './CartItem/CartItem';

const Cart = (props) => {
    const [reducedCart, setReducedCart] = useState(props.cart);

    useLayoutEffect(()=> {
        let value = props.cart.reduce((acc, item)=>{
            // If the item has not appeared already
            if (!acc.includes(item)){
                // Add to array
                acc.push(item);
                // Sort to make it in alphabetical order  
                acc.sort((a,b) => a.name.localeCompare(b.name));
            } else {
                return acc;
            }
            return acc;
        }, [])
            setReducedCart(value);
        return () => value = null;
    }, [props.cart])
    // Gets the quantity
    let quantity = props.cart.reduce((curCart, item) => {
        if (item.name in curCart) {
            curCart[item.name]++  
        }
        else {
            curCart[item.name] = 1
        }
        return curCart;
    }, []);
    
    let orders = null;

    orders = reducedCart.map((el, ind) => {
        return <CartItem 
            name={el.name} 
            key={ind} 
            index={props.storeInv.findIndex(p => {return p.itemID === el.itemID})}
            price={el.price}
            img={el.imgURL}
            id={el.itemID} 
            inStock={props.inStock}
            removeAllofItem={props.removeAllofItem}
            quantity={quantity[el.name]} 
            tempRemove={props.tempRemove} 
            tempAdd={props.tempAdd} />
    });
    
    return orders;
};
 
export default Cart;