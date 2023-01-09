import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./FeedItem.module.css";
import { useSelector } from "../../utils/hooks";

export const FeedItem = () => {
    const ws = new WebSocket("wss://norma.nomoreparties.space/orders/all");
    // console.log(wss);
    // ws.onopen = (event: Event) => {
    //     console.log(event)
    // } 
    const data = useSelector(
        (state) => state.burgerIngredients.burgerIngredients
    );
    console.log(data);
    ws.onopen = (event) => {
        ws.onmessage = (event: MessageEvent) => {
            // console.log(JSON.parse(event.data).orders[0].ingredients)
            // ingredients = JSON.parse(event.data).orders[0].ingredients;
        }
    }
    const ingredients = [
        "60d3b41abdacab0026a733c7",
        "60d3b41abdacab0026a733cf",
        "60d3b41abdacab0026a733c8",
        "60d3b41abdacab0026a733c7",
        "60d3b41abdacab0026a733c6"
    ]

    const filteredArray = data?.filter(value => ingredients.includes(value._id));

    console.log(filteredArray);

    return (
        <div className={styles.feedItem}>
            <div className={styles.info}>
                <span className={`${styles.orderNumber} text text_type_digits-default`}>#342342</span>
                <span className={`${styles.orderDate} text text_type_main-default`}>Nov 5, 1998</span>
            </div>
            <h3 className="text text_type_main-medium">Death Star Starship Main бургер</h3>
            <div className={styles.ingredientsAndPrice}>
                <div className={styles.ingredients}>
                    {
                        filteredArray?.map((el, i) => <div className={styles.ingredient} style={{marginLeft: `${(filteredArray.length - i - 1) - 25}px`}}><img className={styles.image} src={el.image_mobile} alt="" /></div>)
                    }
                </div>
                <div className={styles.priceWrapper}><span className={`${styles.price} text text_type_digits-default mr-2`}>
                    {
                        filteredArray?.reduce((prev, cur) => {
                            return prev += cur.price;
                        }, 0)
                    }</span><CurrencyIcon type="primary" /></div>
            </div>
        </div>
    )
}
