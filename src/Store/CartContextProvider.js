/**
 * The goal of this component is to manipulate the "cartContext" data and provide to whoever needs it in the app.
 */

import React, { useReducer } from "react";
import CartContext from "./cartContext";
import { addToArray } from "../JS/appFunctions";
import { act } from "@testing-library/react";

const initialState = {
  items: [],
  ordersTotal: 0,
  totalAmountOfOrders: 0,
};

const reducer = (currentState, action) => {
  if (action.type === "ADD") {
    // console.log(action.obj.id, "action");

    let updatedItems;
    let orderTotalUpdated;
    let updatedTotalAmountOfOrders;
    let idFound;
    if (currentState.items.length === 0) {
      updatedItems = currentState.items.concat(action.obj);
      orderTotalUpdated = action.obj.price;
      updatedTotalAmountOfOrders = 1; /////++++++++++++++++++=

      return {
        items: updatedItems,
        ordersTotal: orderTotalUpdated,
        totalAmountOfOrders: updatedTotalAmountOfOrders,
      };
    }
    if (currentState.items.length !== 0) {
      idFound = currentState.items.findIndex(
        (item) => item.id === action.obj.id
      );
    }

    if (idFound !== -1) {
      const objCopy = { ...currentState.items[idFound] };
      objCopy.count = objCopy.count + 1;
      console.log("currenState.totalAmount", currentState.totalAmountOfOrders);
      console.log("Obj.count", objCopy.count);
      // currentState.totalAmountOfOrders += 1; //+++++++++++++++++++=
      console.log("updatetotalORdersAMount", currentState.totalAmountOfOrders);
      currentState.items[idFound] = objCopy;
      currentState.totalAmountOfOrders += 1; //+++++++++++++++++++=
      // currentState.ordersTotal = currentState.ordersTotal + action.obj.price;
      ////test starts

      /// test ends
      // currentState.ordersTotal = currentState.ordersTotal + action.obj.price;
      // console.log(currentState.ordersTotal);
    } else {
      console.log("eee");
      updatedItems = currentState.items.concat(action.obj);
      orderTotalUpdated = currentState.ordersTotal + action.obj.price;
      updatedTotalAmountOfOrders =
        currentState.totalAmountOfOrders + action.obj.count;
      console.log(orderTotalUpdated);
      return {
        items: updatedItems,
        ordersTotal: orderTotalUpdated,
        totalAmountOfOrders: updatedTotalAmountOfOrders,
      };
    }
  }

  if (action.type === "REMOVE") {
    let idFound;
    if (currentState.items.length === 0) return;
    idFound = currentState.items.findIndex((item) => item.id === action.obj.id);

    if (currentState.items[idFound].count > 1) {
      const objCopy = { ...currentState.items[idFound] };
      console.log(objCopy, "objCopy from remove");
      objCopy.count = objCopy.count - 1;
      console.log(objCopy.count, "count from remove;");
      currentState.items[idFound] = objCopy;
      console.log(currentState.items[idFound], "items after changes");
    }

    // return currentState;
  }
  console.log(currentState, "currentState");
  return currentState;
};

const CartContextProvider = (props) => {
  const [cartState, dispatch] = useReducer(reducer, initialState);

  const addItemHandler = (obj) => {
    dispatch({ type: "ADD", obj });
  };

  const removeItemHandler = (obj) => {
    dispatch({ type: "REMOVE", obj });
  };

  const cartContext = {
    items: cartState.items,
    ordersTotal: cartState.ordersTotal,
    totalAmountOfOrder: cartState.totalAmountOfOrders,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
