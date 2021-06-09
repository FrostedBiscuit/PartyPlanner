import { useState } from "react";

const useInput = (value) => {
    const [partyId, setPartyId] = useState(value);
    const onChange = (event) => {
        setPartyId(event.target.value);
    };
    
    return {partyId, onChange};
};

const EnterPartyId = ({onPartyIdSet}) => {
    const inputProps = useInput();

    return (
        <div className='component'>
            <h2>Enter party ID:</h2>
            <input {...inputProps} placeholder='Party ID' />
            <button onClick={() => onPartyIdSet(inputProps.partyId)}>Submit</button>
        </div>
    );
};

EnterPartyId.defaultProps = {
    onPartyIdSet: (partyId) => console.log("This is the default function. ", partyId)
};

export default EnterPartyId;