import {ItemCard} from './ItemCard';

const Shop = ({products}) => {
    return(
        <div className="shop-cont">
            {
                products.map((item) => {
                    return(
                        <ItemCard key={item.id} item={item}/>
                    )
                })
            }
        </div>
    )
}

export default Shop;