import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { CLEAR_MODAL_INGRIDIENT_DATA } from "../../services/actions/cart";

const modalRoot = document.getElementById("react-modals");

Modal.propTypes = {
  children: PropTypes.element,
  handleCloseModal: PropTypes.func,
};

export default function Modal({ children, handleCloseModal }) {
  const dispatch = useDispatch();
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
