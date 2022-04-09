import React from "react";
import { createPortal } from "react-dom";
import styles from "../../CSS/Cart/Modal.module.css";

const location = document.getElementById("overlays");

const ModalOverlay = (props) => {
  return (
    <React.Fragment>
      <div className={styles.backdrop} onClick={props.onHideCart}></div>
    </React.Fragment>
  );
};

const ModalContent = (props) => {
  return (
    <React.Fragment>
      <div className={styles.modal}>{props.children}</div>
    </React.Fragment>
  );
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {createPortal(
        <ModalOverlay onHideCart={props.onHideCart}></ModalOverlay>,
        location
      )}
      {createPortal(<ModalContent>{props.children}</ModalContent>, location)}
    </React.Fragment>
  );
};

export default Modal;
