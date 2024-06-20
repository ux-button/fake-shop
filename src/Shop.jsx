import { useEffect, useReducer, useState } from 'react'
import { Link } from 'react-router-dom'

import { ItemCard } from './components/ItemCard';
import styles from './Shop.module.css'
import { ACTIONS, Reducer, currentCart } from './Reducer';
import { Cart } from './components/Cart';


const Shop = () => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ allItems, setAllItems ] = useState();

    const [ cart, despatch ] = useReducer(Reducer, currentCart);

    useEffect(() => {
        const fetchItems = async (url) => {
            try {
                const response = await fetch(url, {mode: 'cors'});
                if (!response.ok) {
                    throw new Error(`Server response ${response.status}`);
                }
                const items = await response.json();
                setAllItems(
                    items.map(item => <ItemCard key={item.id} item={item} handleClick={handleAddToCart} />)
                );
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchItems('https://fakestoreapi.com/products?limit=20');
    }, [])

    function handleAddToCart (product) {
        despatch({
            type: ACTIONS.ADD_TO_CART,
            payload: {
                id: product.id,
                title: product.title,
                price: product.price,
            }
        })
    }

    if (isLoading) {
        return(
            <p>Loading</p>
        )
    }

    return (
        <>
            <div className={styles.allitems}>{allItems}</div>
            <Cart items={cart} />
        </>
    )
}

export { Shop }