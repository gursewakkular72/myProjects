import React, { useState } from "react";

/**
 * "createContext" return an object containing a component. The contained component can be accessed through "Provider" property.
 */

const CartContext = React.createContext({
  items: [],
  ordersTotal: 0,
  totalAmountOfOrder: 0,
  addItem: (obj) => {},
  removeItem: (obj) => {},
});

export default CartContext;
