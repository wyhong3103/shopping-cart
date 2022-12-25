const ItemCard = ({item}) => {
    
    const image = require(`../assets/${item.id}.jpg`);

    return(
        <div className="item-card">
            <img src={image} alt={`item-${item.id}`}/>
            <h3 className="game-title">{item.name}</h3>
            <p className="game-price">{item.price}</p>
        </div>
    )
}

export default ItemCard;