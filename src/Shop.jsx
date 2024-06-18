import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const Shop = () => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ allItems, setAllItems ] = useState();

    useEffect(() => {
        const fetchItems = async (url) => {
            try {
                const response = await fetch(url, {mode: 'cors'});

                if (response.status > 400) {
                    throw new Error(`Server response ${response.status}`);
                }
                const items = await response.json();
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
                setAllItems(items);
            }
        }

        fetchItems('https://fakestoreapi.com/products');
    }, [])
}

export { Shop }