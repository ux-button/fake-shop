import { useEffect, useReducer, useState } from 'react'

import { ItemCard } from './components/ItemCard';
import styles from './Shop.module.css'
import { ACTIONS, Reducer, currentCart } from './Reducer';
import { Cart } from './components/Cart';
import { useFetchItems } from './DataFetcher';


const Shop = () => {
    const { data } = useFetchItems('https://fakestoreapi.com/products?limit=20', 'all')

    const [ cart, despatch ] = useReducer(Reducer, currentCart);

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

    if (!data) {
        return(
            <p>Loading</p>
        )
    }

    return (
        <>
            <div className={styles.allitems}>{data}</div>
            <Cart id='thisCart' items={cart} />
        </>
    )
}

export { Shop }