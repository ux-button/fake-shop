import styles from './ItemCard.module.css'

const ItemCart = (props) => {
    const handleClick = () => {

    }

    return (
        <div className={styles.card}>
            <img className={styles.image} src={props.item.image} />
            <h3>{props.item.title}</h3>
            <p>{props.item.price}</p>
            <button>Details</button>
        </div>
    )
}

export { ItemCart }