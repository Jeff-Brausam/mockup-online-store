import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { updateObject, checkValidity } from '../../shared/utility';
import Input from '../../components/UI/Form/Input/Input';
import Spinner from '../../components/UI/Spinner/Spinner';
import Button from '../../components/UI/Button/Button';
import classes from './Auth.module.css';
import * as action from '../../store/actions/index';

const Auth = props => {
    const [controls, setControls] = useState({
            email: {
                inputType: 'input',
                config: {
                    type: 'email',
                    placeholder: 'Your Email'
                },
                value: '',
                validation: {
                    required: true,
                    isEmail: true,
                },
                valid: false,
                touched: false
            },
            password: {
                inputType: 'input',
                config: {
                    type: 'password',
                    placeholder: 'Your Password'
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 6
                },
                valid: false,
                touched: false
            },
    })  
    const [needsSignUp, setNeedsSignUp] = useState(true);

    const loading = useSelector(state => state.auth.loading)
    const error = useSelector(state => state.auth.error)
    const isAuthenticated = useSelector(state => state.auth.token !== null)
    const ordering = useSelector(state => state.onlineStore.ordering )
    const authRedirectPath = useSelector(state => state.auth.authRedirectPath) 

    const dispatch = useDispatch();

    const onAuth = (email, password, needsSignUp) => dispatch(action.auth(email, password, needsSignUp));
    const onSetAuthRedirectPath = useCallback(() => dispatch(action.setAuthRedirectPath('/')), [dispatch]);
    
    useEffect(() =>{
        if (!ordering && authRedirectPath !== '/'){
            onSetAuthRedirectPath();
        }  
    }, [onSetAuthRedirectPath, ordering, authRedirectPath])

    const inputChangedHandler = (event, controlName) => {
        const updatedControls = updateObject(controls, {
            [controlName]: updateObject(controls[controlName], {
                ...controls[controlName],
                value: event.target.value,
                valid: checkValidity(event.target.value, controls[controlName].validation),
                touched: true
            })
        });
        setControls(updatedControls);
    }

    const switchAuthModeHandler = () => {
        setNeedsSignUp(!needsSignUp);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        onAuth(controls.email.value, controls.password.value, needsSignUp)
    }

    const formElementsArray = []; 
    for (let key in controls){
        formElementsArray.push({
            id: key,
            config: controls[key]
        });
    }

    let form = ( formElementsArray.map(formElement => (
        <Input 
            key={formElement.id}
            type={formElement.config.inputType} 
            config={formElement.config.config}
            value={formElement.config.value}
            invalid={!formElement.config.valid} 
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event)=>inputChangedHandler(event, formElement.id)}/>
        )));

    if (loading) {
        form = <Spinner />
    }

    let errorMessage = null;

    if (error) {
        errorMessage = (
            <p className={classes.FormError}>{error.message}</p>
        )
    }

    let authRedirect = null;
    if (isAuthenticated) {
        authRedirect = <Redirect to={authRedirectPath} />
    }

    return (
        <section className={classes.Auth}>
            {authRedirect}
            
            <div className={classes.SignUpContainer}> 
                <h3>{needsSignUp 
                    ? 'SIGN UP' 
                    : 'SIGN IN'}
                </h3>
                {errorMessage}
                <form onSubmit={submitHandler}>
                    {form}
                    <Button btnType="SubmitSignIn" type="submit">SUBMIT</Button>
                </form>
                    <Button
                    btnType="SignUpSwitch"
                    clicked={switchAuthModeHandler} >
                    {needsSignUp 
                        ? 'Already have an account? Switch to Sign In.' 
                        : 'Need an account? Switch to Sign Up.'}</Button>
            </div>
        </section>
    );
}

export default Auth;