import styles from './Cart.module.css'
import { ACTIONS } from '../Reducer';

function Cart ({ items, removeFromCart, decrease, increase }) {
    let totalPrice = 0;
    return(
        <div className={styles.cart}>
            {items.map(item => {
                totalPrice += item.item.price * item.quantity;
                return(
                    <div key={crypto.randomUUID()}>
                        <p>{item.item.title}</p>
                        <p>${item.item.price} ✦ {item.quantity}
                            <span>
                                <button onClick={() => decrease(item.id, item.quantity)}>-</button>
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                                <button onClick={() => increase(item.id)}>+</button>
                            </span>
                        </p>
                    </div>
                )
            })}
        <p>Total: {totalPrice}</p>
        </div>
    )
}

export { Cart }