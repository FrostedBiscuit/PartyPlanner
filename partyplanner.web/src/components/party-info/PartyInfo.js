const PartyInfo = ({ partyInfo }) => {

    if (partyInfo) {
        return (
            <div className='component'>
                <p>Name: {partyInfo.name}</p>
                <p>Description: {partyInfo.description}</p>
                <p>Address: {partyInfo.address}</p>
                <p>Date: {partyInfo.dateFrom}</p>
                <p>Budget: {partyInfo.budget}€</p>
            </div>
        );
    } else {
        return (
            <div className='component'>
                <p>No party info object provided...</p>
            </div>
        )
    }
};

export default PartyInfo;