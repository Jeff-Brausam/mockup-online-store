import React from "react";
import StoreItem from "./StoreItem/StoreItem";
import classes from "./StoreItems.module.css";

export const StoreItems = ({items, viewItem, addToCart, stockedStatus}) => {
  const allItems = items.map((item, index) => (
    <StoreItem
      name={item.name}
      price={item.price.toLocaleString()}
      key={index}
      ind={index}
      id={item.itemID}
      imgURL={item.imgURL}
      viewItem={viewItem}
      addToCart={addToCart}
      stockedStatus={stockedStatus}
    />
  ));

  return <div className={classes.StoreItems}>{allItems}</div>;
};

export default StoreItems;
