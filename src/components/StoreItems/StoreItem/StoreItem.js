import React from "react";
import Button from "../../UI/Button/Button";
import classes from "./StoreItem.module.css";

const storeItem = (props) => {
  return (
    <div className={classes.StoreItem} data-testid={props.name}>
      <div className={classes.Img}>
        <img src={props.imgURL} alt={props.name} />
      </div>
      <p>
        <strong className={classes.ItemName}>{props.name}</strong>
      </p>
      <div className={classes.ButtonRow}>
        <Button clicked={() => props.viewItem(props.id)}>View</Button>

        <p className={classes.Price}>${props.price}</p>
        <Button
          disabled={props.stockedStatus[props.ind] === false}
          clicked={() => props.addToCart(props.id)}>
          Add To Cart
        </Button>
      </div>
    </div>
  );
};

export default storeItem;
