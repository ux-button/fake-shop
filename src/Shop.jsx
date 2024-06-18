import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Shop.module.css'
import { ItemCart } from './components/ItemCard';

const Shop = () => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ allItems, setAllItems ] = useState();

    useEffect(() => {
        const fetchItems = async (url) => {
            try {
                const response = await fetch(url, {mode: 'cors'});
                if (!response.ok) {
                    throw new Error(`Server response ${response.status}`);
                }
                const items = await response.json();
                setAllItems(
                    items.map(item => <ItemCart key={item.id} item={item} />)
                );
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchItems('https://fakestoreapi.com/products?limit=20');
    }, [])

    if (isLoading) {
        return(
            <p>Loading</p>
        )
    }

    return (
        <div className={styles.allitems}>{allItems}</div>
    )
}

export { Shop }