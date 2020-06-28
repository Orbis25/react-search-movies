import React from "react";
import Router from "./router";
import { Provider } from "react-redux";
const App = ({ store }) => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
