const ItemCard = (prop) => {
    
    const image = require(`../assets/${prop.item.id}.jpg`);

    return(
        <div className="item-card">
            <img src={image} alt={`item-${prop.item.id}`}/>
            <h3 className="game-title">{prop.item.name}</h3>
            <p className="game-price">{prop.item.price}</p>
        </div>
    )
}

export default ItemCard;