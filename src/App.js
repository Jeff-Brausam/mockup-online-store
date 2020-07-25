import React, {useEffect, useCallback, Suspense} from "react";
import {Route, Switch, withRouter, Redirect} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import Store from "./containers/Store/Store";
import Logout from "./containers/Auth/Logout/Logout";
import "./App.css";
import Layout from "./hoc/layout/Layout";
import * as action from "./store/actions/index";

const App = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.token !== null);

  const dispatch = useDispatch();
  const onTryAutoSignup = useCallback(() => dispatch(action.authCheckState()), [
    dispatch,
  ]);

  useEffect(() => {
    onTryAutoSignup();
  }, [onTryAutoSignup]);

  const Checkout = React.lazy(() => {
    return import("./containers/Checkout/Checkout");
  });
  const Orders = React.lazy(() => {
    return import("./containers/Order/Order");
  });
  const Auth = React.lazy(() => {
    return import("./containers/Auth/Auth");
  });

  let routes = (
    <Switch>
      <Route path="/checkout" render={(props) => <Checkout {...props} />} />
      <Route path="/signup" render={(props) => <Auth {...props} />} />
      <Route path="/" exact component={Store} />
      <Redirect to="/" />
    </Switch>
  );

  if (isAuthenticated) {
    routes = (
      <Switch>
        <Route path="/checkout" render={(props) => <Checkout {...props} />} />
        <Route path="/orders" render={(props) => <Orders {...props} />} />
        <Route path="/Logout" component={Logout} />
        <Route path="/" exact component={Store} />
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <div className="App">
      <Layout>
        <Suspense fallback={<p>Loading...</p>}>{routes}</Suspense>
      </Layout>
    </div>
  );
};

export default withRouter(App);
