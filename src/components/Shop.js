import ItemCard from './ItemCard';
import { Link } from 'react-router-dom';
import '../styles/Shop.css';

const Shop = ({products}) => {
    return(
        <div className="shop-cont">
            {
                products.map((item) => {
                    return(
                        <Link to={`/product/${item.id}`}>
                            <ItemCard key={item.id} item={item}/>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default Shop;