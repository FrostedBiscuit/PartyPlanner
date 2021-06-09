import { useState } from "react"

const EditPartyInfo = ({ partyInfo, onUpdatePartyInfo }) => {
    const onSubmit = (e) => {
        e.preventDefault();

        onUpdatePartyInfo({name, description, address, dateFrom: date, budget: Number(budget)});
    }

    const [name, setName] = useState(partyInfo.name);
    const [description, setDescription] = useState(partyInfo.description);
    const [address, setAddress] = useState(partyInfo.address);
    const [date, setDate] = useState(partyInfo.date);
    const [budget, setBudget] = useState(partyInfo.budget);

    return (
        <div className="component">
            <form onSubmit={onSubmit} id="editPartyInfoForm">
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" id="name" onChange={(e) => setName(e.target.value)} value={name} />
                <br />
                <label htmlFor="description">Description: </label>
                <input type="text" name="description" id="description" onChange={(e) => setDescription(e.target.value)} value={description ? description : ''} />
                <br />
                <label htmlFor="address">Address: </label>
                <input type="text" name="address" id="address" onChange={(e) => setAddress(e.target.value)} value={address ? address : ''} />
                <br />
                <label htmlFor="date">Date: </label>
                <input type="date" name="date" id="date" onChange={(e) => setDate(e.target.value)} value={date ? date : new Date()} />
                <br />
                <label htmlFor="budget">Budget: </label>
                <input type="number" name="budget" id="budget" onChange={(e) => setBudget(e.target.value)} value={budget ? budget : 0} />
                <br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default EditPartyInfo;