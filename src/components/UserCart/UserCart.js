import React from "react";
import classes from "./UserCart.module.css";
import Button from "../UI/Button/Button";

const userCart = (props) => {
  return (
    <div className={classes.Order}>
      <span>
        <div className={classes.ImageContainer}>
          <img src={props.img} alt={props.name} />
        </div>
        <div>
          <p>{props.name}</p>
          <p>
            Price: <strong>${props.price}</strong>
          </p>
        </div>
        <div>
          <button
            className={classes.RemoveAll}
            onClick={() => props.removeAllofItem(props.id)}>
            X
          </button>
          <p>Quantity: {props.quantity}</p>
          <Button
            btnType="CartQuantity"
            clicked={() => props.tempRemove(props.id)}>
            -
          </Button>
          <Button
            btnType="CartQuantity"
            clicked={() => props.tempAdd(props.id)}
            disabled={props.inStock[props.index] === false}>
            +
          </Button>
        </div>
      </span>
    </div>
  );
};

export default userCart;
