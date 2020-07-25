import React from "react";
import classes from "./Order.module.css";

const order = (props) => {
  return (
    <div className={classes.Order}>
      <span>
        <div>IMG</div>
        <div>
          <p>{props.name}</p>
        </div>
        <div>
          <p>Quantity: {props.quantity}</p>
          <button onClick={() => props.tempRemove(props.id)}>-</button>
          <button onClick={() => props.tempAdd(props.id)} disabled>
            +
          </button>
        </div>
      </span>
    </div>
  );
};

export default order;
