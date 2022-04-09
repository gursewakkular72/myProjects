import React from "react";
import styles from "../CSS/IntroductionCard.module.css";

const IntroductionCard = (props) => {
  return (
    <React.Fragment>
      <div className={`${styles["div-introduction-card"]}`}>
        <h1 className={`${styles["div-introduction-card-h1"]}`}>
          Delicious food, just few clicks away
        </h1>
        <p className={`${styles["div-introduction-card-para"]}`}>
          We bring the freshly cooked food to your doorstep.
        </p>
        <p className={`${styles["div-introduction-card-para"]}`}>
          All the meals are prepared with quality picked organic ingredients and
          of course by experienced chefs.
        </p>
      </div>
    </React.Fragment>
  );
};

export default IntroductionCard;
