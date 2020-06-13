import React from 'react';

import classes from './StoreItem.module.css'
import Button from '../../UI/Button/Button';

const storeItem = (props) => {
    return(
        <div className={classes.StoreItem}>
            <div className={classes.Img}>
                <img src={props.imgURL} alt={props.name}/>
            </div>
            <p><strong className={classes.ItemName}>{props.name}</strong></p>
            <div className={classes.ButtonRow}>
                <span>
                    <Button 
                    clicked={()=>props.viewItem(props.id)}
                    >View</Button>
                </span>
                <span>
                    <p className={classes.Price}>${props.price}</p>

                </span>
                <span>
                    <Button 
                    disabled={props.stockedStatus[props.ind] === false}
                    clicked={()=>props.addToCart(props.id)}>Add To Cart</Button>
                </span>
                
                {/* <button className={classes.AddToCart} onClick={()=>props.addToCart(props.id)} disabled={props.stockedStatus[props.ind] === false} >Add To Cart</button> */}
            </div>
        </div>);
}

export default storeItem;
