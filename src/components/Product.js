import { useParams } from 'react-router-dom';

const Product = ({cart, products, inc, dec}) => {
    const {id} = useParams();
    const image = require(`../assets/${id}.jpg`);
    const item = {
        name : products[id-1].name,
        price : products[id-1].price,
        rating :products[id-1].rating,
        qty : 0,
    };

    for (const i of cart){
        if (i.id === id){
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
        <div className="product-cont">
            <div className="left">
                <img src={image} alt={`item-${id}`}/>
            </div>
            <div className="right">
                <h2>{item.name}</h2>
                <h3>Rating - {item.rating} / 5</h3>
                <h3>Price - {item.price}</h3>
                <label for="qty-inp">
                    <input type="number" id="qty-inp" value={item.qty} onChange={(e) => handleChange(e)}/>
                </label>
            </div>

        </div>
    )
}

export default Product;