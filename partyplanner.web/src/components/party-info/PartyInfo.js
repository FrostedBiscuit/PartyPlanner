import { useState } from "react";
import EditPartyInfo from "./EditPartyInfo";

const PartyInfo = ({ partyInfo, id, onUpdatePartyInfo}) => {
    const partyInfoUpdated = (info) => {
        setEdit(false);
        onUpdatePartyInfo(info);
    }

    const [edit, setEdit] = useState(false);

    if (!edit) {
        return (
            <div className='component'>
                {id && <p>Party ID: {id}</p>}
                <p>Name: {partyInfo.name}</p>
                {partyInfo.description && <p>Description: {partyInfo.description}</p>}
                {partyInfo.Address && <p>Address: {partyInfo.address}</p>}
                {partyInfo.dateFrom && <p>Date: {partyInfo.dateFrom}</p>}
                {partyInfo.budget && <p>Budget: {partyInfo.budget}€</p>}
                <button onClick={() => setEdit(true)}>Edit</button>
            </div>
        );
    } else {
        return (
            <EditPartyInfo partyInfo={partyInfo} onUpdatePartyInfo={partyInfoUpdated} onCancel={() => setEdit(false)} />
        );
    }
};

export default PartyInfo;