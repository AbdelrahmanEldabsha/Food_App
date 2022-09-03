import React, { Fragment, useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import DataContext from "../../dataContext/data-context";

const HeaderCartButton = (props) => {
  const dataCtx=useContext(DataContext);
  const cartItemNumbers= dataCtx.items.reduce((curNum,item)=>{
return curNum + item.amount
  },0)
    return (
    <Fragment>
      <button className={styles.button} onClick={props.onClick}>
        <span className={styles.icon}>
          <CartIcon></CartIcon>
        </span>
        <span> Your Cart</span>
        <span className={styles.badge}> {cartItemNumbers}</span>
      </button>
    </Fragment>
  );
};

export default HeaderCartButton;
