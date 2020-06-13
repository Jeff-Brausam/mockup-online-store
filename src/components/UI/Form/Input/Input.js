import React from 'react';
 
import classes from './Input.module.css';



const input = (props) => {
    let input = null
    const inputClasses = [classes.InputElement];

    if ( props.invalid && props.shouldValidate && props.touched) { 
        inputClasses.push(classes.Invalid);
    }

    switch ( props.type ) {
        case ('input'):
            input = <input 
                {...props.config}
                className={inputClasses.join(' ')}
                value={props.value}
                onChange={props.changed}/>
            break;
        case ('textarea'): 
            input = <input 
                {...props.config}
                className={inputClasses.join(' ')}
                value={props.value}
                onChange={props.changed} />
            break;
        case ('select'):
            input = (
                <select
                // value={props.value}
                onChange={props.changed} 
                className={inputClasses.join(' ')}
                defaultValue={'Fastest'}>
                    {props.config.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>))}
                </select>) 
                break;
        default: input = <input 
                    {...props.config}
                    className={classes.InputElement} 
                    value={props.value} />
    }

    let validationError = null;
    if (props.invalid && props.touched) {
    validationError = <p>Please enter a valid {props.type}!</p>;
    // validationError = <p>Please enter a valid {props.config.type}!</p>;
    }
    

    return (
        <div className={classes.Input}>
            {input}
            {validationError}
        </div>
    );
}
 
export default input;