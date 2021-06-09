const submitHandler = (event) => {
    console.log(event);
};

const NewCategory = ({onCategoryCreated, onCancel}) => {
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="categoryName">Name:</label>
                <br/>
                <input type="text" name="categoryName" id="categoryName" />
                <br/>
                <label htmlFor="categoryDescription">Description:</label>
                <br/>
                <textarea name="categoryDescription" id="categoryDescription" cols="30" rows="5"></textarea>
                <br/>
                <input type="submit" value="Create" />
                <button onClick={onCancel}>Close</button>
            </form>
        </div>
    );
};

export default NewCategory;