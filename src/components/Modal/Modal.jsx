import React from "react";
import ReactDOM from "react-dom/client";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot = document.getElementById("react-modals");
// const modalRoot = ReactDOM.createRoot(
//     document.getElementById("react-modals") as HTMLElement
//   );

export default function Modal({ header, children, handleCloseModal}) {
  function handleClick() {
    handleCloseModal()
  }
  return createPortal(
    <>
      <ModalOverlay handleCloseModal={handleCloseModal} />
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={handleClick}>
          <CloseIcon type="primary" />
        </button>
        {children}
      </div>
    </>,
    modalRoot
  );
}
