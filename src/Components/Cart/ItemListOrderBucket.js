import React, { useContext } from "react";
import styles from "../../CSS/Cart/ItemListOrderBucket.module.css";
import CartContext from "../../Store/cartContext";
const ItemListOrderBucket = () => {
  const cartCtx = useContext(CartContext);

  const itemsInCart = cartCtx.items.map((item) => {
    return (
      <div key={item.id} className={`${styles["div-item-details"]}`}>
        <p>{item.name}</p>
        <p className={styles.count}>x{item.count}</p>
        <p className={styles.price}>${item.price}</p>
      </div>
    );
  });

  return <React.Fragment>{itemsInCart}</React.Fragment>;
};

export default ItemListOrderBucket;
