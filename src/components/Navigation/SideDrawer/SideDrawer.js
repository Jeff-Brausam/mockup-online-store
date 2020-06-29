import React from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Brand from '../../../assets/Logo/Brand/MockupBrand.svg';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import { Link } from 'react-router-dom';


const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.show){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <>
            <Backdrop show={props.show} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                <button onClick={props.closed}>X</button>
                <div className={classes.LogoDiv}>
                    <Link to='/'>
                        <img src={Brand} className={classes.Logo} alt={'Top Logo'} /> 
                    </Link>
                </div> 
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </>
    );
};

export default sideDrawer;