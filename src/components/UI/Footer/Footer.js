import React from "react";
import classes from "./Footer.module.css";

const Footer = React.memo(() => {
  return (
    <footer className={classes.Footer}>
      <p>This is a portfolio project, no items will actually be sold.</p>
    </footer>
  );
});

export default Footer;
