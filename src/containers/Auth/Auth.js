import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { updateObject, checkValidity } from '../../shared/utility';
import Input from '../../components/UI/Form/Input/Input';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './Auth.module.css';
import * as action from '../../store/actions/index';
import Button from '../../components/UI/Button/Button';

class Auth extends Component {
    state = {
        controls: {
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
        },
        needsSignUp: true,
    }

    componentDidMount(){
        if (!this.props.ordering && this.props.authRedirectPath !== '/'){
            this.props.onSetAuthRedirectPath();
        }   
    }

    inputChangedHandler = (event, controlName) => {
        const updatedControls = updateObject(this.state.controls, {
            [controlName]: updateObject(this.state.controls[controlName], {
                ...this.state.controls[controlName],
                value: event.target.value,
                valid: checkValidity(event.target.value, this.state.controls[controlName].validation),
                touched: true
            })
        });
        this.setState({controls: updatedControls});
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {needsSignUp: !prevState.needsSignUp};
        })
    }

    submitHandler = (event) => {
        event.preventDefault();
        this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.needsSignUp)
    }

    render(){
        const formElementsArray = []; 

        for (let key in this.state.controls){
            formElementsArray.push({
                id: key,
                config: this.state.controls[key]
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
                    changed={(event)=>this.inputChangedHandler(event, formElement.id)}/>
                )))

        if (this.props.loading) {
            form = <Spinner />
        }

        let errorMessage = null;

        if (this.props.error) {
            errorMessage = (
            <p className={classes.FormError}>{this.props.error.message}</p>
            )
        }

        let authRedirect = null;
        if (this.props.isAuthenticated) {
            authRedirect = <Redirect to={this.props.authRedirectPath} />
        }

        return (
            <div className={classes.Auth}>
                {authRedirect}
                <h3>{this.state.needsSignUp 
                    ? 'SIGN UP' 
                    : 'SIGN IN'}</h3>
                <hr />
                <div className={classes.SignUpContainer}> 
                    {errorMessage}
                        <form onSubmit={this.submitHandler}>
                        {form}
                        <Button btnType="SubmitSignIn" type="submit">SUBMIT</Button>
                    </form>
                        <Button
                        btnType="SignUpSwitch"
                        clicked={this.switchAuthModeHandler}
                        >{this.state.needsSignUp 
                            ? 'Already have an account? Switch to Sign In.' 
                            : 'Need an account? Switch to Sign Up.'}</Button>
                </div>
            </div>
        );
    }
}
 

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        ordering: state.onlineStore.ordering,
        authRedirectPath: state.auth.authRedirectPath
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, needsSignUp) => dispatch(action.auth(email, password, needsSignUp)),
        onSetAuthRedirectPath: () => dispatch(action.setAuthRedirectPath('/')),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Auth);