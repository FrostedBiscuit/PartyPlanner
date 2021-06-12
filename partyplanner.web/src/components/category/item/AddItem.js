import { useState } from "react";

const AddItem = ({ onItemCreated, onCancel }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const onSubmit = (e) => {
        e.preventDefault();

        if (name.length === 0) {
            alert("No name set!");
            return;
        }

        if (description.length === 0) {
            alert("No description set!");
            return;
        }

        onItemCreated({ name, description,  price: Number(price), quantity: Number(quantity) });

        setName("");
        setDescription("");
        setPrice(0);
        setQuantity(1);
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Name:</label>
                <br />
                <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <label htmlFor="desc">Description:</label>
                <br />
                <textarea name="desc" id="desc" cols="30" rows="3" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <br />
                <label htmlFor="price">Price:</label>
                <br />
                <input type="number" name="price" id="price" value={price} min="0" onChange={(e) => setPrice(e.target.value)} />
                <br />
                <label htmlFor="qty">Quantity:</label>
                <br />
                <input type="number" name="qty" id="qty" value={quantity} min="0" onChange={(e) => setQuantity(e.target.value)} />
                <br />
                <input type="submit" value="Create" />
                <button onClick={onCancel}>Cancel</button>
            </form>
        </div>
    );
};

export default AddItem;