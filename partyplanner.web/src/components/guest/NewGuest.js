import { useState } from "react";

const NewGuest = ({ onGuestCreated, onCancel }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        if (name.length === 0) {
            alert("No name set!");
            return;
        }
        if (email.length === 0) {
            alert("No email set!");
            return;
        }
        if (phone.length === 0) {
            alert("No phone set!");
            return;
        }

        onGuestCreated({name, email, phone});
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Name:</label>
                <br />
                <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <label htmlFor="email">Email:</label>
                <br />
                <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label htmlFor="phone">Phone number:</label>
                <br />
                <input type="tel" pattern="[0-9]{3}[0-9]{3}[0-9]{3}" name="phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                <br />
                <br />
                <input type="submit" value="Add" />
                <button onClick={onCancel}>Cancel</button>
            </form>
        </div>
    );
};

export default NewGuest;