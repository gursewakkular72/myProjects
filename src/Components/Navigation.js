import React, { useContext, useState } from "react";
// import { useEffect } from "react/cjs/react.production.min";
import styles from "../CSS/Navigation.module.css";
import CartContext from "../Store/cartContext";

const Navigation = (props) => {
  const cartCtx = useContext(CartContext);
  console.log("cartCtx", cartCtx);
  console.log("*******************************");

  const dataObject = {
    "data-item-in-cart": cartCtx.totalAmountOfOrder + "",
  };
  return (
    <React.Fragment>
      <nav className={`${styles["div-nav"]}`}>
        <a className={`${styles["nav-a"]}`} href="#">
          Meals By React
        </a>
        <ul className={`${styles["nav-ul"]}`}>
          <li className={`${styles["nav-ul-li"]}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="#0c110b"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none"></rect>
              <path d="M223.9,65.4l-12.2,66.9A24,24,0,0,1,188.1,152H72.1l4.4,24H184a24,24,0,1,1-24,24,23.6,23.6,0,0,1,1.4-8H102.6a23.6,23.6,0,0,1,1.4,8,24,24,0,1,1-42.2-15.6L34.1,32H16a8,8,0,0,1,0-16H34.1A16,16,0,0,1,49.8,29.1L54.7,56H216a7.9,7.9,0,0,1,6.1,2.9A7.7,7.7,0,0,1,223.9,65.4Z"></path>
            </svg>
          </li>
          <li
            className={`${styles["nav-ul-li"]} ${styles["nav-ul-li-last"]}`}
            {...dataObject}
          >
            <button className={styles.button} onClick={props.onShowCart}>
              Cart
            </button>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Navigation;
