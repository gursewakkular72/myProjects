import React, { useState, useEffect } from "react";

import styles from "../CSS/AddMealForm.module.css";

const AddMealForm = (props) => {
  const [orderAmount, setOrderAmount] = useState(0);

  const onReduceHandler = (e) => {
    e.preventDefault();
    setOrderAmount((prev) => {
      if (prev > 0) {
        props.removeItemsFromCart();
        return prev - 1;
      } else {
        props.removeItemsFromCart();
        return prev;
      }
    });
  };

  const onAddHandler = (e) => {
    e.preventDefault();
    setOrderAmount((prev) => {
      if (prev >= 0) {
        props.addItemsToCart();
        return prev + 1;
      } else {
        props.addItemsToCart();
        return prev;
      }
    });
  };

  useEffect(() => {
    if (orderAmount !== 0) {
      props.addItemsToCart();
    }
  }, [orderAmount]);

  return (
    <React.Fragment>
      <div className={`${styles["div-form"]}`}>
        <button className={`${styles["button"]}`} onClick={onReduceHandler}>
          -
        </button>
        <div className={`${styles["div-amount"]}`}>{orderAmount}</div>
        <button className={`${styles["button"]}`} onClick={onAddHandler}>
          +
        </button>
      </div>
    </React.Fragment>
  );
};

export default AddMealForm;
