import React from "react";
import Modal from "../Modal/Modal";
import doneSvg from "../../images/graphics.svg";
import styles from "./OrderDetails.module.css";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';

OrderDetails.propTypes = {
    handleCloseModal: PropTypes.func.isRequired,
  };

export default function OrderDetails({ handleCloseModal }) {
  const orderDetailsData = useSelector(state => state.orderDetails.orderDetailsData)
  console.log(orderDetailsData);
  return (
    <Modal handleCloseModal={handleCloseModal}>
      <div className={styles.orderDetails}>
        <p className={`${styles.glow} text text_type_digits-large pt-30 mb-8`}>{orderDetailsData.order && orderDetailsData.order.number}</p>
        <h1 className="text text_type_main-medium mb-15">идентификатор заказа</h1>
        <img src={doneSvg} alt="ordered" />
        <p className="text text_type_main-default mt-15 mb-2">Ваш заказ начали готовить</p>
        <p className="text text_type_main-default text_color_inactive pb-30">
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
    </Modal>
  );
}
