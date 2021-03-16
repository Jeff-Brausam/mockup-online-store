import React from "react";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Brand from "../../../assets/Logo/Brand/MockupBrand.svg";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideDrawer.module.css";
import {Link} from "react-router-dom";

const sideDrawer = ({show, closed}) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
 
  if (show) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <>
      <Backdrop show={show} clicked={closed} />
      <div className={attachedClasses.join(" ")} onClick={closed}>
        <button onClick={closed}>X</button>
        <div className={classes.LogoDiv}>
          <Link to="/">
            <img src={Brand} className={classes.Logo} alt={"Top Logo"} />
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
