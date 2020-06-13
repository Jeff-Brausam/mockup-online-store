import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../../assets/Logo/MiniLogo/MockupMiniLogo.svg';
import NavigationItems from '../NavigationItems/NavigationItems';
import SideDrawer from '../SideDrawer/SideDrawer';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => {
    return(
        <header className={classes.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked}/>
            <>
                <SideDrawer show={props.show} closed={props.closed}/>
            </>
            <div className={classes.Logo}>
                <img src={Logo} alt={'Top Logo'} />  
            </div> 
            <nav className={classes.DesktopOnly}>
                <NavigationItems hide={props.show}/>    
            </nav>      
        </header>);
}


export default toolbar;