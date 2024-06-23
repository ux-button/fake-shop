import { useReducer } from "react";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import { useFetchItems } from "./DataFetcher";
import { useOutletContext } from "react-router-dom";

const Item = () => {
    const { name } = useParams();
    const { data } = useFetchItems('https://fakestoreapi.com/products/' + name);
    const [ state, dispatch ] = useOutletContext();

    function handleAddToCart () {
        dispatch({
            type: 'add-to-cart',
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

    return (
        <>
            <Link to='/'>Back to all products</Link>
            <h1>{data.title}</h1>
            <img src={data.image} />
            <h2>{data.price}</h2>
            <button onClick={handleAddToCart}>Add to cart</button>
            <p>{data.description}</p>
            <p>{data.category}</p>
        </>
    )
}

export { Item }