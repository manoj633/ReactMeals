import React from "react";
import MealsSummary from "./MealsSummary";
import AvailbaleMeals from "./AvailableMeals";

const Meals = (props) => {
  return (
    <>
      <MealsSummary />
      <AvailbaleMeals />
    </>
  );
};

export default Meals;
