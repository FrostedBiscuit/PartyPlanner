const Guest = ({ guest, onGuestDeleted }) => {

    return (
        <div className='item'>
            <p>Name: { guest.name }</p>
            <p>Email: { guest.email }</p>
            <p>Phone: { guest.phone }</p>
            <button onClick={() => onGuestDeleted(guest.guestId)}>X</button>
        </div>
    )
};

export default Guest;