import React, { Fragment } from "react";
import mealsImage from "../Assests/meals.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Don't eat your fingers</h1>
        <HeaderCartButton onClick={props.onClick} />
      </header>
      <div className={styles[`main-image`]}>
        <img src={mealsImage} alt="Hello" />
      </div>
    </Fragment>
  );
};

export default Header;
