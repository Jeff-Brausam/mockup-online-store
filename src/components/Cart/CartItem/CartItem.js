import React from "react";
import classes from "./CartItem.module.css";
import Button from "../../UI/Button/Button";

const CartItem = ({img, name, price, id, removeAllofItem, quantity, tempRemove, tempAdd, inStock, index}) => {
  return (
    <div className={classes.CartItem}>
      <span>
        <div className={classes.ImageContainer}>
          <img src={img} alt={name} />
        </div>
        <div>
          <p>{name}</p>
          <p>
            Price: <strong>${price}</strong>
          </p>
        </div>
        <div>
          <button
            className={classes.RemoveAll}
            onClick={() => removeAllofItem(id)}>
            X
          </button>
          <p>Quantity: {quantity}</p>
          <Button
            btnType="CartQuantity"
            clicked={() => tempRemove(id)}>
            -
          </Button>
          <Button
            btnType="CartQuantity"
            clicked={() => tempAdd(id)}
            disabled={inStock[index] === false}>
            +
          </Button>
        </div>
      </span>
    </div>
  );
};

export default CartItem;
