import { Link, useNavigate } from 'react-router-dom'
import styles from './ItemCard.module.css'
import { useReducer } from 'react';
import { Reducer, currentCart, ACTIONS } from '../Reducer';

const ItemCard = (props) => {
    const navigate = useNavigate();
    const [cart, despatch] = useReducer(Reducer, initialCart);

    function handleClick () {
        navigate(`/item/${props.item.id}`)
    }

    return (
        <div className={styles.card}>
            <img className={styles.image} src={props.item.image} />
            <h3 onClick={handleClick}>{props.item.title}</h3>
            <p>{props.item.price}</p>
            <button onClick={handleClick}>Details</button>
            <button onClick={() => props.handleClick(props.item)}>Add to cart</button>
        </div>
    )
}

export { ItemCard }