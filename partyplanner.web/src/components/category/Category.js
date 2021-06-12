import { useState } from 'react';

import ItemList from './item/ItemList';

const Category = ({ category, deleteCategory, updateCategory }) => {
    const [showItems, setShowItems] = useState(true);

    const removeItem = (itemId) => {
        category.items = category.items.filter((i) => i.itemId !== itemId);
        updateCategory(category);
    };

    const addItem = (item) => {
        category.items.push(item);
        updateCategory(category);
    }

    return (
        <div className='item'>
            <p>Name: {category.name}</p>
            <p>Description: {category.description}</p>
            <button onClick={deleteCategory}>Delete</button>
            <button onClick={() => setShowItems(!showItems)}>Toggle items</button>
            {showItems && <ItemList items={category.items} deleteItem={removeItem} createItem={addItem} />}
        </div>
    );
}

export default Category;