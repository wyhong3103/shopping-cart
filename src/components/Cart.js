import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import '../styles/Cart.css';

const Cart = ({cart}) => {
    let total = 0;
    for(const i of cart){
        total += Number(i.qty) * Number(i.price);
    }

    return(
        <div className="cart-cont">
            <div className="cart-items">
                {
                    cart.map(
                        (item) => {
                            return(
                                <Link to={`/product/${item.id}`}>
                                    <CartItem key={item.id} item={item}/>
                                </Link>
                            )
                        }
                    )
                }
            </div>
            <div>
                <p className="total">Total : ${total.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default Cart;