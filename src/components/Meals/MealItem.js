import React, { Fragment,useContext } from "react";
import MealItemForm from "./MealItemForm";
import styles from "./MealsItem.module.css";
import DataContext from "../../dataContext/data-context";
// import Card from "../UI/Card";

const MealItem = (props) => {
const cartCtx=useContext(DataContext);

const addToCartHandler=(amount)=>{
cartCtx.addItem({
  id:props.id,
  name:props.name,
  amount:amount,
  price:props.price
})
}

  return (
    <Fragment>
      <li className={styles.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={styles.description}>{props.description}</div>
          <div className={styles.price}>{`$ ${props.price}`}</div>
        </div>

        <div>
          <MealItemForm id={props.id} onAddToCart={addToCartHandler}></MealItemForm>
        </div>
      </li>
    </Fragment>
  );
};

export default MealItem;
