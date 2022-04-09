import React, { useState, useContext } from "react";
import { addToArray, removeFromArray, countOrders } from "./JS/appFunctions";
// import HeadComponent from "./Components/HeadComponent";
import HeadComponent from "./Components/HeadComponent";
import Menu from "./Components/Menu";
import { DUMMY_MEALS } from "./JS/meals";
import styles from "./App.module.css";
import OrderBucket from "./Components/Cart/OrderBucket";
import CartContextProvider from "./Store/CartContextProvider";
import CartContext from "./Store/cartContext";
// import { useContext } from "react/cjs/react.production.min";
// import countContext from "./Store/countContext";

function App() {
  const cartCtx = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  const displayCart = () => {
    setShowCart(true);
    console.log(cartCtx.items, "items in cart");
    console.log(cartCtx.ordersTotal, "total");
    console.log(cartCtx.totalAmountOfOrder, "total order count");
  };

  const hideCart = () => {
    setShowCart(false);
  };

  return (
    <div className={`${styles["div-app"]}`}>
      <HeadComponent onShowCart={displayCart}></HeadComponent>
      <div className={`${styles["div-menu"]}`}>
        <Menu meals={DUMMY_MEALS}></Menu>
      </div>
      {showCart && <OrderBucket onHideCart={hideCart}></OrderBucket>}
    </div>
  );
}

export default App;
