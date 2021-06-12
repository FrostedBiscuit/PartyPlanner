const Item = ({ item, onItemDelete }) => {
    return (
        <div className='subitem'>
            <p>Name: {item.name}</p>
            <p>Price: {item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={onItemDelete}>X</button>
        </div>
    );
};

export default Item;