import React from "react";
import Logo from "../../../assets/Logo/Brand/MockupBrand.svg";
import NavigationItems from "../NavigationItems/NavigationItems";
import SideDrawer from "../SideDrawer/SideDrawer";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import classes from "./Toolbar.module.css";
import {Link} from "react-router-dom";

const toolbar = ({show, closed, drawerToggleClicked}) => {
  return (
    <header className={classes.Toolbar}>
      <div className={classes.Container}> 
        <DrawerToggle clicked={drawerToggleClicked} />
        <>
          <SideDrawer show={show} closed={closed} />
        </>
        <div className={classes.Logo}>
          <Link to="/">
            <img src={Logo} alt={"Top Logo"} />
          </Link>
        </div>
        <nav className={classes.DesktopOnly}>
          <NavigationItems hide={show} />
        </nav>


      </div>
    </header>
  );
};

export default toolbar;
