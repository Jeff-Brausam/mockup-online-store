import React from 'react';
import Button from '../../UI/Button/Button';
import classes from './ItemView.module.css';

const itemView = (props) => {
    const specs = Object.keys(props.items.specs).map(el => {return props.items.specs[el]})

    return(
        <div className={classes.ItemView}>
            <span>
                <h3>{props.items.name}</h3>
                <button className={classes.Close} onClick={props.clicked}>X</button>
            </span>  
            <div className={classes.ImgContainer}>
                <img src={props.items.imgURL} alt={props.items.name}/>
            </div>
            <p><strong>${props.items.price.toLocaleString()}</strong></p> 
            <hr />
            <p className={classes.Description}>{props.items.description}</p>
            <span>
                <div className={classes.SpecsContainer}>
                    {/* <p>LAPTOP SPECS</p> */}
                    <hr />
                    <p>Processor: {specs[0]}</p>
                    <p>RAM: {specs[1]}</p>
                    <p>Storage: {specs[2]}</p>
                    <p>GPU: {specs[3]}</p>
                </div>
                <Button 
                btnType="ViewItemAdd"
                disabled={props.stockedStatus[props.viewedIndex] === false}
                clicked={()=>props.addToCart(props.items.itemID)} >Add To Cart</Button>
                <Button 
                btnType="ViewItemCheckout"
                clicked={props.toCheckout}
                    >Checkout</Button>
            </span>      
        </div>);
}


export default itemView;
