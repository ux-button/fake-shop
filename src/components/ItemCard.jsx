import { Link, useNavigate } from 'react-router-dom'
import styles from './ItemCard.module.css'

const ItemCart = (props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/item/${props.item.id}`)
    }

    return (
        <div className={styles.card}>
            <img className={styles.image} src={props.item.image} />
            <h3 onClick={handleClick}>{props.item.title}</h3>
            <p>{props.item.price}</p>
            <button onClick={handleClick}>Details</button>
        </div>
    )
}

export { ItemCart }