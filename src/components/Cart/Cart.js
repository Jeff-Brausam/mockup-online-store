import React, {useState, useLayoutEffect} from "react";
import CartItem from "./CartItem/CartItem";

export const Cart = ({cart, storeInv, inStock, removeAllofItem, tempRemove, tempAdd}) => {
  const [userCart, setUserCart] = useState(cart);
  
  useLayoutEffect(() => {
    let sortedCart = sortCart(cart);  
    setUserCart(sortedCart);

    return () => sortedCart = null;
  }, [cart]);

  function sortCart(userCart) {
    return userCart.reduce((cart, item) => {
      if (!cart.includes(item)) {
        cart.push(item);
        cart.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        return cart;
      }
      return cart;
    }, []);
  }
    
  function getQuantity(userCart) {
    return userCart.reduce((cart, item) => {
        if (item.name in cart) {
          cart[item.name]++;
        } else {
          cart[item.name] = 1;
        }
        return cart;
    }, []);
  }

  const quantity = getQuantity(cart);

  // let orders = null;

  const orders = userCart.map((el, ind) => {
    return (
      <CartItem
        name={el.name}
        key={ind}
        index={storeInv.findIndex((p) => {
          return p.itemID === el.itemID;
        })}
        price={el.price}
        img={el.imgURL}
        id={el.itemID}
        inStock={inStock}
        removeAllofItem={removeAllofItem}
        quantity={quantity[el.name]}
        tempRemove={tempRemove}
        tempAdd={tempAdd}
      />
    );
  });

  return orders;
};

export default Cart;
