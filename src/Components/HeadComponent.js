import React from "react";

import styles from "../CSS/HeadComponent.module.css";
import IntroductionCard from "./IntroductionCard";
import Navigation from "./Navigation";

const HeadComponent = (props) => {
  return (
    <React.Fragment>
      <div className={`${styles["div-headcomponent"]}`}>
        <Navigation onShowCart={props.onShowCart}></Navigation>
        <IntroductionCard></IntroductionCard>
        <div className={`${styles["div-image"]}`}></div>
        <div className={`${styles["div-image-cover"]}`}></div>
      </div>
    </React.Fragment>
  );
};

export default HeadComponent;
