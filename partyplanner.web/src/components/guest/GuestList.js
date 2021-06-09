import Guest from "./Guest";

const GuestList = ({ guests }) => {
    if (guests) {
        return (
            <div className='component'>
                <h2>Guests</h2>
                {guests.map((g) => (<Guest key={g.guestId} guest={g} />))}
            </div>
        );
    } else {
        return (
            <div className='component'>
                <p>Looks like there aren't any guests invited yet...</p>
            </div>
        );
    }
};

export default GuestList;