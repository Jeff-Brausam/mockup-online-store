import React from "react";
import classes from "./NavigationItems.module.css";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

export const NavigationItems = (props) => {
  const cart = useSelector((state) => state.onlineStore.cart);
  const isAuthenticated = useSelector((state) => state.auth.token !== null);

  let notification = null;
  
  if (cart.length >= 1) {
    notification = (
      <span className={classes.Notification}>
        <p className={classes.NotificationNumber}>{cart.length}</p>
      </span>
    );
  }

  return (
    <ul className={classes.NavigationItems}>
      <li>
        <NavLink to="/" activeClassName={classes.active} exact>
          Store
        </NavLink>
      </li>
      {isAuthenticated ? (
        <li>
          <NavLink to="/orders" activeClassName={classes.active} exact>
            Orders
          </NavLink>
        </li>
      ) : null}
      <li>
        <span>{notification}</span>
        <NavLink to="/checkout" activeClassName={classes.active} exact>
          Cart
        </NavLink>
      </li>
      {!isAuthenticated ? (
        <li>
          <NavLink to="/signup" activeClassName={classes.active} exact>
            SignUp
          </NavLink>
        </li>
      ) : (
        <li>
          <NavLink to="/logout" activeClassName={classes.active}>
            Logout
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavigationItems;
