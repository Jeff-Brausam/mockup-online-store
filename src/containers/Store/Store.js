import React, { Component } from 'react';
import { connect } from 'react-redux';
import StoreItems from '../../components/StoreItems/StoreItems';
import ItemView from '../../components/StoreItems/ItemView/ItemView';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import Spinner from '../../components/UI/Spinner/Spinner';
import Modal from '../../components/UI/Modal/Modal';
import classes from './Store.module.css';
import * as action from '../../store/actions/index';

class Store extends Component {
    state = {
        viewedItem: null,
        viewedIndex: null,
        viewing: false,
    }

    componentDidMount(){
        // Initial load, sets items, if user is not signed in and is the very first load
        if (this.props.firstLoad) {
            this.props.initStoreInventory();
        }
    }
    // Item displayed when view button clicked
    viewItemHandler = (id) => {
        // Find the index that matches the ID of the name to be mutated
        const ItemIndex = this.props.storeInv.findIndex(p => {
          return p.itemID === id;
        });
        // Find that item that matches store inventory ID
        const newItem = {
            ...this.props.storeInv[ItemIndex]
        }
        // Set state.. (show item, turn on backdrop, viewing state is also on)
        this.setState({
            viewedItem: newItem,
            viewedIndex: ItemIndex, 
            viewing: !this.state.viewing, 
        });
    }
    // Exits out of item view
    unviewItemHandler = () => {
        this.setState({viewing: !this.state.viewing, viewedItem: null, viewedIndex: null})
    }
    // Proceeds to checkout (buttons in item view)
    proceedToCheckout = () => {   
        this.props.history.push('/checkout');
    }
    
    render(){
        // Error message if database fails to fetch items
        let errorMessage = "Failed to fetch store items. Try refreshing"
        // Individual item view 
        let itemView = null;
        // All store items, normal display 
        let storeItems = this.props.error ? 
            <div className={classes.StoreError}>
                <Modal show={this.props.error}> 
                    {errorMessage}
                </Modal>
            </div>
            : <Spinner />
        // Store items have loaded   
        if (this.props.storeInv) {
            storeItems = (<StoreItems 
                items={this.props.storeInv}
                testRemove={this.props.removeItemFromCart}
                viewItem={this.viewItemHandler}
                addToCart={this.props.addItemToCart} 
                stockedStatus={this.props.stockedStatus} />
                );
            // If they are viewing an item (click on view button)
            if (this.state.viewing) {
                itemView =  
                    <ItemView 
                        items={this.state.viewedItem}
                        clicked={this.unviewItemHandler}
                        addToCart={this.props.addItemToCart}
                        viewedIndex={this.state.viewedIndex} 
                        stockedStatus={this.props.stockedStatus}
                        toCheckout={this.proceedToCheckout} />
            }    
        }
        return(
            <main className={classes.Store}>
                <Backdrop 
                    show={this.state.viewing}
                    clicked={this.unviewItemHandler} />
                {itemView}
                {storeItems}  
            </main>);
    }
}

const mapStateToProps = state => {
    return {
        storeInv: state.onlineStore.storeInventory,
        cart: state.onlineStore.cart,
        totalPrice: state.onlineStore.totalPrice,
        invStatus: state.onlineStore.itemInvCount,
        stockedStatus: state.onlineStore.inStockStatus,
        error: state.onlineStore.error,
        firstLoad: state.onlineStore.firstLoad,
        isAuthenticated: state.auth.token !== null,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addItemToCart: (itemID) => dispatch(action.addItemToCart(itemID)),
        removeItemFromCart: (itemID) => dispatch(action.removeItemFromCart(itemID)),
        initStoreInventory: () => dispatch(action.fetchStoreInventory()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Store);