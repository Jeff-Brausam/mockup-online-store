import React, { useState } from 'react';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/UI/Footer/Footer';
import classes from './Layout.module.css'


const Layout = props => {
    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const sideDrawerClosedHandler = () => {
        setShowSideDrawer(false);
    }

    const sideDrawerOpenHandler = () => {
        setShowSideDrawer(!showSideDrawer);
    }

    return(
        <>
            <Toolbar show={showSideDrawer} 
            closed={sideDrawerClosedHandler} 
            drawerToggleClicked={sideDrawerOpenHandler}/>
            <main className={classes.MainPage}>
                {props.children}
            </main>
            <Footer />
        </>
    );
}
export default Layout;