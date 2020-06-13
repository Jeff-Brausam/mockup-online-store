import React from 'react';

import Brand from '../../../assets/Logo/Brand/MockupBrand.svg';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.show){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <>
            <Backdrop show={props.show} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <button onClick={props.closed}>X</button>
                <div className={classes.LogoDiv}>
                    <img src={Brand} className={classes.Logo} alt={'Top Logo'} /> 
                </div> 
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </>
    );
};

export default sideDrawer;