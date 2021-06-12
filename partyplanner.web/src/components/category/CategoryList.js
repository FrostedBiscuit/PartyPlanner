import { useState } from 'react';
import Category from './Category';
import NewCategory from './NewCategory';

const CategoryList = ({categories, onCategoryCreated, onCategoryDeleted, onCategoryUpdated}) => {
    const [showCategoryForm, setShowCategoryForm] = useState(false);
    const cancelForm = () => setShowCategoryForm(false);

    return (
        <div className='component'>
            <h2>Categories</h2>
            {!showCategoryForm && <button onClick={() => setShowCategoryForm(true)}>New category</button>}
            {showCategoryForm && <NewCategory onCategoryCreated={onCategoryCreated} onCancel={cancelForm} />}
            {categories && categories.map(c => <Category key={c.categoryId} category={c} deleteCategory={() => onCategoryDeleted(c.categoryId)} updateCategory={onCategoryUpdated} />)}
        </div>
    );
}


export default CategoryList;