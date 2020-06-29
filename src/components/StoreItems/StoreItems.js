import React from 'react';
import StoreItem from './StoreItem/StoreItem';
import classes from './StoreItems.module.css';

const storeItems = (props) => {
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