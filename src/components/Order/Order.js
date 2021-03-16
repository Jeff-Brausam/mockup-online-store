import React from "react";
import classes from "./Order.module.css";

const Order = ({name, quantity, tempRemove, tempAdd, id}) => {
  return (
    <div className={classes.Order}>
      <span>
        <div>IMG</div>
        <div>
          <p>{name}</p>
        </div>
        <div>
          <p>Quantity: {quantity}</p>
          <button onClick={() => tempRemove(id)}>-</button>
          <button onClick={() => tempAdd(id)} disabled>
            +
          </button>
        </div>
      </span>
    </div>
  );
};

export default Order;
