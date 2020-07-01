import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "../pages/home";
import ResultsPage from "../pages/results";
import DetailPage from "../pages/detail";
import { resultsUrl, homeUrl, detailRoute } from "./routes.json";

const routes = [
  { name: "results", path: resultsUrl, component: ResultsPage },
  { name: "detail", path: detailRoute, component: DetailPage },
];

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
