import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("react-modals");

Modal.propTypes = {
  children: PropTypes.element,
  handleCloseModal: PropTypes.func,
};

export default function Modal({ children, handleCloseModal }) {
  function handleClick() {
    handleCloseModal();
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
