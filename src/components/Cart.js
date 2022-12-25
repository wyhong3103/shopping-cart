import CartItem from "./CartItem";

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
                                <CartItem key={item.id} item={item}/>
                            )
                        }
                    )
                }
            </div>
            <div>
                <p>Total : {total}</p>
            </div>
        </div>
    )
}

export default Cart;