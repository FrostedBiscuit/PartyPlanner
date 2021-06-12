import { useState } from 'react';
import AddItem from './AddItem';
import Item from './Item';

const ItemList = ({ items, deleteItem, createItem }) => {
    const [showAddItem, setShowAddItem] = useState(false);

    return (
        <div>
            {!showAddItem && <button onClick={() => setShowAddItem(true)}>Add Item</button>}
            {showAddItem && <AddItem onItemCreated={createItem} onCancel={() => setShowAddItem(false)} />}
            {items && items.map(i => <Item key={i.itemId} item={i} onItemDelete={() => deleteItem(i.itemId)} />)}
        </div>
    )
};

export default ItemList;