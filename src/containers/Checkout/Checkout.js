import React from "react";
import {Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import ContactForm from "./ContactForm/ContactForm";
import Cart from "../../components/Cart/Cart";
import Button from "../../components/UI/Button/Button";
import classes from "./Checkout.module.css";
import * as action from "../../store/actions/index";

const Checkout = (props) => {
  const storeInv = useSelector((state) => state.onlineStore.storeInventory);
  const cart = useSelector((state) => state.onlineStore.cart);
  const totalPrice = useSelector((state) => state.onlineStore.totalPrice);
  const stockedStatus = useSelector((state) => state.onlineStore.inStockStatus);
  const isAuthenticated = useSelector((state) => state.auth.token !== null);

  const dispatch = useDispatch();

  const addItemToCart = (itemID) => dispatch(action.addItemToCart(itemID));
  const removeItemFromCart = (itemID) =>
    dispatch(action.removeItemFromCart(itemID));
  const removeAllOfThisItem = (itemID) =>
    dispatch(action.removeAllOfItemType(itemID));

  if (cart.length === 0) {
    localStorage.removeItem("reducedCart");
  }

  const cancelOrder = () => {
    props.history.goBack();
  };

  const continueWithOrder = () => {
    props.history.replace("/checkout/contact-form");
  };

  const proceedToSignUp = () => {
    props.history.push("/signup");
  };

  let orders = (
    <Cart
      cart={cart}
      storeInv={storeInv}
      inStock={stockedStatus}
      removeAllofItem={removeAllOfThisItem}
      tempRemove={removeItemFromCart}
      tempAdd={addItemToCart}
    />
  );

  // No items = Empty Cart
  let userOrder = <h3>Cart Empty</h3>;
  // Items in the cart, display orders
  if (cart.length >= 1) {
    userOrder = (
      <>
        {orders}
        <p className={classes.Total}>
          Your Total: <strong>${totalPrice}</strong>
        </p>
        {isAuthenticated ? (
          <span>
            <Button btnType="Cancel" clicked={cancelOrder}>
              CANCEL
            </Button>
            <Button btnType="Continue" clicked={continueWithOrder}>
              CONTINUE
            </Button>
          </span>
        ) : (
          <Button clicked={proceedToSignUp}>Sign up to continue</Button>
        )}
      </>
    );
  }
  return (
    <section className={classes.Checkout}>
      {userOrder}
      <Route
        path={props.match.path + "/contact-form"}
        render={(props) => <ContactForm price={totalPrice} {...props} />}
      />
    </section>
  );
};

export default Checkout;
