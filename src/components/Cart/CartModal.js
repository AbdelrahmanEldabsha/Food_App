import styles from "./CartModal.module.css";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
const CartModal = (props) => {
  const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onClose}/>;
  };
  const Modal = (props) => {
    return (
      <Fragment>
        <div className={styles.modal}>
          <div className={styles.content}> {props.children}</div>
        </div>
      </Fragment>
    );
  };
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <Modal> {props.children}</Modal>,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default CartModal;
