import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store"; // Import the Redux store

ReactDOM.render(
  <Provider store={store}>
    {" "}
    {/* Wrapping the app in Provider */}
    <App />
  </Provider>,
  document.getElementById("root")
);
