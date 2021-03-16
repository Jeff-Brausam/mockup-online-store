import React from "react";
import classes from "./Input.module.css";

const Input = ({invalid, shouldValidate, touched, type, config, value, changed}) => {
  let input = null;
  const inputClasses = [classes.InputElement];

  if (invalid && shouldValidate && touched) {
    inputClasses.push(classes.Invalid);
  }

  switch (type) {
    case "input":
      input = (
        <input
          {...config}
          className={inputClasses.join(" ")}
          value={value}
          onChange={changed}
        />
      );
      break;
    case "textarea":
      input = (
        <input
          {...config}
          className={inputClasses.join(" ")}
          value={value}
          onChange={changed}
        />
      );
      break;
    case "select":
      input = (
        <select
          // value={value}
          onChange={changed}
          className={inputClasses.join(" ")}
          defaultValue={"Fastest"}>
          {config.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      input = (
        <input
          {...config}
          className={classes.InputElement}
          value={value}
        />
      );
  }

  return <div className={classes.Input}>{input}</div>;
};

export default Input;
