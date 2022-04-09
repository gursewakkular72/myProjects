import React from "react";
import Meal from "./Meal";

const Menu = (props) => {
  const meals = props.meals.map((item) => {
    return (
      <Meal
        key={item.id}
        id={item.id}
        name={item.name}
        description={item.description}
        price={item.price}
        count={1}
      ></Meal>
    );
  });
  return <React.Fragment>{meals}</React.Fragment>;
};

export default Menu;
