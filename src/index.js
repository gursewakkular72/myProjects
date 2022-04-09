import ReactDOM from "react-dom";
import React from "react";
import "./index.css";
import App from "./App";
import CartContextProvider from "./Store/CartContextProvider.js";

ReactDOM.render(
  <CartContextProvider>
    <App />
  </CartContextProvider>,

  document.getElementById("root")
);
