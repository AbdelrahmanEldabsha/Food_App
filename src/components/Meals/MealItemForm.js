import React, { Fragment, useRef,useState } from "react";
import Input from "./Input";
import styles from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [isValid,setIsValid]=useState(true)
  const enteredInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = +enteredInputRef.current.value;
    if( enteredAmount<1||enteredAmount>5){
      setIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmount);
  };
  return (
    <Fragment>
      <form className={styles.form} onSubmit={submitHandler}>
        <Input
          ref={enteredInputRef}
          label="Amount"
          input={{
            id: props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        ></Input>
        <button>+ Add</button>
        {!isValid && <p>Add Valid Number</p>}
      </form>
    </Fragment>
  );
};

export default MealItemForm;
