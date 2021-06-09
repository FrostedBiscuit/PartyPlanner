import { useState } from 'react';
import Category from './Category';
import NewCategory from './NewCategory';

const CategoryList = ({categories}) => {
    const [showCategoryForm, setShowCategoryForm] = useState(false);
    const cancelForm = () => setShowCategoryForm(false);
    const categoryCreated = () => console.log("Category created!");

    return (
        <div className='component'>
            <h2>Categories</h2>
            {!showCategoryForm && <button onClick={() => setShowCategoryForm(true)}>New category</button>}
            {showCategoryForm && <NewCategory onCategoryCreated={categoryCreated} onCancel={cancelForm} />}
            {categories && categories.map(c => <Category key={c.categoryId} category={c} />)}
        </div>
    );
}


export default CategoryList;