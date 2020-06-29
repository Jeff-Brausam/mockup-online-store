import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StoreItems from '../../components/StoreItems/StoreItems';
import ItemView from '../../components/StoreItems/ItemView/ItemView';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import Spinner from '../../components/UI/Spinner/Spinner';
import Modal from '../../components/UI/Modal/Modal';
import classes from './Store.module.css';
import * as action from '../../store/actions/index';

export const Store = props => { 
    const [viewedItem, setViewedItem] = useState(null);
    const [viewedIndex, setViewedIndex] = useState(null);
    const [viewing, setViewing] = useState(false);
   
    const storeInv = useSelector(state => state.onlineStore.storeInventory);
    const stockedStatus = useSelector(state => state.onlineStore.inStockStatus);
    const error = useSelector(state => state.onlineStore.error);
    const firstLoad = useSelector(state => state.onlineStore.firstLoad);

    const dispatch = useDispatch();

    const addItemToCart = itemID => dispatch(action.addItemToCart(itemID));
    const removeItemFromCart = itemID => dispatch(action.removeItemFromCart(itemID));
    const initStoreInventory = useCallback(() => dispatch(action.fetchStoreInventory()), [dispatch])

    useEffect(()=>{
        if (firstLoad) {
            initStoreInventory();
        }
    }, [initStoreInventory, firstLoad]);

    // Item displayed when view button clicked
    const viewItemHandler = (id) => {
        // Find the index that matches the ID of the name to be mutated
        const itemIndex = storeInv.findIndex(p => {
          return p.itemID === id;
        });
        // Find that item that matches store inventory ID
        const newItem = { ...storeInv[itemIndex] }
        setViewedItem(newItem);
        setViewedIndex(itemIndex);
        setViewing(!viewing);
    }
    // Exits out of item view
    const unviewItemHandler = () => {
        setViewedItem(null);
        setViewedIndex(null);
        setViewing(!viewing);
    }
    // Proceeds to checkout (buttons in item view)
    const proceedToCheckout = () => {   
        props.history.push('/checkout');
    }   
    // Error message if database fails to fetch items
    let errorMessage = "Failed to fetch store items. Try refreshing";
    // Individual item view 
    let itemView = null;
    // All store items, normal display 
    let storeItems = error 
        ? <div className={classes.StoreError}>
            <Modal show={error}> 
                {errorMessage}
            </Modal>
        </div>
        : <Spinner />
    // Store items have loaded   
    if (storeInv) {
        storeItems = (<StoreItems 
            items={storeInv}
            testRemove={removeItemFromCart}
            viewItem={viewItemHandler}
            addToCart={addItemToCart} 
            stockedStatus={stockedStatus} />
        );
        // If they are viewing an item (click on view button)
        if (viewing) {
            itemView =  
                <ItemView 
                    items={viewedItem}
                    clicked={unviewItemHandler}
                    addToCart={addItemToCart}
                    viewedIndex={viewedIndex} 
                    stockedStatus={stockedStatus}
                    toCheckout={proceedToCheckout} />
            }    
        }
        return (
            <section className={classes.Store}>
                <Backdrop 
                    show={viewing}
                    clicked={unviewItemHandler} />
                {itemView}
                {storeItems}  
            </section>
        );
}

export default Store;