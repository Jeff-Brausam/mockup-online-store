import * as actionType from '../actions/actionsType';
import { updateObject } from '../../shared/utility';

const initState = {
    orders: [],
    loading: false,
    purchased: false,
    userOrder: null,
    error: false,
}

const storeOrderStart = (state, action) => {
    return updateObject(state, {loading: true})
};

const sendStoreOrder = (state, action) => {
    return updateObject(state, {
        orders: state.orders.concat(action.orderData),
        loading: false,
        purchased: true
    });
};

const fetchOrderSuccess = (state, action) => {
    return updateObject(state, {
        userOrder: action.orderData,
        loading: false
    });
};

const storeOrderFailed = (state, action) => {
    return updateObject(state, {error: true})
}

const reducer = (state = initState, action) => {
    switch ( action.type ) {
        case actionType.STORE_ORDER_START: return storeOrderStart(state, action);
        case actionType.SEND_STORE_ORDER: return sendStoreOrder(state, action);
        case actionType.FETCH_ORDER_SUCCESS: return fetchOrderSuccess(state, action);
        case actionType.STORE_ORDER_FAILED: return storeOrderFailed(state, action);
        default: return state;
    }
}



export default reducer;