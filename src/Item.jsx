import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";

const Item = () => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ itemParam, setItemParam ] = useState();
    const { name } = useParams();

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

    if (isLoading) {
        return (
            <div>Loading</div>
        )
    }

    return (
        <>
            <Link to='/'>Back to all products</Link>
            <h1>{itemParam.title}</h1>
            <img src={itemParam.image} />
            <h2>{itemParam.price}</h2>
            <p>{itemParam.description}</p>
            <p>{itemParam.category}</p>
        </>
    )
}

export { Item }