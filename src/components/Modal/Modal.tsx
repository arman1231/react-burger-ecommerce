import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { FC } from "react";

const modalRoot = document.getElementById("react-modals") as HTMLElement;

Modal.propTypes = {
  children: PropTypes.element,
  handleCloseModal: PropTypes.func,
};

interface IModalProps {
  children: React.ReactNode;
  handleCloseModal: () => void
}

export default function Modal ({ children, handleCloseModal }: IModalProps): React.ReactPortal {
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
