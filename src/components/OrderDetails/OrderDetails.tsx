import doneSvg from "../../images/graphics.svg";
import styles from "./OrderDetails.module.css";
import { useSelector } from 'react-redux';

const OrderDetails: React.FC = () => {
  const orderDetailsData = useSelector((state: any) => state.orderDetails.orderDetailsData)
  return (
      <div className={styles.orderDetails}>
        <p className={`${styles.glow} text text_type_digits-large pt-30 mb-8`}>{orderDetailsData.order && orderDetailsData.order.number}</p>
        <h1 className="text text_type_main-medium mb-15">идентификатор заказа</h1>
        <img src={doneSvg} alt="ordered" />
        <p className="text text_type_main-default mt-15 mb-2">Ваш заказ начали готовить</p>
        <p className="text text_type_main-default text_color_inactive pb-30">
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
  );
}
export default OrderDetails;