import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FeedItem } from "../../components/FeedItem/FeedItem";
import { WS_CONNECTION_CLOSED, WS_CONNECTION_START } from "../../services/actions/wsActions";
import {
  getMessages,
  getUser,
  getWsConnected,
} from "../../services/selectors/wsSelectors";
import styles from "./Feed.module.css";

export const Feed = () => {
  const dispatch: any = useDispatch();
  const messages = useSelector(getMessages);
  // const { user } = useSelector(getUser);
  const isConnected = useSelector(getWsConnected);

//   useEffect(() => {
//     dispatch({ type: WS_CONNECTION_START });

//     return () => {
//         dispatch({ type: WS_CONNECTION_CLOSED });
//    };
//   }, []);

  console.log(messages);
  return (
    <>
      <h1 className="text text_type_main-large pt-10 pb-5 m-0">
        Лента заказов
      </h1>
      <div className={styles.feedDivider}>
        <div className={styles.feedList}>
          <FeedItem />
        </div>
        <div className={styles.feedStatus}>
          <div className={styles.orderStatuses}>
            <div className={styles.ready}>
              <h2 className="text text_type_main-default">Готовы:</h2>
              <p
                className={`text text_type_digits-default ${styles.doneTextColor}`}
              >
                034533
              </p>
              <p
                className={`text text_type_digits-default ${styles.doneTextColor}`}
              >
                034533
              </p>
              <p
                className={`text text_type_digits-default ${styles.doneTextColor}`}
              >
                034533
              </p>
              <p
                className={`text text_type_digits-default ${styles.doneTextColor}`}
              >
                034533
              </p>
              <p
                className={`text text_type_digits-default ${styles.doneTextColor}`}
              >
                034533
              </p>
            </div>
            <div className="inProgress">
              <h2 className="text text_type_main-default">В работе:</h2>
              <p className="text text_type_digits-default">034538</p>
            </div>
          </div>
          <div className={styles.doneAllTime}>
            <h2 className="text text_type_main-default">
              Выполнено за все время:
            </h2>
            <p className={`text text_type_digits-large ${styles.textShadow}`}>
              28 752
            </p>
          </div>
          <div className="doneToday">
            <h2 className="text text_type_main-default">
              Выполнено за сегодня:
            </h2>
            <p className={`text text_type_digits-large ${styles.textShadow}`}>
              138
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
