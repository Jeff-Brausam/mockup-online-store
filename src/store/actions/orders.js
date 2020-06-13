import * as actionType from './actionsType';
import axios from 'axios';


export const removeAllOfItemType = (itemID) => {
    return {
        type: actionType.REMOVE_ALL_OF_ITEM_TYPE,
        itemID: itemID
    }
}

export const storeOrderSuccess = (orderData) => {
    return {
        type: actionType.STORE_ORDER_SUCCESS,
        orderData: orderData
    }
}

export const storeOrderFailed = (error) => {
    return {
        type: actionType.STORE_ORDER_FAILED,
        error: error,
    }
}

export const sendStoreOrder = (orderData, token) => {
    return dispatch => {
        axios.post('https://mockup-online-store.firebaseio.com/orders.json?auth=' + token, orderData)
        .then(response => {
            dispatch(storeOrderSuccess( response.data, orderData ));
        })
        .catch(error => {
            dispatch(storeOrderFailed(error));
        });
    }
}

export const fetchOrderSuccess = (orderData) => {
    return {
        type: actionType.FETCH_ORDER_SUCCESS,
        orderData: orderData
    }
}

export const fetchOrderFailed = (error) => {
    return {
        type: actionType.FETCH_ORDER_FAILED,
        error: error
    }
}

export const fetchOrderStart = (token, userId) => {
    return dispatch => {
        // dispatch(fetchOrderStart());
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';
        axios.get('https://mockup-online-store.firebaseio.com/orders.json'  + queryParams)
        .then(response => {
            const fetchedOrders = [];
            for (let key in response.data) {
                fetchedOrders.push({
                    ...response.data[key], 
                    id: [key]})
            }
            dispatch(fetchOrderSuccess(fetchedOrders))

        })
        .catch(error => {
            // Handle errors
            dispatch(fetchOrderFailed(error))
        });
};
}