import { useState, useEffect } from "react";
import { ItemCard } from "./components/ItemCard";

function useFetchItems (url, quantity) {
    const [isLoading, setIsLoading] = useState(true);
    const [state, setState] = useState();

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch(url, {mode: 'cors'});
                if (!response.ok) {
                    throw new Error(`Server response ${response.status}`);
                }
                const items = await response.json();
                if (quantity === 'all') {
                    setState(
                        items.map(item => <ItemCard key={item.id} item={item} />)
                    );
                } else if (quantity === 'one'){
                    setState(items);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchItems('https://fakestoreapi.com/products?limit=20');
    }, []);

    return { data: state }
}

export { useFetchItems }