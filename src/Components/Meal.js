import React, { useContext } from "react";
import styles from "../CSS/Meal.module.css";
import AddMealForm from "./AddMealForm";
import CartContext from "../Store/cartContext";

const Meal = (props) => {
  const cartCtx = useContext(CartContext);
  const addItemsToCart = () => {
    cartCtx.addItem(props);
  };

  const removeItemsFromCart = () => {
    cartCtx.removeItem(props);
  };

  return (
    <React.Fragment>
      <div className={`${styles["div-meal"]}`}>
        <div>
          <p className={`${styles["div-meal-name"]}`}>{props.name}</p>
          <p className={`${styles["div-meal-description"]}`}>
            {props.description}
          </p>
          <p className={`${styles["div-meal-price"]}`}>{`$` + props.price}</p>
        </div>
        <div className={`${styles["div-add-meal-form"]}`}>
          <AddMealForm
            addItemsToCart={addItemsToCart}
            removeItemsFromCart={removeItemsFromCart}
          ></AddMealForm>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Meal;
