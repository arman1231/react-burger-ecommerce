import { FeedItem } from "../../components/FeedItem/FeedItem";
import styles from "./Feed.module.css";

export const Feed = () => {
    return (
        <>
            <h1 className="text text_type_main-large pt-10 pb-5 m-0">Лента заказов</h1>
            <div className={styles.feedDivider}>
                <div className={styles.feedList}>
                    <FeedItem />
                </div>
                <div className={styles.feedStatus}>2</div>
            </div>
        </>
    )
}
