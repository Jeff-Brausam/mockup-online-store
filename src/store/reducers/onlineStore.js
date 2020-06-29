import * as actionType from '../actions/actionsType';
import { updateObject } from '../../shared/utility';

const initState = {
    storeInventory: null,
    cart: [],
    totalPrice: 0,
    itemInvCount: null,
    inStockStatus: null,
    error: false,
    firstLoad: true,
    ordering: false,
}

const addItem = (state, action, storeIndex) => {
    return updateObject(state, {
            // IF the item is in stock
            cart: state.inStockStatus[storeIndex] !== false 
            // Add item with the same item ID to the cart
                ? state.cart.concat(state.storeInventory.filter(el => el.itemID === action.itemID)) 
            // Return if not in stock
                : state.cart,
            // IF the item is in stock
            totalPrice: state.inStockStatus[storeIndex] !== false 
            // Add and Update the total price
                ? state.totalPrice + state.storeInventory[storeIndex].price 
            // Item remains the same
                : state.totalPrice, 
            // Deduct an item count from the inventory status IF there are items (not = 0), ELSE if there is none left will return (as 0)  
            itemInvCount: state.itemInvCount.map((el, ind) => ind === storeIndex && el !== 0 ? el - 1 : el),
            // IF the count for that item in stock is 0
            inStockStatus: state.itemInvCount[storeIndex] - 1 === 0  
            // Selected item out of stock 
                ? state.inStockStatus.map((elState, ind) => ind === storeIndex ? elState = false : elState) 
            // item is in stock 
                : state.inStockStatus,
            // Am currently ordering when an item is added
            ordering: true,
    });
};

const removeItem = (state, action, cartIndex, storeIndex) => {
    return updateObject(state, {
            // Find the item, return a new array with it removed (filtered out)
            cart: state.cart.filter((item, index) => index !== cartIndex),
            // If there items in the cart
            totalPrice: state.cart.length !== 0 
            // Deduct and update the total price
                ? state.totalPrice - state.cart[cartIndex].price 
            // no items = $0
                : 0,  
            // Add an item count back to the inventory status, checked against the original import, if it is equal don't add more
            itemInvCount: state.itemInvCount.map((el, ind) => ind === storeIndex && el !== state.storeInventory[storeIndex].inventory ? el + 1 : el), 
            // Check the stock for that item is at 0 
            inStockStatus: state.itemInvCount[storeIndex] === 0 
            // Selected item state is true
                ? state.inStockStatus.map((elState, ind) => ind === storeIndex ? elState = true : elState) 
            // Remains false (out of stock)
                : state.inStockStatus,  
            // reducedCart: reducedCart,
            // Ordering
            ordering: true
    });
};

const removeAllOfItem = (state, action, cartIndex, storeIndex) => {
    return updateObject(state, {
            // Remove all instances of this item
            cart: state.cart.filter((item) => item.itemID !== action.itemID),
            // cart: state.cart.filter((item, index) => index !== cartIndex),
            // Update the total price (Total price - (cart item price (ex: $500) * (number of that item inside the cart))
            totalPrice: state.cart.length !== 0 
            ? state.totalPrice - (state.cart[cartIndex].price * (state.storeInventory[storeIndex].inventory - state.itemInvCount[storeIndex])) 
            : 0,
            // Update the inventory count, that item that just got removed, (matching indexes) will be back at original storeInvetory count 
            itemInvCount: state.itemInvCount.map((el, ind) => ind === storeIndex && el !== state.storeInventory[storeIndex].inventory ? el = state.storeInventory[storeIndex].inventory : el),
            // Item should now be back in stock, since it is not in the cart anymore
            inStockStatus: state.inStockStatus.map((elState, ind) => ind === storeIndex ? elState = true : elState),
            // reducedCart: reducedCart,
            ordering: true
    });
};

const fetchStoreInventoryFailed = (state, action) => {
    return updateObject(state, {error: true});
};

const setStoreInventory = (state, action) => {
    return updateObject(state, {
        // Set store inventory
        storeInventory: action.storeInventory,
        // Set item inv count (items in stock by number)
        itemInvCount: action.storeInventory.map(el => el.inventory),
        // Set item inStock status (in stock by true or falsey statements)
        inStockStatus: action.storeInventory.map(el => el.inStock),
        // Set a fresh cart (0 items)
        cart: [], 
        // Set to false as first load just now happened
        firstLoad: false,
        // Fresh slate, no ordering has happened
        ordering: false
    });
};

const reducer = (state = initState, action) => {
    let storeIndex;
    let cartIndex;
    // Once the store loads, these can be used for storeInventory and Cart indexing
    if (state.storeInventory) {
        // Index inside of the storeInventory
        storeIndex = state.storeInventory.findIndex(el => el.itemID === action.itemID); 
        // Index inside of the cart
        cartIndex = state.cart.findIndex(el => el.itemID === action.itemID);
    }

    switch ( action.type ) {
        case actionType.ADD_ITEM: return addItem( state, action, storeIndex )
        case actionType.REMOVE_ITEM: return removeItem( state, action, cartIndex, storeIndex )
        case actionType.REMOVE_ALL_OF_ITEM_TYPE: return removeAllOfItem( state, action, cartIndex, storeIndex )
        case actionType.FETCH_STORE_INVENTORY_FAILED: return fetchStoreInventoryFailed( state, action )
        case actionType.SET_STORE_INVENTORY: return setStoreInventory( state, action );
        default: return state;
    }
}
    

export default reducer;