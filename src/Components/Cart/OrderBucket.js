import React, { useContext } from "react";
import styles from "../../CSS/Cart/OrderBucket.module.css";
import ItemListOrderBucket from "./ItemListOrderBucket";
import Modal from "./Modal";
import CartContext from "../../Store/cartContext";

const OrderBucket = (props) => {
  const cartCtx = useContext(CartContext);
  return (
    <React.Fragment>
      <Modal
        className={`${styles["div-order-bucket"]}`}
        onHideCart={props.onHideCart}
      >
        <ItemListOrderBucket></ItemListOrderBucket>
        <div className={`${styles["div-order-total"]}`}>
          <p>Order Total:</p>
          <p>${cartCtx.ordersTotal.toFixed(2)}</p>
        </div>
        <div className={`${styles["div-buttons"]}`}>
          <button className={`${styles["button"]}`}>Order</button>
          <button className={`${styles["button"]}`} onClick={props.onHideCart}>
            Close
          </button>
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default OrderBucket;
