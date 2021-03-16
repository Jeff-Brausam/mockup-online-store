import React from "react";
import MockupBrand from "../../../assets/Logo/Brand/MockupBrand.svg";
import classes from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={classes.Banner}>
      <img src={MockupBrand} alt="Main Banner" />
    </div>
  );
};

export default Banner;
