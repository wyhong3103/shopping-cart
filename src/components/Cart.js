import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import Message from "./Message";
import '../styles/Cart.css';

const Cart = ({cart}) => {
    let total = 0;
    for(const i of cart){
        total += Number(i.qty) * Number(i.price);
    }

    return(
        <div>
            {
                cart.length === 0 ? 
                <Message msg="Cart is empty!"/>
                :
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
                    <div className="checkout-cont">
                        <p className="total">Total : ${total.toFixed(2)}</p>
                        <button className="checkout-btn">
                            Checkout
                        </button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Cart;