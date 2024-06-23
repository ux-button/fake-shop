import { useFetchItems } from './DataFetcher';

import styles from './Shop.module.css'
import { ItemCard } from './components/ItemCard';


const Shop = () => {
    const { data } = useFetchItems('https://fakestoreapi.com/products?limit=20')

    if (!data) {
        return(<p>Loading</p>)
    }

    return (
        <div className={styles.allitems}>
            {data.map(item => <ItemCard key={item.id} item={item} />)}
        </div>
    )
}

export { Shop }