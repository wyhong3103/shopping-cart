import { useParams } from 'react-router-dom';
import NotFound from './NotFound';
import '../styles/Product.css';

const Product = ({cart, products, inc, dec}) => {
    const {id} = useParams();
    const notFound = id >= products.length || id <= 0;
    const image = (notFound ? null : require(`../assets/${id}.jpg`));
    const item = (
        notFound ?
        null
        :
        {
        name : products[id-1].name,
        price : products[id-1].price,
        rating :products[id-1].rating,
        qty : 0,
        }
    );

    for (const i of cart){
        if (!notFound && i.id === id){
            item.qty = i.qty;
        }
    }

    const handleChange = (e) => {
        if (e.target.value > item.qty){
            inc(id);
        }else{
            dec(id);
        }
    }

    return(
        <div>
            {
                notFound ? 
                <NotFound/> 
                :
                <div className="product-cont">
                    <div className="product-flex">
                        <div className="left">
                            <img src={image} alt={`item-${id}`}/>
                        </div>
                        <div className="right">
                            <h2>{item.name}</h2>
                            <h3>Rating - {item.rating} / 5</h3>
                            <h3>Price - {item.price}</h3>
                            <label htmlFor="qty-inp">
                                Qty
                                <input type="number" id="qty-inp" value={item.qty} onChange={(e) => handleChange(e)}/>
                            </label>
                        </div>
                    </div>

                </div>
            }
        </div>
    )
}

export default Product;