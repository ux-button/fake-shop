import { useNavigate } from 'react-router-dom'
import styles from './ItemCard.module.css'
import { useOutletContext } from 'react-router-dom';


const ItemCard = ({ item }) => {
    const navigate = useNavigate();
    const [ state, dispatch ] = useOutletContext();

    function handleClick () {
        navigate(`/item/${item.id}`)
    }

    function handleAddToCart () {
        dispatch({
            type: 'add-to-cart',
            payload: {
                id: item.id,
                title: item.title,
                price: item.price,
            }
        })
    }

    return (
        <div className={styles.card}>
            <img className={styles.image} src={item.image} />
            <h3 onClick={handleClick}>{item.title}</h3>
            <p>{item.price}</p>
            <button onClick={handleClick}>Details</button>
            <button onClick={handleAddToCart}>Add to cart</button>
        </div>
    )
}

export { ItemCard }