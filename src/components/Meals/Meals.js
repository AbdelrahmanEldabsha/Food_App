import React, { Fragment } from "react";
import MealsOverview from "./MealsOverview";
import MenuMeals from "./MenuMeals";

const Meals = () => {
  return (
    <Fragment>
      <MealsOverview></MealsOverview>
      <MenuMeals></MenuMeals>
    </Fragment>
  );
};

export default Meals;
