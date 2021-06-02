import Item from './Item';

const ItemList = ({ items }) => {
    return (
        <div>
            <p>Items:</p>
            {items.map(i => <Item key={i.itemId} item={i} />)}
        </div>
    )
}

export default ItemList;