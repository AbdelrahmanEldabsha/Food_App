import React, { Fragment } from "react";
import styles from "./MealsOverview.module.css";
const MealsOverview = () => {
  return (
    <Fragment>
      <div className={styles.summary}>
        <h2>Delecious food, Delivered to you</h2>
        <div>
          Choose your favourite meal from our menu and enjoy the taste of
          happiness
        </div>
        <p>All our meals are made by love by a professional chiefs</p>
      </div>
    </Fragment>
  );
};

export default MealsOverview;
