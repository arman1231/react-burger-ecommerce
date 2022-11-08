import React, { useEffect } from "react";
import styles from "./ModalOverlay.module.css";
import PropTypes from "prop-types";

ModalOverlay.propTypes = {
    handleCloseModal: PropTypes.func.isRequired,
  };

export default function ModalOverlay({ handleCloseModal }) {
  function closeOnOverlay(e) {
    if (e.currentTarget === e.target) {
      handleCloseModal();
    }
  }
  function handleEscClose(e) {
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
