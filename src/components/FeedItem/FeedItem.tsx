import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./FeedItem.module.css";
import bun from '../../images/bun-01s.svg'

export const FeedItem = () => {
    return (
        <div className={styles.feedItem}>
            <div className={styles.info}>
                <span className={`${styles.orderNumber} text text_type_digits-default`}>#342342</span>
                <span className={`${styles.orderDate} text text_type_main-default`}>Nov 5, 1998</span>
            </div>
            <h3 className="text text_type_main-medium">Death Star Starship Main бургер</h3>
            <div className={styles.ingredientsAndPrice}>
                <div className={styles.ingredients}>
                    <div className={styles.ingredient}><img src={bun} alt="" /></div>
                    <div className={styles.ingredient}><img src={bun} alt="" /></div>
                    <div className={styles.ingredient}><img src={bun} alt="" /></div>
                    <div className={styles.ingredient}><img src={bun} alt="" /></div>
                    <div className={styles.ingredient}><img src={bun} alt="" /></div>
                    
                </div>
                <div className={styles.priceWrapper}><span className={`${styles.price} text text_type_digits-default mr-2`}>4654</span><CurrencyIcon type="primary" /></div>
            </div>
        </div>
    )
}
