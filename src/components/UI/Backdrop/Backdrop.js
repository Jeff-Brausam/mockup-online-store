import React from 'react';

import classes from './Backdrop.module.css';

const backdrop = (props) => (
    props.show ? <div className={props.show ? classes.Backdrop : null} onClick={props.clicked}></div> : null
);

export default backdrop;