import { useReducer } from "react"
import styles from './Cart.module.css'

function Cart ({ items }) {

    return(
        <div className={styles.cart}>
            {items.map(item => {
                return(
                    <div>
                        <span>
                            <p>{item.item.title}</p>
                            <p>{item.item.price}</p>
                            <p>{item.quantity}</p>
                        </span>
                    </div>
                )
            })}
        </div>
    )
}

export { Cart }