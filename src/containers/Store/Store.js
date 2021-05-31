import React, { useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import StoreItems from "../../components/StoreItems/StoreItems";
import ItemView from "../../components/StoreItems/ItemView/ItemView";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import Spinner from "../../components/UI/Spinner/Spinner";
import Modal from "../../components/UI/Modal/Modal";
import classes from "./Store.module.css";
import * as action from "../../store/actions/index";

export const Store = ({history}) => {
  const dispatch = useDispatch();
  const storeInv = useSelector((state) => state.onlineStore.storeInventory);
  const stockedStatus = useSelector((state) => state.onlineStore.inStockStatus);
  const error = useSelector((state) => state.onlineStore.error);
  const firstLoad = useSelector((state) => state.onlineStore.firstLoad);

  const initStoreInventory = useCallback(
    () => dispatch(action.fetchStoreInventory()),
    [dispatch],
  );
  
  const [viewedItem, setViewedItem] = useState(null);
  const [viewedIndex, setViewedIndex] = useState(null);
  const [viewing, setViewing] = useState(false);

  useEffect(() => {
    if (firstLoad) {
      initStoreInventory();
    }
  }, [initStoreInventory, firstLoad]);
  
  function addItemToCart(itemID) {
    dispatch(action.addItemToCart(itemID));
  }

  function removeItemFromCart(itemID) {
    dispatch(action.removeItemFromCart(itemID))
  }

  function viewItemHandler(id) {
    const itemIndex = storeInv.findIndex((storeItem) => {
      return storeItem.itemId === id;
    });
    const selectedItem = { ...storeInv[itemIndex] };
    setViewedItem(selectedItem);
    setViewedIndex(itemIndex);
    setViewing(!viewing);
  };

  function exitViewItemHandler() {
    setViewedItem(null);
    setViewedIndex(null);
    setViewing(!viewing);
  }

  function proceedToCheckout() {
    history.push("/checkout");
  };

  // Error message if database fails to fetch items
  let errorMessage = "Failed to fetch store items. Try refreshing";
  
  // Individual item view
  let itemView = null;
  // All store items, normal display
  let storeItems = error ? (
    <div className={classes.StoreError}>
      <Modal show={error}>{errorMessage}</Modal>
    </div>
  ) : (
    <Spinner />
  );
  // Store items have loaded
  if (storeInv) {
    storeItems = (
      <StoreItems
        items={storeInv}
        testRemove={removeItemFromCart}
        viewItem={viewItemHandler}
        addToCart={addItemToCart}
        stockedStatus={stockedStatus}
      />
    );
    // If they are viewing an item (click on view button)
    if (viewing) {
      itemView = (
        <ItemView
          items={viewedItem}
          clicked={exitViewItemHandler}
          addToCart={addItemToCart}
          viewedIndex={viewedIndex}
          stockedStatus={stockedStatus}
          toCheckout={proceedToCheckout}
        />
      );
    }
  }
  return (
    <section className={classes.Store}>
      <Backdrop show={viewing} clicked={exitViewItemHandler} />
      {itemView}
      {storeItems}
    </section>
  );
};

export default Store;
