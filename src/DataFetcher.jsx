import { useState, useEffect } from "react";
import { ItemCard } from "./components/ItemCard";

function useFetchItems (url) {
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
                setState(items);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchItems();
    }, []);

    return { data: state }
}

export { useFetchItems }