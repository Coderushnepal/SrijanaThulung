import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as routes from "./constant/router";
import Home from "./components/Home";
import Cart from "./components/Cart";
import OrderNow from "./components/OrderNow";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={routes.HOME} component={Home} />
      <Route exact path={routes.CART} component={Cart} />
      <Route exact path={routes.ORDERNOW} component={OrderNow} />

      {/* <Route exact path="/" component={Home} />
      <Route exact path="/cart" component={Cart} /> */}
    </Switch>
  </BrowserRouter>
);
export default Router;
