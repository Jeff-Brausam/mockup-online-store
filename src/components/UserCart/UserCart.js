import React from "react";
import classes from "./UserCart.module.css";
import Button from "../UI/Button/Button";

const userCart = ({img, name, price, id, quantity, tempAdd, tempRemove, removeAllofItem, index, inStock}) => {
  return (
    <div className={classes.Order}>
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

export default userCart;
