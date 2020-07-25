import React, {useEffect, useCallback} from "react";
import {Redirect} from "react-router-dom";
import {useDispatch} from "react-redux";
import * as action from "../../../store/actions/index";

const Logout = (props) => {
  const dispatch = useDispatch();

  const onLogout = useCallback(() => dispatch(action.logout()), [dispatch]);
  const initStoreInventory = useCallback(
    () => dispatch(action.fetchStoreInventory()),
    [dispatch],
  );

  useEffect(() => {
    onLogout();
    initStoreInventory();
  }, [onLogout, initStoreInventory]);

  return <Redirect to="/" />;
};

export default Logout;
