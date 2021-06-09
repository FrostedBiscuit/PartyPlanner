const newCategory = {
    name: '',
    description: ''
};

const submitHandler = (event) => {
    event.preventDefault();
};

const nameHandler = (event) => {
    newCategory.name = event.target.value;
};
const descHandler = (event) => {
    newCategory.description = event.target.value;
};

const NewCategory = ({onCategoryCreated, onCancel}) => {
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="categoryName">Name:</label>
                <br/>
                <input type="text" name="categoryName" id="categoryName" onChange={nameHandler} />
                <br/>
                <label htmlFor="categoryDescription">Description:</label>
                <br/>
                <textarea name="categoryDescription" id="categoryDescription" cols="30" rows="5" onChange={descHandler}></textarea>
                <br/>
                <button onClick={() => onCategoryCreated(newCategory)}>Create</button>
                <button onClick={onCancel}>Close</button>
            </form>
        </div>
    );
};

export default NewCategory;