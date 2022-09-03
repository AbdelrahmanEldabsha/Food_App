import styles from "./Cart.module.css";
import React, { useContext } from "react";
import CartModal from "./CartModal";
import DataContext from "../../dataContext/data-context";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartCtx = useContext(DataContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const cartItemRemoveHandler = (id) => {
    cartCtx.deleteitem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cardItems = (
    <ul className={styles["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAddHandler.bind(null, item)}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
        ></CartItem>
      ))}
    </ul>
  );
  return (
    <div>
      <CartModal onClose={props.onClose}>
        {cardItems}
        <div className={styles.total}>
          <span> Total amount</span>
          <span> {totalAmount}</span>
        </div>
        <div className={styles.actions}>
          <button className={styles["button--alt"]} onClick={props.onClose}>
            Close
          </button>

          <button className={styles.button}> Order</button>
        </div>
      </CartModal>
    </div>
  );
};

export default Cart;
