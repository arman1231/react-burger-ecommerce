import React, { useEffect } from "react";
import styles from "./ModalOverlay.module.css";
import PropTypes from "prop-types";

// ModalOverlay.propTypes = {
//   handleCloseModal: PropTypes.func,
// };

interface IModalOverlay {
  handleCloseModal: () => void
}

export const ModalOverlay: React.FC<IModalOverlay> = ({ handleCloseModal }) => {
  const closeOnOverlay: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (e.currentTarget === e.target) {
      handleCloseModal();
    }
  }
  const handleEscClose: (this: Window, e: KeyboardEvent) => void = (e) => {
    if (e.key === "Escape") {
      handleCloseModal();
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', handleEscClose)
    return () => {
      window.removeEventListener('keydown', handleEscClose)
    }
  }, [])

  return (
    <div
      onClick={closeOnOverlay}
      className={styles.modalOverlay}
    ></div>
  );
}
export default ModalOverlay;