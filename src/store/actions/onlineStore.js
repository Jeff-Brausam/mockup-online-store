import * as actionTypes from './actionsType';
import axios from 'axios';

// Adds an item to the cart
export const addItemToCart = (itemID) => {
    return {
        type: actionTypes.ADD_ITEM, 
        itemID: itemID
    }
}
// Removes and item from the cart
export const removeItemFromCart = (itemID) => {
    return {
        type: actionTypes.REMOVE_ITEM, 
        itemID: itemID
    }
}
// Set the store inventory when the component mounts and retrieves the data
export const setStoreInventory = (storeInventory) => {
    return {
        type: actionTypes.SET_STORE_INVENTORY,
        storeInventory: storeInventory,
    };
}

export const fetchStoreInventoryFailed = () => {
    return {
        type: actionTypes.FETCH_STORE_INVENTORY_FAILED
    }
}

// Grab the items in the store from the server
export const fetchStoreInventory = () => {
    return dispatch => {
            axios.get('https://mockup-online-store.firebaseio.com/storeInventory.json')
            .then(response => {
                dispatch(setStoreInventory(response.data));
            })
            .catch(error => {
                dispatch(fetchStoreInventoryFailed());
            });
    };
}
