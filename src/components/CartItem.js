import '../styles/CartItem.css';

const CartItem = ({item}) => {
    const image = require(`../assets/${item.id}.jpg`);

    return(
        <div className="cart-item">
            <div className="left">
                <img src={image} alt={`item-${item.id}`}/>
            </div>
            <div className="right">
                <h3 className="cart-game-title">{item.name}</h3>
                <p>Qty : {item.qty}</p>
                <p>${Number(item.qty) * Number(item.price)}</p>
            </div>
        </div>
    )
};

export default CartItem;