import { useState } from "react";

const newCategory = {
    name: '',
    description: ''
};

const submitHandler = (event) => {
    event.preventDefault();
};


const NewCategory = ({onCategoryCreated, onCancel}) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const nameHandler = (event) => {
        const newName = event.target.value;
        newCategory.name = newName;
        setName(newName);
    };
    const descHandler = (event) => {
        const newDesc = event.target.value;
        newCategory.description = newDesc;
        setDescription(newDesc);
    };
    const createCategory = () => {
        onCategoryCreated(newCategory);
        setName("");
        setDescription("");
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="categoryName">Name:</label>
                <br/>
                <input type="text" name="categoryName" id="categoryName" onChange={nameHandler} value={name} />
                <br/>
                <label htmlFor="categoryDescription">Description:</label>
                <br/>
                <textarea name="categoryDescription" id="categoryDescription" cols="30" rows="3" onChange={descHandler} value={description}></textarea>
                <br/>
                <button onClick={createCategory}>Create</button>
                <button onClick={onCancel}>Close</button>
            </form>
        </div>
    );
};

export default NewCategory;