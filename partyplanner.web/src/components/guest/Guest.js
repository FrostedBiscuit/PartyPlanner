const Guest = ({ guest }) => {

    return (
        <div className='item'>
            <p>Name: { guest.name }</p>
            <p>Email: { guest.email }</p>
            <p>Phone: { guest.phone }</p>
        </div>
    )
};

export default Guest;