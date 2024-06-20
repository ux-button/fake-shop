import { useEffect, useState, useReducer } from "react";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { Cart } from "./components/Cart";
import { Reducer, currentCart, ACTIONS } from './Reducer';

const Item = () => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ itemParam, setItemParam ] = useState();
    const { name } = useParams();

    const [cart, despatch] = useReducer(Reducer, initialCart);

    useEffect(() => {
        const fetchItem = async (url) => {
            try {
                const response = await fetch(url, {mode: 'cors'});
                if (!response.ok) {
                    throw new Error(`Server respond ${response.status}`);
                }
                const itemData = await response.json();
                setItemParam(itemData);
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false);
            }
        }

        fetchItem('https://fakestoreapi.com/products/' + name)
    }, [])

    function handleAddToCart () {
        despatch({
            type: ACTIONS.ADD_TO_CART,
            payload: {
                id: itemParam.id,
                title: itemParam.title,
                price: itemParam.price,
            }
        })
    }

    if (isLoading) {
        return (
            <div>Loading</div>
        )
    }

    console.log(cart)

    return (
        <>
            <Link to='/'>Back to all products</Link>
            <h1>{itemParam.title}</h1>
            <img src={itemParam.image} />
            <h2>{itemParam.price}</h2>
            <button onClick={handleAddToCart}>Add to cart</button>
            <p>{itemParam.description}</p>
            <p>{itemParam.category}</p>
            <Cart items={cart} />
        </>
    )
}

export { Item }