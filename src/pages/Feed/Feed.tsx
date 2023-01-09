import { FeedItem } from "../../components/FeedItem/FeedItem";
import styles from "./Feed.module.css";


export const Feed = () => {
    // const ws = new WebSocket("wss://norma.nomoreparties.space/orders/all");
    // // console.log(wss);
    // // ws.onopen = (event: Event) => {
    // //     console.log(event)
    // // } 
    // const data = useSelector(
    //     (state) => state.burgerIngredients.burgerIngredients
    // );
    // console.log(data);
    
    // ws.onmessage = (event: MessageEvent) => {
    //     console.log(JSON.parse(event.data).orders[0].ingredients)
    // }
    return (
        <>
            <h1 className="text text_type_main-large pt-10 pb-5 m-0">Лента заказов</h1>
            <div className={styles.feedDivider}>
                <div className={styles.feedList}>
                    <FeedItem />
                </div>
                <div className={styles.feedStatus}>
                    <div className={styles.orderStatuses}>
                        <div className="ready">
                            <h2 className="text text_type_main-default">Готовы:</h2>
                            <p className="text text_type_digits-default">034533</p>
                        </div>
                        <div className="inProgress">
                            <h2 className="text text_type_main-default">В работе:</h2>
                            <p className="text text_type_digits-default">034538</p>
                        </div>
                    </div>
                    <div className="doneAllTime">
                        <h2 className="text text_type_main-default">Выполнено за все время:</h2>
                        <p className="text text_type_digits-large">28 752</p>
                    </div>
                    <div className="doneToday">
                        <h2 className="text text_type_main-default">Выполнено за сегодня:</h2>
                        <p className="text text_type_digits-large">138</p>
                    </div>
                </div>
            </div>
        </>
    )
}
