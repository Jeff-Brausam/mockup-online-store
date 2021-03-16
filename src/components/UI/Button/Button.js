import React from "react";
import classes from "./Button.module.css";

const Button = ({disabled, clicked, btnType, children}) => (
  <button
    disabled={disabled}
    className={[classes.Button, classes[btnType]].join(" ")}
    onClick={clicked}>
    {children}
  </button>
);

export default Button;
