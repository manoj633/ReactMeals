import React from "react";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german speciality",
    price: 22.99,
  },
  {
    id: "m3",
    name: "Barbeque burger",
    description: "American, raw, meaty",
    price: 22.99,
  },
  {
    id: "m4",
    name: "Green bowl",
    description: "Healthy.. and green..",
    price: 22.99,
  },
];
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => <li>{meal.name}</li>);

  return <section className={classes.meals}>{mealsList}</section>;
};

export default AvailableMeals;
