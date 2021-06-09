import { useState } from 'react';

import ItemList from './item/ItemList';

const Category = ({ category }) => {
    const [showItems, setShowItems] = useState(true);

    return (
        <div className='item'>
            <p>Name: {category.name}</p>
            <p>Description: {category.description}</p>
            <button onClick={() => setShowItems(!showItems)}>Toggle items</button>
            {showItems && <ItemList items={category.items} />}
        </div>
    );
}

export default Category;