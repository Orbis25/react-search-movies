import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "../pages/home";
import ResultsPage from "../pages/results";
import { resultsUrl, homeUrl } from "./routes.json";

const routes = [{ name: "results", path: resultsUrl, component: ResultsPage }];

const Router = () => {
  return (
    <BrowserRouter>
      <Route exact path={homeUrl} component={HomePage} />
      {routes.map((route, key) => (
        <Route path={route.path} key={key} component={route.component} />
      ))}
    </BrowserRouter>
  );
};

export default Router;
