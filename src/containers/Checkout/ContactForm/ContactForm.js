import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Form/Input/Input';
import Button from '../../../components/UI/Button/Button';
import { updateObject, checkValidity } from '../../../shared/utility';
import classes from './ContactForm.module.css';
import * as action from '../../../store/actions/index';

class ContactForm extends Component {
    state = {
        orderForm: {
            name: {
                inputType: 'input',
                config: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            street: {
                inputType: 'input',
                config: {
                    type: 'text',
                    placeholder: 'Your Street'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },
            zipCode: {
                inputType: 'input',
                config: {
                    type: 'text',
                    placeholder: 'ZIP code'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5,
                    isNumeric: true
                },
                valid: false,
                touched: false
            },
            country: {
                inputType: 'input',
                config: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: '',
                validation: {
                    required: true,
                },
                valid: false,
                touched: false
            },  
            email: {
                inputType: 'input',
                config: {
                    type: 'text',
                    placeholder: 'Your Email'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true
                },
                valid: false,
                touched: false
            },   
            deliveryMethod: {
                inputType: 'select',
                config: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: 'fastest',
                validation: {},
                valid: true
            },
        },
        formIsValid: false,
    }

    // Handles the order and sends it to the server
    orderHandler = (e) => {
        e.preventDefault();

        const formData = {};
        // Loop through your form data
        for (let formElementIdentifier in this.state.orderForm) {
            // loops through, gets name: value, street: value... sets it to the value of what is inside of there
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier];
        }

        // Your order to be sent to the server
        const order = {
            cart: this.props.cart,
            price: this.props.price,
            orderData: formData,
            userId: this.props.userId
        }

        this.props.sendStoreOrder(order , this.props.token);
        this.props.history.push('/');
        this.props.initStoreInventory();
    }

    inputChangedHandler = (event, selectedInput) => {  
        const updatedFormElement = updateObject(this.state.orderForm[selectedInput], {
            value: event.target.value,
            valid: checkValidity(event.target.value, this.state.orderForm[selectedInput].validation),
            touched: true,
        });

        const updatedOrderForm = updateObject(this.state.orderForm, {
            [selectedInput]: updatedFormElement
        });

        let formIsValid = true;
        for (let selectedInput in updatedOrderForm){
            formIsValid = updatedOrderForm[selectedInput].valid && formIsValid;
        }
        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid}); 
    }

    render(){
        // Create an array for all form elements to be pushed into from the above orderForm state
        const formElementsArray = []; 
        // For every element, add the item (name: email: ect: with its configs for each item)
        for (let key in this.state.orderForm){
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        
        let form = (
                <form>
                    {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        type={formElement.config.inputType} 
                        config={formElement.config.config}
                        value={formElement.config.value} 
                        invalid={!formElement.config.valid} 
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event)=>this.inputChangedHandler(event, formElement.id)}/>
                    ))}
                    <Button 
                        btnType="ContactFormSubmit"
                        type="submit"
                        clicked={this.orderHandler}>SUBMIT ORDER</Button>
                </form> )
        
        if (this.state.loading) {
            form = <Spinner />
        }

        return(
            <div className={classes.ContactForm}>
                <h4>Enter your information</h4>
                {form}
            </div>);
    }
}

const mapStateToProps = state => {
    return {
        cart: state.onlineStore.cart,
        totalPrice: state.onlineStore.totalPrice, 
        loading: state.orders.loading,
        token: state.auth.token,
        userId: state.auth.userId,
        error: state.orders.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendStoreOrder: (order,  token) => dispatch(action.sendStoreOrder(order, token)),
        initStoreInventory: () => dispatch(action.fetchStoreInventory()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);