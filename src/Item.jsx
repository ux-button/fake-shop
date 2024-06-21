import { useEffect, useState, useReducer } from "react";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { Cart } from "./components/Cart";
import { Reducer, currentCart, ACTIONS } from './Reducer';
import { useFetchItems } from "./DataFetcher";

const Item = () => {
    const { name } = useParams();
    const { data } = useFetchItems('https://fakestoreapi.com/products/' + name, 'one')
    console.log(data)

    const [cart, despatch] = useReducer(Reducer, currentCart);

    // useEffect(() => {
    //     const fetchItem = async (url) => {
    //         try {
    //             const response = await fetch(url, {mode: 'cors'});
    //             if (!response.ok) {
    //                 throw new Error(`Server respond ${response.status}`);
    //             }
    //             const itemData = await response.json();
    //             setItemParam(itemData);
    //         } catch (error) {
    //             console.log(error)
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     }

    //     fetchItem('https://fakestoreapi.com/products/' + name)
    // }, [])

    function handleAddToCart () {
        despatch({
            type: ACTIONS.ADD_TO_CART,
            payload: {
                id: data.id,
                title: data.title,
                price: data.price,
            }
        })
    }

    if (!data) {
        return (
            <div>Loading</div>
        )
    }

    console.log(cart)

    return (
        <>
            <Link to='/'>Back to all products</Link>
            <h1>{data.title}</h1>
            <img src={data.image} />
            <h2>{data.price}</h2>
            <button onClick={handleAddToCart}>Add to cart</button>
            <p>{data.description}</p>
            <p>{data.category}</p>
            <Cart id='thisCart' items={cart} />
        </>
    )
}

export { Item }