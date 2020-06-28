import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages/home";

const routes = [{ name: "home", path: "/", component: HomePage }];

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, key) => (
          <Route  path={route.path} key={key} component={route.component} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
