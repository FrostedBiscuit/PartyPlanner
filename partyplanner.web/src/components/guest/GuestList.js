import { useState } from "react";
import Guest from "./Guest";
import NewGuest from "./NewGuest";

const GuestList = ({ guests, onGuestCreated, onGuestDeleted }) => {
    const [add, setAdd] = useState(false);

    const addGuest = (guest) => {
        onGuestCreated(guest);
    };
    const removeGuest = (guestId) => {
        onGuestDeleted(guestId);
    };


    return (
        <div className='component'>
            <h2>Guests</h2>
            {!add && <button onClick={() => setAdd(true)}>Add Guest</button>}
            {add && <NewGuest onGuestCreated={addGuest} onCancel={() => setAdd(false)} />}
            {guests && guests.map((g) => (<Guest key={g.guestId} guest={g} onGuestDeleted={removeGuest} />))}
        </div>
    );
};

export default GuestList;