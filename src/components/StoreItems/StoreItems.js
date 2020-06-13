import React from 'react';

import classes from './StoreItems.module.css';
import StoreItem from './StoreItem/StoreItem';


const storeItems = (props) => {
    // Take the store items, create a array of StoreItems
    const items = props.items.map((item, index)=>
        <StoreItem 
        name={item.name} 
        price={item.price.toLocaleString()} 
        key={index}
        ind={index}
        id={item.itemID}
        imgURL={item.imgURL}
        viewItem={props.viewItem}
        addToCart={props.addToCart}
        stockedStatus={props.stockedStatus}/>
        );

    return(
        <div className={classes.StoreItems}>
            {items}       
        </div>);
}

export default storeItems;