import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Form/Input/Input";
import Button from "../../../components/UI/Button/Button";
import {updateObject, checkValidity} from "../../../shared/utility";
import classes from "./ContactForm.module.css";
import * as action from "../../../store/actions/index";

const ContactForm = (props) => {
  const cart = useSelector((state) => state.onlineStore.cart);
  const totalPrice = useSelector((state) => state.onlineStore.totalPrice);
  const loading = useSelector((state) => state.orders.loading);
  const token = useSelector((state) => state.auth.token);
  const userId = useSelector((state) => state.auth.userId);

  const dispatch = useDispatch();

  const sendStoreOrder = (order, token) =>
    dispatch(action.sendStoreOrder(order, token));
  const initStoreInventory = () => dispatch(action.fetchStoreInventory());

  const [orderForm, setOrderForm] = useState({
    name: {
      inputType: "input",
      config: {
        type: "text",
        placeholder: "Your Name",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    street: {
      inputType: "input",
      config: {
        type: "text",
        placeholder: "Your Street",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    zipCode: {
      inputType: "input",
      config: {
        type: "text",
        placeholder: "ZIP code",
      },
      value: "",
      validation: {
        required: true,
        minLength: 5,
        maxLength: 5,
        isNumeric: true,
      },
      valid: false,
      touched: false,
    },
    country: {
      inputType: "input",
      config: {
        type: "text",
        placeholder: "Country",
      },
      value: "",
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    email: {
      inputType: "input",
      config: {
        type: "text",
        placeholder: "Your Email",
      },
      value: "",
      validation: {
        required: true,
        isEmail: true,
      },
      valid: false,
      touched: false,
    },
    deliveryMethod: {
      inputType: "select",
      config: {
        options: [
          {value: "fastest", displayValue: "Fastest"},
          {value: "cheapest", displayValue: "Cheapest"},
        ],
      },
      value: "fastest",
      validation: {},
      valid: true,
    },
  });

  const [formIsValid, setFormIsValid] = useState(false);

  // Handles the order and sends it to the server
  const orderHandler = (e) => {
    e.preventDefault();

    const formData = {};

    for (let formElementIdentifier in orderForm) {
      formData[formElementIdentifier] = orderForm[formElementIdentifier];
    }

    const order = {
      cart: cart,
      price: totalPrice,
      orderData: formData,
      userId: userId,
    };

    sendStoreOrder(order, token);
    props.history.push("/");
    initStoreInventory();
  };
  // Handles inputs checks if valid entry
  const inputChangedHandler = (event, selectedInput) => {
    const updatedFormElement = updateObject(orderForm[selectedInput], {
      value: event.target.value,
      valid: checkValidity(
        event.target.value,
        orderForm[selectedInput].validation,
      ),
      touched: true,
    });

    const updatedOrderForm = updateObject(orderForm, {
      [selectedInput]: updatedFormElement,
    });

    let curFormIsValid = true;
    for (let selectedInput in updatedOrderForm) {
      curFormIsValid = updatedOrderForm[selectedInput].valid && formIsValid;
    }
    setOrderForm(updatedOrderForm);
    setFormIsValid(curFormIsValid);
  };

  const formElementsArray = [];
  // Takes the above form elements and configures them, into the array.
  for (let key in orderForm) {
    formElementsArray.push({
      id: key,
      config: orderForm[key],
    });
  }

  let form = (
    <form>
      {formElementsArray.map((formElement) => (
        <Input
          key={formElement.id}
          type={formElement.config.inputType}
          config={formElement.config.config}
          value={formElement.config.value}
          invalid={!formElement.config.valid}
          shouldValidate={formElement.config.validation}
          touched={formElement.config.touched}
          changed={(event) => inputChangedHandler(event, formElement.id)}
        />
      ))}
      <Button btnType="ContactFormSubmit" type="submit" clicked={orderHandler}>
        SUBMIT ORDER
      </Button>
    </form>
  );

  if (loading) {
    form = <Spinner />;
  }

  return (
    <div className={classes.ContactForm}>
      <h4>Enter your information</h4>
      {form}
    </div>
  );
};

export default ContactForm;
